import MyModal from "./FilterModal";
import ProductCard from "./ProductCard";

const AllProducts = () => {
	return (
		<>
			<div className="flex flex-col 800:flex-row gap-2 800:gap-10">
				<div className="flex flex-wrap items-center gap-5 800:gap-10">
					<MyModal />
					<span className="px-6 h-12 bg-gray-200 font-semibold cursor-pointer text-lg rounded-lg flex justify-center items-center hover:scale-110 transition-all ease-linear duration-300">
						Clothes
					</span>
				</div>
			</div>
			<div className="flex flex-row gap-10 flex-wrap p-3">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</>
	);
};

export default AllProducts;
