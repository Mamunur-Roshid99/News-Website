import React from 'react'

const Card = ({data}) => {
    console.log(data)
  return (
    <div className='cardContainer'>
        {data && data.map((article) => {
            return (
              <div key={article.id} className="card">
                <img src={article.urlToImage} alt="" />
                <div className="cardContent">
                  <a href={article.url} target="_blank" className="title">
                    {article.title}
                  </a>
                  <p>{article.description}</p>
                  <a className="link" href={article.url} target="_blank">
                    Read More
                  </a>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default Card
