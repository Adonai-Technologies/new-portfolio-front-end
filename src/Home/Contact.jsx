import React from "react";
import SectionTitle from "../Components/SectionTitle";

function Contact() {
	const user = {
		name: "Akua Konadu",
		age: null,
		gender: "Female",
		email: "pRj9K@example.com",
		phone: "0712345678",
		country: "Ghana",
	};
	return (
		<div>
			<SectionTitle title={"Get in touch"} />

			<div className='flex sm:flex-col items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<p className='text-tertiary '>{"{"}</p>
					{Object.keys(user).map((key) => (
						<p className='ml-5'>
							<span className='text-tertiary'>{key} : </span>
							<span className='text-tertiary'>{user[key]}</span>
						</p>
					))}
					<p className='text-tertiary'>{"}"}</p>
				</div>
				<div className=' h[400px]'>
					<dotlottie-player
						src='https://lottie.host/7223d3dd-2e14-4314-b5fd-6b2c1605191d/8FYNnLeM95.json'
						background='transparent'
						speed='1'
						autoplay></dotlottie-player>
				</div>
			</div>
		</div>
	);
}

export default Contact;
