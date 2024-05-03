"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{ id: 1, link: "/" },
		{ id: 2, link: "/books" },
		{ id: 3, link: "/borrow" },
		{ id: 4, link: "/return" },
	];

	return (
		<div className="nav">
			<ul>
				{links.map(({ id, link }) => (
					<li key={id}>
						<Link href={link}>{link}</Link>
					</li>
				))}
			</ul>

			<div onClick={() => setNav(!nav)}></div>

			{nav && (
				<ul>
					{links.map(({ id, link }) => (
						<li key={id}>
							<Link onClick={() => setNav(!nav)} href={link}>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Navbar;
