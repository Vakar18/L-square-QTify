import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "./Components/HeroSection/hero";
import Navbar from "./Components/Navbar/navbar";
import Section from "./Components/Section/section";
import FilterSection from "./Components/FilterSection/filter";

function App() {
  const ENDPOINT = "https://qtify-backend-labs.crio.do/";

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filterdSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });

    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
    axios.get(`${ENDPOINT}songs`).then(({ data }) => {
      setSongs(data);
      setFilteredSongs(data)
    });
    axios.get(`${ENDPOINT}genres`).then(({ data }) => {
      setGenres([{"key":"all","label":"All"}, ...data.data]);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section navId="ta" title="Top Albums" data={topAlbums} />
      <Section navId="na" title="New Albums" data={newAlbums}  />
      <FilterSection title="Songs" data={filterdSongs} filters={genres}
      executeFiter = {(genre)=> {
        if(genre === "all"){
          setFilteredSongs(songs)
        } else {
          setFilteredSongs(songs.filter(song => song.genre.key === genre))
        }
      }}
      />
    </>
  );
}

export default App;
