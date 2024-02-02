import { Button, Card } from "react-bootstrap";
import noImg from "../assets/images/no-img.jpg";

const UserList = ({ user }) => {
  console.log(user);
  // const { lastName, firstName, avatar, id } = user;
  return (
    <Card style={{ width: "18rem" }}>
      {user?.avatar ? (
        <Card.Img variant="top" src={user?.avatar} />
      ) : (
        <img src={noImg} alt="No image found" />
      )}
      <Card.Body>
        <Card.Title>
          {user?.profile?.firstName} {""}
          {user?.profile?.lastName}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserList;
