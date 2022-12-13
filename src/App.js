import MainNav from './components/MainNav';
import Card from './components/Card';
import './App.css';
import { useEffect, useState } from 'react';

//we are inside the parent application - App.JS
function App() {
  //useState gives you access to a variable and a setter
  const [cardData, setCardData] = useState([]);
  //get some data
  //request to the server
  useEffect(() => {
  const client_id = "kOwh_LYYd_4pmQZu1PGCViBEOWJ_XWwcx0PVVMmox6Y"; // Create an account unsplash tp hey client ID;
  // capture search term 
  //const searchStr = "beaches";
  const inputValue = 'cars';
  const resource = `https://api.unsplash.com/search/photos/?query=${inputValue}&per_page=20&client_id=${client_id}`;

  // make a request to unsplash 
  fetch(resource)
  .then((res) => res.json())
  .then((data) => setCardData(data.results));

  }, []);


  return (
    <div className="App">
        {/* Add a Navbar */}
      <MainNav/> 
        {/* Add a card container */}    
        {/* transform the cardData after looping */}
        <Card/> 
      <div className="card-container">
        {cardData && 
        cardData.map((data, index) => 
        <p key={index}>{data.alt_description}</p>)}
      </div>
    </div>
  );
}

// need this to import it to the other files.
export default App;
