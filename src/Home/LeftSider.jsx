import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

function LeftSider() {
	return (
		<div className="fixed left-0 bottom-0 px-10  sm:static">
			<div className='flex flex-col items-center'>
				<div className='flex flex-col gap-3 sm:flex-row'>
					<a href="https://web.facebook.com/Adonai.Technologies.7"><CiFacebook className='text-gray-400 cursor-pointer hover:text-white ' /></a>
					<a href="mailto:akonadu506@gmail.com"><CiMail className='text-gray-400 cursor-pointer hover:text-white ' /></a>
					<a href="https://www.instagram.com/adonaitechnologies1/?hl=en"><CiInstagram className='text-gray-400 cursor-pointer  hover:text-white ' /></a>
					<a href="https://x.com/AkuaAkua1993"><FaXTwitter className='text-gray-400 cursor-pointer  hover:text-white ' /></a>
					<a href="https://www.linkedin.com/in/akua-konadu-adonai-technologies/"><CiLinkedin className='text-gray-400 cursor-pointer  hover:text-white' /></a>
					<a href="https://github.com/Adonai-Technologies"><FaGithub className='text-gray-400 cursor-pointer  hover:text-white' /></a>
					<a href="callto:+233549652969"><IoIosCall className='text-gray-400 cursor-pointer  hover:text-white' /></a>
				</div>
				<div className='w-[1px] h-32 bg-[#125f63] sm:hidden'></div>
			</div>
		</div>
	);
}

export default LeftSider;
