import React from "react";
import SectionTitle from "../Components/SectionTitle";
import { experiences } from "../Resources/Experiences";

function Experiences() {
	const [selectedItemsIndex, setSelectedItemsIndex] = React.useState(0);
	return (
		<div>
			<SectionTitle title='Experiences' />

			<div className='flex py-10 gap-20  sm:flex-col'>
				<div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
					{experiences.map((experience, index) => (
						<div
							onClick={() => setSelectedItemsIndex(index)}
							className='cursor-pointer'>
							<h1
								className={`text-xl px-5 ${
									selectedItemsIndex === index
										? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40"
										: "text-white"
								}`}>
								{experience.period}
							</h1>
						</div>
					))}
				</div>
				<div className='flex flex-col gap-5'>
					<h1 className='text-secondary text-xl'>
						{experiences[selectedItemsIndex].title}
					</h1>
					<h1 className='text-tertiary text-xl'>
						{experiences[selectedItemsIndex].company}
					</h1>
					<p className='text-white'>
						{experiences[selectedItemsIndex].description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Experiences;
