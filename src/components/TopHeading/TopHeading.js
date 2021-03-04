import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeading = () => {
    const [articles, setArticles] = useState([]);
    useEffect( () => {
        const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db473e8905a74abba47cc71b33405068';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeading;