import React from "react";

function About({ image, about }) {
    if (image){
    }
    else{
        image = 'https://via.placeholder.com/215'

    }
    return (
        <aside>
        <img src={`${image}`} alt="blog logo" />
        <p id="about">{about}</p>
        </aside>

    )

}

export default About;
