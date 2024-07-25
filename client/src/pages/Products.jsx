import ProductCard from "../components/ProductCard";
import { Categories } from "../seed/data";
import Banner1 from "/banner1.png";
import SonyBanner from "/sony-banner.png";
import Shirt from "/shirt.png";
import { FaFilter } from "react-icons/fa";

const Products = () => {
	return (
		<section className="my-10 flex flex-col gap-20 w-full">
			<div className="flex flex-row gap-10 w-full overflow-hidden">
				<img src={Banner1} alt="banner1" className=" rounded-2xl" />
			</div>
			<div className="my-10 flex flex-col gap-5">
				<h4 className=" border-l-8 pl-5 text-2xl text-red-500 font-medium border-red-500">
					Today`s Deal
				</h4>
				<h4 className="text-5xl font-medium pb-3 border-b-2 border-pink-300">
					Flash Sales
				</h4>
				<div className="flex flex-row flex-wrap gap-10">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
			<img src={SonyBanner} alt="sony-banner" className="w-full" />
			<div className="flex flex-col gap-5">
				<h4 className=" border-l-8 pl-5 text-2xl text-red-500 font-medium border-red-500">
					Categories
				</h4>
				<h4 className="text-5xl font-medium pb-3 border-b-2 border-pink-300">
					Browse By Category
				</h4>
				<div className="flex flex-row gap-10 flex-wrap">
					{Categories.map((e) => (
						<div
							key={e}
							className="flex justify-center items-center flex-col gap-2 w-32 h-32 rounded-lg border-2 border-gray-300 cursor-pointer"
						>
							<img src={Shirt} alt="shirt" className=" w-12 h-12 rounded-lg" />
							<h4 className=" font-serif">{e}</h4>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<h4 className=" border-l-8 pl-5 text-2xl text-red-500 font-medium border-red-500">
					Our Products
				</h4>
				<h4 className="text-5xl font-medium pb-3 border-b-2 border-pink-300">
					Explore Our Products
				</h4>
				<div className="flex flex-row items-center gap-5 cursor-pointer text-pink-500 my-5">
					<FaFilter size={24} />
					<span className=" font-medium text-xl">Filter & Sort</span>
				</div>
				<div className="flex flex-row gap-10 flex-wrap">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
				<button className=" w-40 h-14 rounded-lg bg-orange-400 font-medium mx-auto my-5 cursor-pointer text-white-300 hover:scale-105 transition-all duration-300 ease-linear">
					View All Products
				</button>
			</div>
		</section>
	);
};

export default Products;
