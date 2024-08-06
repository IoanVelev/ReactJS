import Search from "../components/search/Search";
import UserList from "./user-list/UserList";
import Pagination from "../components/pagination/Pagination";

export default function UserSection() {
  return (
    <>
      <section className="card users-container">
        <Search />

        <UserList />

        <button className="btn-add btn">Add new user</button>

        <Pagination />
      </section>
    </>
  );
}
