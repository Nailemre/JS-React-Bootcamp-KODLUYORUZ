import logo from './logo.svg';
import './App.css';
import SearchBar from './search';
import { useState } from 'react';
import Announcer from './announcer';
import Axios from "axios";
import React, {  useEffect } from "react";
 

//const posts = [
//    { id: '1', name: 'Nur ' },
//    { id: '2', name: 'Nail Emre ' },
//    { id: '3', name: 'Cengiz ' },
//    { id: '4', name: 'Ugur ' },
//];

function App() {
    const [datas, setDatas] = useState([]);
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');


    const fetchData = async () => {
        const { data } = await Axios.get(
            "https://jsonplaceholder.typicode.com/users/"
        );
        const datas = data;
        setDatas(datas);
        console.log(datas);
    };

    useEffect(() => {
        fetchData();
    }, []);


    const filterDatas = (datas, query) => {
        if (!query) {
            return datas;
        }

        return datas.filter((data) => {
            const dataName = data.name.toLowerCase();
            const userName = data.username.toLowerCase();
            const fullName = dataName + userName;           
            return fullName.includes(query);
        });
    };

    const filteredDatas = filterDatas(datas, query);
  return (
      <div className="App">
         
          <header className="App-header">
              <img src={logo} className="App-logo"  alt="logo" />
              <Announcer
                  message={`${filteredDatas.length} posts`}
              />
              <br></br>
             
              <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
              />
              <ul>
                  {filteredDatas.map((datas) => (
                      <li key={datas.id}>{datas.name}({datas.username}) </li>
                  ))}
              </ul>
          </header>
          
    </div>
           
  );
}

export default App;
