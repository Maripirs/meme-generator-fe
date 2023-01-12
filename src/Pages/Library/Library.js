import { useEffect, useState } from "react";
import "./Library.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Library = () => {
  const [meme, setMeme] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getMeme = async () => {
    // try {
    //   const response = await fetch(`oururl.heroku.com/${id}`);
    //   const allMemes = await response.json();
    //   setMeme(allMemes);
    // } catch (error) {
    //   console.log(error);
    // }
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0057af3370msh1b587aa13941ffcp17913cjsne632f12d93d4",
        "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
      },
    };

    fetch("https://programming-memes-images.p.rapidapi.com/v1/memes", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMeme(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMeme();
  }, []);

  const loaded = () => {
    return (
      <div key={meme.id} className="cards-container">
        {meme.map((meme) => {
          return (
            <div className="cards">
              {/* <img src={meme.image} />
				<h2>{meme.text}</h2> */}
              <div className="image-container">
                <h3 className="meme-text">"Text here"</h3>
                <img
                  key={meme.id}
                  className="meme-image"
                  src={meme.image}
                  onClick={() => {
                    handleShow();
                  }}
                />
              </div>
              <Modal className="modal" show={show} onHide={handleClose}>
                <h1 className="modal-text">Text Here</h1>
                <img src={meme.image} key={meme.id} />
              </Modal>
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
