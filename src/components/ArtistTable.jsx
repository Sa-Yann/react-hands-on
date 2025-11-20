import { shape, arrayOf, string, array, func } from "prop-types";
import { Link } from "react-router-dom";
import { Cover } from "./ArtistDetails";

export function ArtistTable({ artists }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Artist ({artists.length})</th>
          <th>Albums</th>
          <th>Pochette</th>
        </tr>
      </thead>
      <tbody>
        {artists.map(({ name, albums }) => {
          return (
            <tr key={name}>
              <td>
                <Link to={`/artists/${encodeURIComponent(name)}`}>{name}</Link>
              </td>
              <td>{albums.length === 0 ? "No albums" : albums.length}</td>
              <td> {albums.map((a) => (<Cover key={a} artist={name} name={a} size="small" />))}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

ArtistTable.propTypes = {
  artists: arrayOf(
    shape({
      name: string.isRequired,
      albums: arrayOf(string),
    })
  ).isRequired,
};
