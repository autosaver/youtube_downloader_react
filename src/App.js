import { useEffect, useState } from "react";

import Card from "./components/Card";
import Navbar from "./components/Navbar";
import './Styles/App.css'



function App() {
  const [data, setdata] = useState([]);


  let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyAD9l9pGCgVlpm2RaRErvWv4TdwZVdiCYA&q="
  let video_url = "https://www.y2mate.com/youtube/";
  useEffect(async () => {
    await fetch(url+"coding").then((res) => res.json()).then((res) => setdata(res.items));
  }, []);

  const handleClick = (id) => {
    window.open(video_url+id,"_blank"); 
  }



  return (
    <div className="App">
      <div className="navbar">
        <Navbar setdata={setdata} url={url}/>
      </div>
      <div className="body">
        {data.length>0 && data.map((video) => {
          return (
            <div className="body_card" key={video?.etag} onClick={()=>handleClick(video?.id?.videoId)}>
              <Card card_data={video?.snippet} />
            </div>

          )
        })
        }
      </div>
    </div>
  );
}

export default App;
