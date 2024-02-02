import { Outlet } from "react-router-dom";
import Users from "../components/Users";
import "./Main.css";
const Main = () => {
  return (
    <div className="d-sm-flex  flex-sm-column justify-content-md-around flex-md-row  ">
      <div className="mb-5">
        <Users></Users>
      </div>
      <div className="details">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
