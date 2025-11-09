import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import AllMovies from "../pages/AllMovies/AllMovies";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyCollection from "../pages/MyCollection/MyCollection";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import AddMovie from "../pages/AddMovie/AddMovie";
import UpdateMovie from "../pages/UpdateMovie/UpdateMovie";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/movies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails></MovieDetails>,
      },
      {
        path: "/add",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/movies/update/:id",
        element: <UpdateMovie></UpdateMovie>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-collection",
        element: <MyCollection></MyCollection>,
      },
    ],
  },
]);

export default router;
