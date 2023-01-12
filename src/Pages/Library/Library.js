import { useEffect, useState } from "react";
import "./Library.css";

const Library = () => {
  const [meme, setMeme] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  const getMeme = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0057af3370msh1b587aa13941ffcp17913cjsne632f12d93d4",
        "X-RapidAPI-Host": "programming-memes-reddit.p.rapidapi.com",
      },
    };

    fetch("https://programming-memes-reddit.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => {
        console.log("response JSON", response);
        setMeme(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMeme();
  }, []);

  return (
    <div className="library-container">
      {meme.map((meme) => {
        return (
          <div>
            <img className="meme-images" src={meme.link} />
          </div>
        );
      })}
    </div>
  );
};
export default Library;
