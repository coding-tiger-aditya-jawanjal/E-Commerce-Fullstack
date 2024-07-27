import { MyDetails } from "../seed/data";
import BrandLogo from "/brand-logo.png";

const AboutDeveloper = () => {
	return (
		<div className="flex max-lg:flex-col max-lg:justify-center items-center gap-10 lg:gap-20 rounded-lg p-5 800:p-10 bg-white-100">
			<img src={BrandLogo} alt="Brand-Logo" className=" rounded-lg" />
			<div className="flex flex-col flex-wrap gap-5 lg:gap-10 ">
				<h2 className=" text-5xl text-orange-500 underline font-bold">
					{MyDetails.title}
				</h2>
				<h5 className=" text-3xl font-semibold text-gray-700">
					{MyDetails.headline}
				</h5>
				<div>
					<p className="indent-10 text-2xl text-gray-600">{MyDetails.para1}</p>
					<p className="indent-10 text-2xl text-gray-600">{MyDetails.para2}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutDeveloper;
