import Search from "../components/search/Search";
import UserList from "./user-list/UserList";
import Pagination from "../components/pagination/Pagination";
import { useEffect, useState } from "react";
import AddUser from "./user-add/AddUser";
import UserDetails from "./user-details/UserDetails";
import DeleteUser from "./user-delete/DeleteUser";

const baseUrl = `http://localhost:3030/jsonstore`;

export default function UserSection() {
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showUserDetailsById, setShowUserDetailsById] = useState(null);
  const [showUserDeleteById, setShowUserDeleteById] = useState(null);

  useEffect(() => {
    (async function getUsers() {
      try {
        const response = await fetch(`${baseUrl}/users`);
        const result = await response.json();
        const usersResult = Object.values(result);

        setUsers(usersResult);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  const addUserClickHandler = () => {
    setShowAddUser(true);
  };

  const closeAddUserHandler = () => {
    setShowAddUser(false);
  };

  const addUserData = async (e) => {
    e.preventDefault();

    // get user data
    const formData = new FormData(e.currentTarget);
    const userData = {
      ...Object.fromEntries(formData),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    //make post request
    const response = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const createdUser = await response.json();
    //update local state
    setUsers(oldUsers => [...oldUsers, createdUser]);

    // close modal
    closeAddUserHandler(false);
  };

  const userDetailsClickHandler = (userId) => {
    setShowUserDetailsById(userId);
  }

  const userDeleteClickHandler = (userId) => {
    setShowUserDeleteById(userId);
  }

  const userDeleteHandler = async (userId) => {
    //delete request to server
    const response = await fetch(`${baseUrl}/users/${userId}`, {
      method: 'DELETE'
    });


    //delete from local state
    setUsers(oldUsers => oldUsers.filter(user => user._id !== userId));

    //close modal
    setShowUserDeleteById(null);
  }

  return (
    <>
      <section className="card users-container">
        <Search />

        <UserList
          users={users}
          onUserDetailsClick={userDetailsClickHandler}
          onUserDeleteClick={userDeleteClickHandler}
        />

        {showAddUser && (
          <AddUser
            onClose={closeAddUserHandler}
            onSave={addUserData} />
        )}

        {showUserDetailsById && (
          <UserDetails
            user={users.find(user => user._id === showUserDetailsById)}
            onClose={() => setShowUserDetailsById(null)}
          />
        )}

        {showUserDeleteById && (
          <DeleteUser
          onClose={() => setShowUserDeleteById(null)}
          onUserDeleteClick={() => userDeleteHandler(showUserDeleteById)}
          />
        )}

        

        <button className="btn-add btn" onClick={addUserClickHandler}>
          Add new user
        </button>

        <Pagination />
      </section>
    </>
  );
}
