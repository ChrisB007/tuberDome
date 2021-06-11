import React from 'react';
import Stats from "./Stats";

const Creators = () => {
    return (
        <>
            <div className="card lg:card-side bordered">
                <figure>
                <img src="https://picsum.photos/id/1005/400/250" className="imagestyle" alt="creator" />
                </figure> 
                <div className="card-body">
                <h2 className="card-title">Channel</h2> 
                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                <div className="card-actions">
                    <Stats />
                    <span className="moveright"><button className="btn btn-primary login-button">Sponsor Me</button> </span>
                </div>
                </div>
            </div> 
        </>
    )
}

export default Creators;


