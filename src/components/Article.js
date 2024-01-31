import React from "react";

function Article({title,date,preview,minutes}){
    if(date){
        
    }
    else{
        date = "January 1, 1970"

    }
    let cupsoftea = minutes/5
    let cuparray = []
    if (minutes < 30){
        for(let i=0 ; i<= cupsoftea - 1; i++){
            cuparray.push('☕️')
        }
    }
    else{
        cupsoftea = minutes / 10
        for(let i=0 ; i<= cupsoftea - 1; i++){
            cuparray.push('🍱')
        }
    }
    
    console.log(cuparray)
    let cupstring = cuparray.join('')
    return (
        <article>
        <h3>{title}</h3>
        <small>{date} {cupstring} {minutes} min read</small>
        <p>{preview}</p>
        </article>
    )
    
}
export default Article