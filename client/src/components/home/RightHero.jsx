import { useState } from "react";
import { HomeImgList } from "../../seed/data";

const RightHero = () => {
	const [mainDisplayProduct, setMainDisplayProduct] = useState({
		img: HomeImgList[0].imgSrc,
		product: HomeImgList[0].productName,
	});

	const handleChangeMainDisplayProduct = (e, product) => {
		setMainDisplayProduct({ img: e.target.src, product });
	};

	return (
		<div className="flex flex-col xl:flex-row max-xl:gap-10 max-xl:items-center xl:justify-around items-center w-full relative">
			<div className="flex flex-col items-center gap-10">
				<img
					src={mainDisplayProduct.img}
					alt={mainDisplayProduct.product}
					className="lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] rounded-full"
				/>
				<h2 className=" text-2xl font-bold text-center font-sans hover:cursor-pointer hover:underline text-gray-500 hover:text-orange-500 transition-all duration-300 ease-linear">
					{mainDisplayProduct.product}
				</h2>
			</div>
			<span className="w-32 500:w-40 h-14 flex justify-center items-center rounded-full text-lg 500:text-xl shadow-black bg-white-300 font-semibold text-orange-500 shadow-inner hover:cursor-pointer hover:translate-y-5 transition-all duration-500 ease-in-out absolute right-1 500:top-3 500:right-5 sm:right-10 sm:top-10 md:right-28 lg:right-10 lg:top-4 xl:right-40 xl:top-24 2xl:right-56 2xl:top-16">
				Minimalistic
			</span>
			<span className="w-32 500:w-40 h-14 flex justify-center items-center rounded-full text-lg 500:text-xl shadow-black bg-white-300 font-semibold text-orange-500 shadow-inner hover:cursor-pointer hover:translate-y-5 transition-all duration-500 ease-in-out absolute top-64 left-1 500:top-80 md:left-24 md:top-96 lg:top-80 lg:left-5 xl:top-[420px] xl:left-1">
				Super Cozy!
			</span>
			<div className="flex flex-row max-xl:justify-around xl:flex-col lg:gap-5 xl:justify-center">
				{HomeImgList.map((e) => (
					<img
						key={e.imgSrc}
						src={e.imgSrc}
						alt={e.productName}
						className={`rounded-full w-1/4 h-1/4 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32 cursor-pointer hover:scale-125 transition-all ease-linear duration-300`}
						onClick={(event) =>
							handleChangeMainDisplayProduct(event, e.productName)
						}
					/>
				))}
			</div>
		</div>
	);
};

export default RightHero;
