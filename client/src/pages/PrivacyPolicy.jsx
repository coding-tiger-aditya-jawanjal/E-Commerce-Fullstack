import { useEffect } from "react";
import { PrivacyPolicyDetails } from "../seed/data";

const PrivacyPolicy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-6xl font-bold mb-8 text-center">Privacy Policy</h1>
			{PrivacyPolicyDetails.map((policy, index) => {
				return (
					<section key={index} className="mb-6">
						<h2 className="text-3xl font-medium mb-2">
							{index + 1}. {policy.heading}
						</h2>
						<p className=" text-lg text-gray-400">{policy.text}</p>
					</section>
				);
			})}
		</div>
	);
};

export default PrivacyPolicy;
