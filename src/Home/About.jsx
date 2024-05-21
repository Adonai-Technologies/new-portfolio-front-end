import React from "react";
import SectionTitle from "../Components/SectionTitle";

function About() {
	const Skills = [
		"React",
		"Javascript",
		"Html",
		"Css",
		"Nodejs",
		"Mongodb",
		"Firebase",
		"Git",
		"Tailwindcss",
		"React-native",
		"Appwrite",
		"Vercel",
		
	];
	return (
		<div> 
			<SectionTitle title={"About"} />
			<div className='flex w-full items-center sm:flex-col'>
				<div className='h-[70vh] w-1/2 sm:w-full'>
					<dotlottie-player
						src='https://lottie.host/502b76cd-9f68-43ee-af5b-95486103f367/74dWcm07y6.json'
						background='transparent'
						autoplay></dotlottie-player>
				</div>
				<div className='flex-col flex gap-5 w-1/2 sm:w-full sm:items-center'>
					<p className='text-white'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
						tempora nostrum repellat in nemo ratione, harum ipsum repudiandae
						laboriosam facere enim suscipit! Enim voluptatibus ut, commodi sit
						sunt ipsam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Molestiae, nesciunt quia. Alias, nostrum! In sit, aliquid hic
						itaque omnis, id necessitatibus ad accusamus dicta iusto porro
						dolores temporibus eaque suscipit.
					</p>
					<p className='text-white'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
						tempora nostrum repellat in nemo ratione, harum ipsum repudiandae
						laboriosam facere enim suscipit! Enim voluptatibus ut, commodi sit
						sunt ipsam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Vel illum ex, maiores laboriosam, accusantium, aut id
						consequuntur reprehenderit sapiente iusto perspiciatis? Harum iure
						laudantium eum pariatur delectus incidunt sequi quis!
					</p>
				</div>
			</div>
			<div className='py-5'>
				<h1 className='text-tertiary text-xl mb-10'>
					Here are a few technologies I've been working with
				</h1>
				<div className='flex flex-wrap gap-10 md-5'>
					{Skills.map((skill, index) => (
						<div className="border border-tertiary py-3 px-10">
							<h1 className="text-tertiary">{skill}</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default About;
