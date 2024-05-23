import React from "react";
import SectionTitle from "../Components/SectionTitle";
import { courses } from "../Resources/Courses";

function Courses() {
	const [selectedItemsIndex, setSelectedItemsIndex] = React.useState(0);
	return (
		<div>
			<SectionTitle title='Courses' />
			<div className='flex py-10 gap-20  sm:flex-col'>
				<div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
					{courses.map((course, index) => (
						<div
							onClick={() => setSelectedItemsIndex(index)}
							className='cursor-pointer'>
							<h1
								className={`text-xl px-5 ${
									selectedItemsIndex === index
										? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40"
										: "text-white"
								}`}>
								{course.title}
							</h1>
						</div>
					))}
				</div>
				<div className='flex items-center gap-10 justify-center sm:flex-col '>
					<div className='flex flex-col gap-5'>
						<h1 className='text-secondary text-xl'>
							{courses[selectedItemsIndex].title}
						</h1>

						<p className='text-white'>{courses[selectedItemsIndex].url}</p>
                        
					</div>
					<img
						src={courses[selectedItemsIndex].image}
						alt=''
						className='h-52 w-80'
					/>
				</div>
			</div>
		</div>
	);
}

export default Courses;
