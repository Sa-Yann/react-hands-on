import logo from "./assets/logo.jpg";
import { ArtistTable } from "./components/ArtistTable";
import "./App.css";
import { artistsWithAlbums } from "./utils/utils";
import { useState } from "react";
const artists = artistsWithAlbums();
export const App = () => {
  const [selectedArtist, setSelectedArtist] = useState(undefined);
  const [selectedAlbums, setSelectedAlbums] = useState(undefined);
  console.log(selectedAlbums)
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
        <input type="text" />
          <p>{selectedArtist?.name}</p>
        <ul>
          {selectedArtist?.albums.map((album) => {
            return < li key={album}>{album}  </li> 
          })}
        </ul>
                  
        <ArtistTable 
          artists={artists} 
          onSelectedArtist={(artist) => setSelectedArtist(artist)}
      
          
        />
      </main>
    </>
  );
};
