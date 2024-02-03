import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import Spinner from "./Spinner";
import "./User.css";
import noImg from "../assets/images/no-img.jpg";

const UserDetails = () => {
  // for handle broken image link
  const [isValid, setIsValid] = useState(true);

  const handleImageError = () => {
    setIsValid(false);
  };
  const [details, setDetails] = useState("");
  const [isPending, error, users] = useData();
  const { username } = useParams();
  useEffect(() => {
    const userDetails = users?.find(
      (user) => user?.profile?.username === username
    );
    // console.log("de", userDetails);
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
          {isValid ? (
            <img
              className="details-img"
              src={details?.avatar}
              alt="No data to show"
            />
          ) : (
            <img className="details-img" src={noImg} alt="No data to show" />
          )}
        </div>
        <div>
          <h5>
            Name: {details?.profile?.firstName} {details?.profile?.lastName}
          </h5>
          <p>Bio: {details?.Bio}</p>
          <h6> Title: "{details?.jobTitle}"</h6>
          <h6>User Name: {details?.profile?.username}</h6>
          <h6>Email: {details?.profile?.email}</h6>
          <p>Created At: {details?.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
