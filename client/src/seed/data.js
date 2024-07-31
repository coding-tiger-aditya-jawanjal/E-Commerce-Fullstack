import Sofa1 from "/sofa1.svg";
import Sofa2 from "/sofa2.svg";
import Sofa3 from "/sofa3.svg";
import Banner1 from "/banner1.png";
import Banner3 from "/banner3.png";
import Banner4 from "/banner4.png";
import Banner5 from "/sony-banner.png";
import BrandLogo from "/brand-logo.png";

export const FullMenu = [
	{
		link: "Home",
		url: "/",
	},
	{
		link: "Products",
		url: "/products",
	},
	{
		link: "About",
		url: "/about",
	},
	{
		link: "Contact",
		url: "/contact",
	},
];

export const ProfileMenu = [
	{
		link: "My Orders",
		url: "my-orders",
	},
	{
		link: "developer",
		url: "developer",
	},
	{
		link: "Privacy",
		url: "privacy-policy",
	},
];

export const MainMenu = [
	{
		link: "Home",
		url: "/",
	},
	{
		link: "Products",
		url: "/products",
	},
	{
		link: "About",
		url: "/about",
	},
	{
		link: "Contact",
		url: "/contact",
	},
];

export const HomeData = {
	title: "e-commerce Website",
	caption: "Support Local Everything",
	description:
		"Discover unbeatable deals on top brands at our online store! Shop now for exclusive offers, fast shipping, and a seamless shopping experience.Don`t miss out!.",
};

export const HomeImgList = [
	{
		imgSrc: Sofa1,
		productName: "Bag - Clothing with natural Colours in it as a essence",
	},
	{
		imgSrc: Sofa2,
		productName: "Bag 2 - Clothing with natural Colours in it as a essence",
	},
	{
		imgSrc: Sofa3,
		productName: "Bag 3 - Clothing with natural Colours in it as a essence",
	},
];

export const bannerList = [Banner1, Banner5, Banner3, Banner4];

export const Categories = ["Phones", "Computers", "SmartWatch", "Camera"];

export const FooterData = [
	{
		title: "Company",
		features: [
			{
				featureName: "About Me",
				url: "/developer",
			},
			{
				featureName: "Our Privacy",
				url: "/",
			},
			{
				featureName: "Privacy Policy",
				url: "/privacy-policy",
			},
			{
				featureName: "Affiliate Program",
				url: "/",
			},
		],
	},
	{
		title: "Get Help",
		features: [
			{ featureName: "FAQ", url: "/" },
			{ featureName: "Shipping", url: "/" },
			{ featureName: "Returns", url: "/" },
			{ featureName: "Order Status", url: "/" },
			{ featureName: "Payment Options", url: "/" },
		],
	},
	{
		title: "Online Shop",
		features: [
			{ featureName: "Watch", url: "/" },
			{ featureName: "Bag", url: "/" },
			{ featureName: "Shoes", url: "/" },
			{ featureName: "Dress", url: "/" },
		],
	},
];

export const MyDetails = {
	logo: BrandLogo,
	title: "About Me : ",
	headline: "Hi , I am Aditya Jawanjal",
	para: [
		"Check if other CSS properties or parent containers could be interfering with the sticky behavior. Specifically, ensure that no parent elements have overflow: hidden or similar styles that might affect scrolling and positioning.",
		"good",
	],
};

export const PrivacyPolicyDetails = [
	{
		heading: "Introduction",
		text: "Welcome to our e-commerce website. We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your information when you use our services.",
	},
	{
		heading: "Introduction",
		text: "Welcome to our e-commerce website. We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your information when you use our services.",
	},
	{
		heading: "Introduction",
		text: "Welcome to our e-commerce website. We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your information when you use our services.",
	},
];

export const SocialLink = {
	youtube: "#",
	instagram: "#",
	facebook: "#",
	twitter: "#",
	linkedin:"#"
};
