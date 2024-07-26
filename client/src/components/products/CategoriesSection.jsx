import { Categories } from "../../seed/data";
import Shirt from "/shirt.png";

const CategoriesSection = () => {
	return (
		<div className="flex flex-col gap-5">
			<h4 className=" border-l-8 pl-5 text-2xl text-red-500 font-medium border-red-500">
				Categories
			</h4>
			<h4 className="text-5xl font-medium pb-3 border-b-2 border-pink-300">
				Browse By Category
			</h4>
			<div className="flex flex-row gap-10 flex-wrap p-3">
				{Categories.map((e) => (
					<div
						key={e}
						className="flex justify-center items-center flex-col gap-2 w-32 h-32 rounded-lg border-2 border-gray-300 cursor-pointer hover:scale-125 transition-all ease-linear duration-300"
					>
						<img src={Shirt} alt="shirt" className=" w-12 h-12 rounded-lg" />
						<h4 className=" font-serif">{e}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoriesSection;
