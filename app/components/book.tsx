import React from "react";

type BookProps = {
	title: string;
	author: string;
	owlId: string;
	available: boolean;
	lastBorrowed: string;
};

const Book: React.FC<BookProps> = ({
	title,
	author,
	owlId,
	available,
	lastBorrowed,
}) => {
	return (
		<div className="book">
			<h3>{title}</h3>
			<p>Author: {author}</p>
			<p>Owl ID: {owlId}</p>
			<p>Available: {available ? "Yes" : "No"}</p>
			<p>Last Borrowed: {lastBorrowed}</p>
		</div>
	);
};

export default Book;
