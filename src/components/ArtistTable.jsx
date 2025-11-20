import React from "react";


export function ArtistTable({ artists, onSelectedArtist }) {

  console.log(artists);
  return (
    <table>
      <thead>
        <tr>
          <th>Artist ({artists.length})</th>
          <th>Albums</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {artists.map(({ name, albums }) => {
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{albums.length === 0 ? "No albums" : albums.length}</td>
              <td>
                <button
                onClick= {() => {
                  onSelectedArtist({name, albums})
                }}
                >Détail</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
