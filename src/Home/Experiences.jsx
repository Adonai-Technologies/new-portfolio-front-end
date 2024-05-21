import React from "react";
import SectionTitle from "../Components/SectionTitle";
import { experiences } from "../Resources/Experiences";

function Experiences() {
    const [selectedItemsIndex, setSelectedItemsIndex] = React.useState(0)
	return (
		<div>
			<SectionTitle title='Experiences' />

			<div className='flex'>
				<div className='flex flex-col gap-5'>
					{experiences.map((experience,index) => (
						<div onClick={() => setSelectedItemsIndex(index)}
                        className="cursor-pointer">
							<h1 className={`text-xl ${selectedItemsIndex === index ? "text-tertiary border-tertiary" : "text-white"}`}>{experience.period}</h1>
						</div>
					))}
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default Experiences;
