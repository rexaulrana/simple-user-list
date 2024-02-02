import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import Spinner from "./Spinner";
import { Button, Card } from "react-bootstrap";
import "./User.css";
const UserDetails = () => {
  const [details, setDetails] = useState("");
  const [isPending, error, users] = useData();
  const { username } = useParams();
  useEffect(() => {
    const userDetails = users?.find(
      (user) => user?.profile?.username === username
    );
    console.log("de", userDetails);
    setDetails(userDetails);
  }, [username, users]);
  if (isPending) {
    return <Spinner></Spinner>;
  }
  //   console.log(id);
  return (
    <div className="user-details px-2">
      <h4>User's Details</h4>
      <div>
        <div>
          <img src={details?.avatar} alt="Image not found" />
        </div>
        <div>
          <h5>
            Name: {details?.profile?.firstName} {details?.profile?.lastName}
          </h5>
          <h6> Title: "{details?.jobTitle}"</h6>
          <h6>User Name: {details?.profile?.username}</h6>
          <h6>Email: {details?.profile?.email}</h6>
          <p>Bio: {details?.Bio}</p>
          <p>Created At: {details?.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
