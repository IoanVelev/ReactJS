import Search from "../components/search/Search";
import UserList from "./user-list/UserList";
import Pagination from "../components/pagination/Pagination";
import { useEffect, useState } from "react";
import AddUser from "./user-add/AddUser";
import UserDetails from "./user-details/UserDetails";

const baseUrl = `http://localhost:3030/jsonstore`;

export default function UserSection() {
  const [users, setUsers] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showUserDetailsById, setShowUserDetailsById] = useState(null);

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

  const closeAddUserHandler = (userId) => {
    setShowAddUser(userId);
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

  return (
    <>
      <section className="card users-container">
        <Search />

        <UserList
          users={users}
          onUserDetailsClick={userDetailsClickHandler}
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

        <button className="btn-add btn" onClick={addUserClickHandler}>
          Add new user
        </button>

        <Pagination />
      </section>
    </>
  );
}
