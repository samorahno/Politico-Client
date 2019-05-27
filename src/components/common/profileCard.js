
import React from 'react';

const ProfileCard = ({ image, name, office, party }) => {
    return (
        <article className="card">
            <img src={image} alt="Candidate Photo" />
            <div className="text">
					  <h4><strong>Name:</strong> { name }</h4>
					  <p><strong>Office:</strong>{ office }</p>
					  <p><strong>Party:</strong> { party }</p>

            </div>
        </article>
    );
};

export default ProfileCard;


