import { FooterData, SocialLink } from "../../seed/data";
import { FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="mx-auto my-5 py-5 px-3 sm:p-10 lg:px-20 border-white-100 border-4 rounded-xl shadow-xl shadow-black bg-gray-800 text-white-300 max-w-screen-xl 2xl:max-w-screen-2xl">
			<div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 sm:gap-20 p-5 text-2xl">
				{FooterData.map((e) => (
					<div className="flex flex-col gap-10 flex-grow" key={e.title}>
						<h3 className="font-bold font-sans pb-2 border-b-2 border-pink-300">
							{e.title}
						</h3>
						<div className="flex flex-col gap-5 text-gray-300">
							{e.features.map((feature) => (
								<Link
									to={feature.url}
									key={feature.featureName}
									className=" hover:cursor-pointer hover:underline"
								>
									{feature.featureName}
								</Link>
							))}
						</div>
					</div>
				))}
				<div className="flex flex-row gap-5">
					<div className="flex flex-col gap-10 flex-grow">
						<h3 className="font-bold font-sans pb-2 border-b-2 border-pink-300">
							Follow Us
						</h3>
						<SocialContacts />
					</div>
				</div>
			</div>
			<h4 className="my-10 text-center text-xl 500:text-2xl text-blue-300 underline">
				All the rights are reserved &copy; copyright 2024.
			</h4>
		</div>
	);
};

export default Footer;

const SocialContacts = () => {
	return (
		<div className="flex flex-row gap-5 items-center">
			<Link to={SocialLink.youtube}>
				<FaYoutube
					size={40}
					className=" cursor-pointer text-red-500 hover:scale-125 transition-all duration-300 ease-in-out"
				/>
			</Link>
			<Link to={SocialLink.twitter}>
				<AiFillTwitterCircle
					size={40}
					className=" cursor-pointer text-blue-600 hover:scale-125 transition-all duration-300 ease-in-out"
				/>
			</Link>
			<Link to={SocialLink.instagram}>
				<PiInstagramLogoFill
					size={40}
					className=" cursor-pointer text-pink-300 hover:scale-125 transition-all duration-300 ease-in-out"
				/>
			</Link>
			<Link to={SocialLink.linkedin}>
				<FaLinkedin
					size={40}
					className=" cursor-pointer text-blue-400 hover:scale-125 transition-all duration-300 ease-in-out"
				/>
			</Link>
		</div>
	);
};
