import { Link } from "react-router-dom";
import LeftHero from "../components/home/LeftHero";
import RightHero from "../components/home/RightHero";

const Home = () => {
	return (
		<>
			<section className=" my-10 flex flex-col-reverse lg:flex-row gap-20 lg:gap-10 w-full">
				<LeftHero />
				<RightHero />
			</section>
			<div className=" w-full flex justify-end my-10">
				<Link
					to={"/products"}
					className=" text-pink-500 hover:cursor-pointer text-2xl border-b-2 border-pink-500 hover:text-orange-500 hover:border-orange-500"
				>
					Continue Shopping →
				</Link>
			</div>
		</>
	);
};

export default Home;
