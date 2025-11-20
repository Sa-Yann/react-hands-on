import { fetchCoverImage } from "../utils/utils";
import { useEffect , useState} from "react";
export function AlbumDisplay({ artist, albums }) {

  return (
    <div>
      <h1>{artist}</h1>
      <h2>Albums</h2>
      {albums.length === 0 ? (
        <>No album found for {artist}</>
      ) : (
        <ul>
          
          {albums.map((a) => (
            <Album artistName={artist} albumName={albums[0]} />

          ))}
        </ul>
      )}
    </div>
  );
}

function Album({ artistName, albumName }) {

  const [imageUrl, setImageUrl] = useState(undefined);

  useEffect(() => {
    fetchCoverImage(artistName,albumName, "medium").then((imageUrl) => setImageUrl(imageUrl));
  }, [artistName, albumName ]);

  return <>
           <h3>{albumName} by {artistName}</h3>
            <img src={imageUrl} alt="" />
       </>
  



    // fetchCoverImage(artistName,albumName, "medium").then((imageUrl) => console.log(imageUrl));
    // return <div>
    //     <h3>{albumName} by {artistName}</h3>
    // </div>
}