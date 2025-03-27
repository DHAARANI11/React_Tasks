import { useState } from "react";

export default function Quotes(){

    const[Quote,setQuote]=useState(generateRandomQuotes());

    const quotes=["We cannot solve problems with the kind of thinking we employed when we came up with them. —Albert Einstein",
        "Learn as if you will live forever, live like you will die tomorrow. —Mahatma Gandhi",
        "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. —Mark Twain",
        "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out. —Eleanor Roosevelt",
        "When you change your thoughts, remember to also change your world. —Norman Vincent Peale",
        "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest. —Walter Anderson"];
    
    function generateRandomQuotes(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    
    function handleQuote(){
        setQuote(generateRandomQuotes(1,quotes.length));
    }
        return(
            <>
            <button onClick={handleQuote}>Random Quotes</button>
            <p>{quotes[Quote]}</p>
            </>
    )
}
