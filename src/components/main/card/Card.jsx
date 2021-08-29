import React from 'react';
import "./card.less"
const Card = (props) => {
    return (
        <div>
            <button onClick={() => props.history.goBack()} className="back-btn">BACK</button>
        </div>
    );
};

export default Card;