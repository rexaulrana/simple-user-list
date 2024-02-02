import useData from "../hooks/useData";
import UserList from "./UserList";
import "./User.css";
import Spinner from "./Spinner";
const Users = () => {
  const [isPending, error, users] = useData();
  if (isPending) {
    return <Spinner></Spinner>;
  }
  //   console.log(users);
  return (
    <div>
      <h5 className="mb-2">Users List</h5>
      <div className="scrolling-verti">
        {users?.map((user) => (
          <UserList key={user.id} user={user}></UserList>
        ))}
      </div>
    </div>
  );
};

export default Users;
