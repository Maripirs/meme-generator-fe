import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Library.css";

const Library = () => {
  const [meme, setMeme] = useState([]);

  const getMeme = async () => {
    try {
      const response = await fetch(`our backend URL here`);
      const allMemes = await response.json();
      setMeme(allMemes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMeme();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>Created Memes</h1>
        {/* <img src={meme.image} /> */}
        {/* <h2>{meme.text}</h2> */}
      </div>
    );
  };

  const loading = () => {
    return <div>The memes are loading.</div>;
  };

  return <div>{meme ? loaded() : loading()}</div>;
};
export default Library;
