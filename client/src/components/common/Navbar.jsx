import { TbHomeHeart } from "react-icons/tb";
import { GrSearch } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FullMenu, MainMenu, ProfileMenu } from "../../seed/data";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [profileMenuOpen, setProfileMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setMenuOpen((pre) => !pre);
	};

	const handleToggleProfileMenu = () => {
		setProfileMenuOpen((pre) => !pre);
	};

	useGSAP(() => {
		if (menuOpen) {
			gsap.to("#menu", {
				opacity: 1,
				top: 52,
				duration: 0.5,
				display: "flex",
			});
		} else {
			gsap.to("#menu", {
				opacity: 0,
				top: 20,
				duration: 0.5,
				display: "none",
			});
		}
	}, [menuOpen]);

	useGSAP(() => {
		if (profileMenuOpen) {
			gsap.to("#profile", {
				opacity: 1,
				top: 52,
				duration: 0.5,
				display: "flex",
			});
		} else {
			gsap.to("#profile", {
				opacity: 0,
				top: 20,
				duration: 0.5,
				display: "none",
			});
		}
	}, [profileMenuOpen]);

	return (
		<header>
			<div className="flex flex-row justify-between items-center">
				<Link to="/">
					<TbHomeHeart className="w-16 h-16 text-orange-200 cursor-pointer" />
				</Link>
				<div className="flex flex-row gap-10 2xl:gap-16 items-center">
					<nav>
						<ul className="hidden lg:flex flex-row items-center gap-5 xl:gap-10 font-semibold text-lg xl:text-xl 2xl:text-2xl 2xl:mr-10 text-orange-400">
							{MainMenu.map((menu) => {
								return (
									<Link
										key={menu.link}
										to={menu.url}
										className="cursor-pointer hover:underline hover:text-pink-400 transition-all duration-300"
									>
										{menu.link}
									</Link>
								);
							})}
						</ul>
					</nav>
					<div className="relative">
						<input
							type="text"
							className="border-2 border-orange-200 outline-none rounded-full py-2 px-5 max-sm:hidden w-60 md:w-72 bg-peach-100 placeholder:text-orange-500 placeholder:font-medium text-orange-700"
							placeholder="Search..."
						/>
						<GrSearch className="absolute right-3 bottom-2 w-7 h-7 text-orange-500 ml-10 max-sm:hidden cursor-pointer" />
					</div>
					<div className="relative">
						<CgProfile
							className="w-10 h-10 text-orange-500 max-lg:hidden cursor-pointer "
							onClick={handleToggleProfileMenu}
						/>
						<ul
							className="absolute bg-white-100 rounded-lg p-3 shadow-xl shadow-black flex gap-3 800:gap-5 flex-col z-20 right-1 w-max font-serif text-xl 800:text-2xl font-medium border-2 border-gray-400 800:hidden 800:opacity-0 text-orange-800"
							id="profile"
						>
							{ProfileMenu.map((menu) => (
								<Link
									key={menu.url}
									to={menu.url}
									onClick={handleToggleProfileMenu}
								>
									{menu.link}
								</Link>
							))}
						</ul>
					</div>
					<div className="flex relative">
						<RiMenu2Line
							className="w-10 h-10 text-orange-500 lg:hidden cursor-pointer"
							onClick={handleToggleMenu}
						/>
						<ul
							className="absolute bg-white-100 rounded-lg p-3 shadow-xl shadow-black flex gap-3 800:gap-5 flex-col z-20 right-1 w-max font-serif text-xl 800:text-2xl font-medium border-2 border-gray-400 800:hidden 800:opacity-0 text-orange-800"
							id="menu"
						>
							{FullMenu.map((menu) => (
								<Link key={menu.url} to={menu.url} onClick={handleToggleMenu}>
									{menu.link}
								</Link>
							))}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
