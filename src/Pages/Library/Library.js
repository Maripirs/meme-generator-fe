import { useEffect, useState } from "react";
import "./Library.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Library = () => {
  const [meme, setMeme] = useState([]);

  const getMeme = async () => {
    try {
      const response =
        await fetch(`https://meme-backend-hackathon.herokuapp.com/usermeme
	  `);
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
      <div className="cards-container">
        {meme.map((meme) => {
          return (
            <div key={meme._id} className="cards">
              <div className="image-container">
                <h3 className="meme-text">{meme.userText}</h3>
                <img className="meme-image" src={meme.img} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const loading = () => {
    return <div>The memes are loading.</div>;
  };

  return (
    <div className="library-container">
      <div>{meme ? loaded() : loading()}</div>
    </div>
  );
};
export default Library;
