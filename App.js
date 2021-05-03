import React,{useState,useEffect} from 'react';
import './App.css';
import Quote from "./Quote";

function App() {
  const [background, setBackground]=useState([
    "https://i.pinimg.com/originals/88/15/63/881563d6444b370fa4ceea0c3183bb4c.gif",
    "https://i.pinimg.com/originals/67/0b/c0/670bc0f15088200dc7bd31ff37daa245.gif",
    "http://i.imgur.com/QIl89.gif",
    "https://cdn.dribbble.com/users/2198898/screenshots/5705844/im.gif",
  ]);

  const [selectedBackground,setSelectedBackground]=useState(null);

  useEffect(() => {
    const randomBackground=
    background[Math.floor(Math.random()*background.length)]
    setSelectedBackground(randomBackground)
  },[background])

  const style={
    background:`url(${selectedBackground})`,
  }


  return (
    <div style={style} className="App">
      <Quote/>
    </div>
  );
}

export default App;
