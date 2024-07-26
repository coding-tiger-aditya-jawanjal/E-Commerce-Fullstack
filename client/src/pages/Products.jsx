import { useEffect } from "react";
import Carousel from "../components/products/Carousel";
import TodayDeal from "../components/products/TodayDeal";
import CategoriesSection from "../components/products/CategoriesSection";
import PromoSection from "../components/products/PromoSection";
import AllProducts from "../components/products/AllProducts";
import SonyBanner from "/sony-banner.png";

const Products = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="my-10 flex flex-col gap-20 w-full overflow-hidden">
			<Carousel />
			<TodayDeal /> 
			<img src={SonyBanner} alt="sony-banner" className="w-full" />
			<CategoriesSection />
			<PromoSection />
			<div className="flex flex-col gap-5">
				<h4 className=" border-l-8 pl-5 text-2xl text-red-500 font-medium border-red-500">
					Our Products
				</h4>
				<h4 className="text-5xl font-medium pb-3 border-b-2 border-pink-300">
					Explore Our Products
				</h4>
				<AllProducts />
				<button className=" w-40 h-14 rounded-lg bg-orange-400 font-medium mx-auto text-xl my-5 cursor-pointer text-white-300 hover:scale-105 hover:underline transition-all duration-300 ease-linear">
					Show More
				</button>
			</div>
		</section>
	);
};

export default Products;
