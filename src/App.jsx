import logo from "./assets/logo.jpg";
import "./App.css";
import { artistsWithAlbums } from "./utils/utils";
const artists = artistsWithAlbums()
export const App = () => {


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
        <table>
          <thead>
            <tr>
              <th>artist</th>
              <th>Album</th>
            </tr>
          </thead>
          <tbody>
            
            {artists.map(({name, albums}) => {
              const albumLenggth= albums.length === 0 ? "No Album" : albums.length
              console.log(albums)
              return (
                <tr key={name}>   
                  <td>{name}</td>
                  <td>{albumLenggth}</td>
               
                </tr>
              )
            } 
            )}
            {/* {artists.map((artist) => {
              return (
                <tr key={artist.id}>  
                  <td>{artist.name}</td>
                  <td>{artist.albums.length === 0 ? "No Album" : artist.albums.length}</td>
                  {console.log(artist.albums)}
                </tr>
              )
            } 
            )} */}
          </tbody>
        </table>      
      </main>
    </>
  );
};
