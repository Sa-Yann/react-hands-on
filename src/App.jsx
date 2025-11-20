import logo from "./assets/logo.jpg";
import { ArtistTable } from "./components/ArtistTable";
import "./App.css";
import { artistsWithAlbums } from "./utils/utils";
import { useState } from "react";
import { AlbumDisplay } from "./components/AlbumDisplay";
import { Home as HomePage } from "./pages/Home";
import { Artist } from "./pages/Artist";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
  Link,
  Outlet,
} from "react-router-dom";

// Les routes sont définies dans un objet JavaScript
const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    // Il est possible d'avoir des routes "enfant", si le composant parent rends un <Outlet/>
    children: [
    {
        path: "/",
        element: <HomePage />,
    },
  {
    // Route à laquel on souhaite afficher le composant
    path: "/artist/:name",
    // Composant à afficher
    element: <Artist />,
  }],
  }

  
]);

export const App = () => {
  return <RouterProvider router={router} />;
}


export function Layout  ()  {
  const [displayedArtist, setDisplayedArtist] = useState(undefined);

  return (
    <>
      <header>
        <nav>
          <a href={"/"}>
            <img
              src={logo}
              alt="logo"
              height="70"
              style={{ borderRadius: "50%" }}
            />
          </a>
          <ul>
            <li>
              <a href="/search">search</a>
            </li>
            <li>
              <a href="/favorites">see favorites</a>
            </li>
          </ul>
        </nav>
      </header>
     
      <main>
         <Outlet/>
      </main>
    </>
  );
};
