import React,{useState,useEffect} from 'react';
import "./Quote.css";
function Quote() {
    const [quotes,setQuotes]=useState(
        localStorage.getItem("localQuotes")?JSON.parse(localStorage.getItem("localQuotes")):null
    );
    const [selectedQuote,setSelectedQuote]=useState(null);

    useEffect(() => {
        if(!localStorage.getItem("localQuotes"))
        fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=100")
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem("localQuote",JSON.stringify(data.quotes));
            setQuotes(data.quotes);
        })
        .catch((err) => alert(err.message));
    },[]);


    useEffect(() => {
        quoteChange();
    },[quotes]);
    function quoteChange(){
        if(quotes){
            const randomQuote=quotes[Math.floor(Math.random()*quotes.length)]
            setSelectedQuote(randomQuote)
        }
    }


    return (

        <div className="quote__container"> 
        <h2>{selectedQuote?.text}</h2>
        <p>{selectedQuote?.author}</p>
        <button onClick={quoteChange}>NEXT</button>            
        </div>
    );
}


export default Quote;