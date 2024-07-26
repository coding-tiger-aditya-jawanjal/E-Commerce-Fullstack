import Shirt from "/shirt.png";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const ProductCard = () => {
	return (
		<div className="flex flex-col w-full flex-grow gap-2 500:max-w-56 overflow-hidden cursor-pointer hover:scale-105 transition-all ease-linear duration-300">
			<div className="w-56 h-56 max-500:self-center flex justify-center items-center bg-gray-200 rounded-lg relative">
				<img src={Shirt} alt="shirt" className="w-32 h-36 rounded-lg" />
				<span className="w-16 h-8 rounded-lg font-sans bg-red-500 text-white-300 flex justify-center items-center absolute top-3 left-2">
					-40%
				</span>
				<FaRegHeart className="w-6 h-6 rounded-lg absolute top-5 right-5 cursor-pointer" />
				<BsCart className="w-6 h-6 rounded-lg absolute top-14 right-5 cursor-pointer" />
			</div>
			<h4 className="font-medium line-clamp-1 hover:underline hover:text-orange-700">
				HAVIT HV-G92 Gamepad{" "}
			</h4>
			<p className=" text-justify line-clamp-2 text-sm">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor
				molestiae saepe amet similique quis magni quae voluptate. Hic, odio.
			</p>
			<div className="flex flex-row gap-5">
				<span className="text-pink-500 font-medium">$500.00</span>
				<span className=" line-through">$400.00</span>
			</div>
		</div>
	);
};

export default ProductCard;
