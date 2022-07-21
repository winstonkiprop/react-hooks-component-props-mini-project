import React from "react";
import Article from "./Article";

const ArticleList = ({blogPosts}) => {

	const myPosts = blogPosts.map((post) => {
		return(
			<Article
				key={post.id}
				title={post.title}
				date={post.date}
				preview={post.preview}
				minutes={post.minutes}

			/>
		)
	}
	);


return ( 

	<main>{myPosts }</main>
);
}

export default ArticleList; 