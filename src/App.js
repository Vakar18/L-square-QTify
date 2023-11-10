import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "./Components/HeroSection/hero";
import Navbar from "./Components/Navbar/navbar";
import Section from "./Components/Section/section";

function App() {
  const ENDPOINT = "https://qtify-backend-labs.crio.do/";

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });

    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
    </>
  );
}

export default App;
