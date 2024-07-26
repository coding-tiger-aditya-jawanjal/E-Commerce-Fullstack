import ProductCard from "./ProductCard";

const TodayDeal = () => {
	return (
		<div className="my-10 flex flex-col gap-5">
			<h4 className=" border-l-8 pl-5 text-2xl text-red-500 font-medium border-red-500">
				Today`s Deal
			</h4>
			<h4 className="text-5xl font-medium pb-3 border-b-2 border-pink-300">
				Flash Sales
			</h4>
			<div className="flex flex-row flex-wrap gap-10 p-3">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};

export default TodayDeal;
