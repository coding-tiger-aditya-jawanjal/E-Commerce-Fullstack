import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
	return (
		<BrowserRouter>
			<main className="min-h-screen min-w-screen bg-peach-200 py-10 px-5 md:py-20 md:px-10 2xl:p-20 ">
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
					</Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
