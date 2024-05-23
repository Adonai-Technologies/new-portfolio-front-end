import React from "react";
import SectionTitle from "../Components/SectionTitle";
import { projects } from "../Resources/Projects";

function Projects() {
	const [selectedItemsIndex, setSelectedItemsIndex] = React.useState(0);
	return (
		<div>
			<SectionTitle title='Projects' />
			<div className='flex py-10 gap-20  sm:flex-col'>
				<div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
					{projects.map((project, index) => (
						<div
							onClick={() => setSelectedItemsIndex(index)}
							className='cursor-pointer'>
							<h1
								className={`text-xl px-5 ${
									selectedItemsIndex === index
										? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40"
										: "text-white"
								}`}>
								{project.title}
							</h1>
						</div>
					))}
				</div>
				<div className='flex items-center gap-10 justify-center sm:flex-col '>
					<img
						src={projects[selectedItemsIndex].image}
						alt=''
						className='h-52 w-80'
					/>

					<div className='flex flex-col gap-5'>
						<h1 className='text-secondary text-xl'>
							{projects[selectedItemsIndex].title}
						</h1>

						<p className='text-white'>
							{projects[selectedItemsIndex].description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
