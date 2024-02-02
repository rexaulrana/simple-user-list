import { Card } from "react-bootstrap";
import noImg from "../assets/images/no-img.jpg";
import { Link } from "react-router-dom";

const UserList = ({ user }) => {
  // console.log(user);
  // const { lastName, firstName, avatar, id } = user;
  return (
    <Card className="px-2" style={{ width: "18rem" }}>
      {user?.avatar ? (
        <Card.Img variant="top" src={user?.avatar} />
      ) : (
        <img src={noImg} alt="No image found" />
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
