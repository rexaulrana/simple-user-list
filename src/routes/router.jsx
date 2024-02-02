import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import UserDetails from "../components/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement:
    children: [
      {
        path: "/:username",
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);

export default router;
