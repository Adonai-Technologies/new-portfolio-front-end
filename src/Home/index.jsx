import React from "react";
import Header from "../Components/Header";
import Intro from "../Home/Intro";
import About from "./About";
import Experiences from "./Experiences";

function Home() {
	return (
		<div >
			<Header />
			  <div className='bg-primary px-40 sm:px-5'>
				<Intro />
				<About/>
				<Experiences />
			</div>
		</div>
	);
}

export default Home;
