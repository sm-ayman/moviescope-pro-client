import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AllMovies from "../pages/AllMovies/AllMovies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import AddMovie from "../pages/AddMovie/AddMovie";
import UpdateMovie from "../pages/UpdateMovie/UpdateMovie";
import MyCollection from "../pages/MyCollection/MyCollection";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Error404 from "../pages/Err/Error404";
import WatchList from "../pages/WatchList/WatchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },

      { path: "/movies", element: <AllMovies /> },

      {
        path: "/movies/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },

      {
        path: "/movies/update/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-collection",
        element: (
          <PrivateRoute>
            <MyCollection />
          </PrivateRoute>
        ),
      },
      {
        path: "/watchlist",
        element: (
          <PrivateRoute>
            <WatchList />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

export default router;
