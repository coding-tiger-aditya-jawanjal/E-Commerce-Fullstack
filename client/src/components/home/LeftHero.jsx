import { FaCartShopping } from "react-icons/fa6";
import { HomeData } from "../../seed/data";

const LeftHero = () => {
	return (
		<div className="flex flex-col gap-10 w-full lg:w-1/2">
			<h1 className=" text-pink-400 text-5xl sm:text-7xl font-bold font-sans">
				{HomeData.title}
			</h1>
			<h3 className=" text-peach-200 text-4xl tracking-widest font-mono italic">
				{HomeData.caption}
			</h3>
			<p className=" text-lg pl-5 500:pl-10 ml-2 border-l-4 border-pink-500 font-thin">
				{HomeData.description}
			</p>
			<div className="relative hover:scale-105 transition-all duration-300 ease-linear">
				<button className=" w-60 h-14 rounded-full bg-orange-400 text-white-300 cursor-pointer text-2xl font-medium">
					Buy Now
				</button>
				<FaCartShopping className=" text-white-300 w-9 h-9 absolute bottom-2 left-5 " />
			</div>
		</div>
	);
};

export default LeftHero;
