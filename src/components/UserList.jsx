import { Card } from "react-bootstrap";
import noImg from "../assets/images/no-img.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = ({ user }) => {
  // for handle broken image link
  const [isValid, setIsValid] = useState(true);

  const handleImageError = () => {
    setIsValid(false);
  };
  return (
    <Card className="px-2">
      {isValid ? (
        <Card.Img onError={handleImageError} variant="top" src={user?.avatar} />
      ) : (
        <img className="details-img" src={noImg} alt="No data to show" />
      )}
      <Card.Body>
        <Link to={`/${user?.profile?.username}`}>
          <Card.Title>
            {user?.profile?.firstName} {""}
            {user?.profile?.lastName}
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default UserList;
