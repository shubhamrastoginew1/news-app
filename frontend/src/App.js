import './App.css';
import React, { useState, useEffect } from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import axios from 'axios';
import Navbar from './Components/Navbar';

function App() {
  const [ catogory, setCatogory ] = useState(0);
  let catogotyChange = async (val) => {
    setCatogory(val);
  }

  // const cat = [ 'india', 'politics', 'sports', 'science', 'crypto', 'health', 'education' ];
  // const APIKEY = "fb24ce9cdb6644d282b1fef7b82ecfa4";
  // const topHeadlines = async (catogory) => {
  //   return axios.get(`https://newsapi.org/v2/everything?q=${cat[ catogory ]}&apiKey=${APIKEY}`)
  //     .then((res) => {
  //       return (res).data.articles;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  const [ data, setData ] = useState([]);

  // useEffect(() => {
  //   topHeadlines(catogory).then((d) => {
  //     setData(d);
  //   })
  // }, [ catogory ]);
  useEffect(() => {
    axios.get(`http://localhost:4000/data/${catogory}`).then(d => {
      setData(d.data);
      console.log(d);
    })
  }, [ catogory ]);


  return (
    <div className="App">
      <Navbar />
      <Header catogotyChange={catogotyChange} />
      <Main data={data} />
    </div>
  );
}

export default App;