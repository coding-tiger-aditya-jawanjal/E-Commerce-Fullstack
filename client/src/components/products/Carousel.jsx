import { bannerList } from "../../seed/data";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";

const Carousel = () => {
	const [currentBanner, setCurrentBanner] = useState(0);

	const UpdateCurrentBanner = () => {
		const totalBanners = bannerList.length;
		const progress = (gsap.getProperty(".banner", "xPercent") || 0) / -100;
		setCurrentBanner(Math.floor(progress % totalBanners));
	};

	useGSAP(() => {
		gsap.to(".banner", {
			xPercent: -100 * (bannerList.length - 1),
			duration: 20,
			ease: "linear",
			repeat: -1,
			repeatDelay: 0,
			onUpdate: UpdateCurrentBanner,
		});
	}, []);

	return (
		<div>
			<div className={`flex gap-3 w-[${100 * bannerList.length}%] `}>
				{bannerList.map((e, i) => {
					return (
						<img
							key={i}
							src={e}
							alt={"banner"}
							className={`banner rounded-2xl`}
						/>
					);
				})}
			</div>
			<div className=" w-[100%] flex justify-center gap-3 800:gap-5 mt-5 800:mt-10">
				{bannerList.map((e, i) => {
					return (
						<span
							key={i}
							className={`border-8 rounded-full transition-all ease-linear duration-300 cursor-pointer ${
								currentBanner === i
									? "border-orange-500 scale-110 800:scale-125"
									: "border-gray-400"
							}`}
						></span>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
