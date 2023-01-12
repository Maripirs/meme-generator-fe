import { useEffect } from "react";
import "./Library.css";

const Library = () => {
  const [meme, setMeme] = useState([]);

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
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMeme();
  });

  return (<div>
	{meme.map((meme) => {
		return(
			<img src={m} />
		)
	})}
  </div>)
};
export default Library;
