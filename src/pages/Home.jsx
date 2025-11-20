import React from "react";
import logo from "../assets/logo.jpg";
import { ArtistTable } from "../components/ArtistTable";
import { artistsWithAlbums } from "../utils/utils";

export function Home() {
    const artists = artistsWithAlbums();
    return <div>
        <ArtistTable artists={artists}/>
    </div>;
}