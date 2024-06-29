import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import Layout from "./pages/layout/layout";
import ListPage from "./pages/listPage/listPage";
import SinglePage from "./pages/singlePage/singlePage";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },{
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
