import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Layout = () => {
	return (
		<>
			<div className="mx-auto py-5 px-3 sm:p-10 lg:px-20 border-white-100 border-4 rounded-xl shadow-xl shadow-black bg-white-100 max-w-screen-xl 2xl:max-w-screen-2xl">
				<Navbar />
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
