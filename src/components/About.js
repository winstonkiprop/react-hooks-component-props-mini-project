import React from "react";

const About = ({ blogImage="https://via.placeholder.com/215"
	, about }) => {
	return ( 
        <aside>
			<img src={blogImage} alt="blog logo" />
			<p>{ about}</p>
        </aside>
);
}

export default About;