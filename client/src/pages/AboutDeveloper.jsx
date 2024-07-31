import { useEffect } from "react";
import { MyDetails } from "../seed/data";

const AboutDeveloper = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="flex max-lg:flex-col max-lg:justify-center items-center gap-10 lg:gap-20 rounded-lg p-5 800:p-10 bg-white-100">
			<img src={MyDetails.logo} alt="Brand-Logo" className=" rounded-lg" />
			<div className="flex flex-col flex-wrap gap-5 lg:gap-10 ">
				<h2 className=" text-5xl text-orange-500 underline font-bold">
					{MyDetails.title}
				</h2>
				<h5 className=" text-3xl font-semibold text-gray-700">
					{MyDetails.headline}
				</h5>
				<div className="text-2xl text-gray-400">
					{MyDetails.para.map((paraText, index) => {
						return (
							<p key={index} className="indent-10 text-justify my-3">
								{paraText}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AboutDeveloper;
