import React from 'react';

export const PartyCard = ({ image, name, alias, address }) => {
    return (
        <article className="card">
            <img src={image} alt="Party Photo" className="imageResize"/>
            <div className="text">
					  <h4>{ name }</h4>
					  <p>{ alias }</p>
					  <p>{ address }</p>
            </div>
        </article>
    );
};

export default PartyCard;
