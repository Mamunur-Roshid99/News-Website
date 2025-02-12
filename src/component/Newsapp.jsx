import React, { useState } from 'react'
import Card from './Card';

const Newsapp = () => {

    const [search, setSearch] = useState("bangladesh");
    const [newsData, setNewsData] = useState(null)

    const API_KEY = "42f346ad0a8241dfa972270e09f7bf38";

    const getData = async() => {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
        );
        const jsonData = await res.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

  return (
    <div>
        {/* navbar */}
      <nav>
        <div>
          <h1>Trending News</h1>
        </div>
        <ul>
          <a href="#">All News</a>
          <a href="#">Trending</a>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search news" onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      {/*  */}
      <div>
        <p className='head'>Stay update with Trending news</p>
      </div>
        {/* category */}
      <div className="categoryBtn">
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>
        {/* card */}
      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
}

export default Newsapp
