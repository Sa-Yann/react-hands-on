import { artistsWithAlbums } from "../utils/utils";
import { ArtistTable } from "../components/ArtistTable";
import { search } from "../utils/utils";

const artists = artistsWithAlbums();

export function Artists() {
  return (
    <>
      <input
        type="search"
        onChange={(e) => {
          const value = e?.target?.value;
          console.log(value);
          search(value).then((results) => {
            console.log(results);
          });
        }}
      />
      <ArtistTable artists={artists} />
    </>
  );
}
