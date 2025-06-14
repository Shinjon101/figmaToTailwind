import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import LandingPage from "./Pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);
export default router;
