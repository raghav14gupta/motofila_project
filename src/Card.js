
import React from "react";
import card1  from './images/card1.png'


const Card = ({heading,number})=>{
    return (
        <>
            <div className="card">
                  <div className="card-left">
                  <div className="cardText">{heading}</div>
                    <span className="cardNum">{number} </span>
                  </div>
                 <div className="card-right">
                 <img src={card1} className="cardgap" alt=""></img>
                 </div>
                </div>
        </>
    )
}

export default Card;