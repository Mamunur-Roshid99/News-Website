import React, { useEffect, useState } from 'react'
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

    useEffect(()=>{
      getData()
    },[])

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const userInput = (event) => {
        setSearch(event.target.value)
    }

  return (
    <div>
      {/* navbar */}
      <nav>
        <div>
          <h1>Trending News</h1>
        </div>
        <ul>
          <button className='cursor-pointer' onClick={userInput} value="all news">
            All News
          </button>
          <button className='cursor-pointer' onClick={userInput} value="trending">
            Trending
          </button>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search news"
            value={search}
            onChange={handleInput}
          />
          <button className='button' onClick={getData}>Search</button>
        </div>
      </nav>
      {/*  */}
      <div>
        <p className="head">Stay update with Trending news</p>
      </div>
      {/* category */}
      <div className="categoryBtn">
        <button onClick={userInput} value="sports">
          Sports
        </button>
        <button onClick={userInput} value="politics">
          Politics
        </button>
        <button onClick={userInput} value="entertainment">
          Entertainment
        </button>
        <button onClick={userInput} value="health">
          Health
        </button>
        <button onClick={userInput} value="fitness">
          Fitness
        </button>
      </div>
      {/* card */}
      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
}

export default Newsapp
