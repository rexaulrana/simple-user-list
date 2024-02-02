import UserList from "../components/UserList";
import useData from "../hooks/useData";

const Home = () => {
  const [isPending, error, users] = useData();
  //   console.log(users);
  return (
    <div
      className="d-md-flex flex-sm-column flex-md-row justify-content-md-around align-items-md-start
 "
    >
      <div className="col-md-4 ">
        <h4>Users List </h4>
        <div data-bs-spy="scroll">
          {users?.map((user) => (
            <UserList key={user.id} user={user}></UserList>
          ))}
        </div>
      </div>
      <div className="col-md-7 ">
        <h4>User's Details</h4>
      </div>
    </div>
  );
};

export default Home;
