import ErrorPic from "/errorPic.png";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div className="rounded-xl bg-violet-100 p-5 800:p-10 flex flex-col-reverse max-800:gap-5 800:flex-row 800:justify-between 800:items-center">
			<div className="800:w-1/2 flex justify-center">
				<div className="flex flex-col gap-10 font-serif">
					<strong className="text-center text-7xl 500:text-9xl 800:text-7xl lg:text-9xl font-bold bg">
						Oops !
					</strong>
					<h5 className=" text-xl 500:text-5xl 800:text-2xl lg:text-4xl text-gray-500 text-center ">
						We can`t seem to find a page you are looking for
					</h5>
					<button
						className=" w-40 500:w-72 800:w-40 lg:w-72 h-14 500:h-24 800:h-16 lg:h-20 rounded-lg cursor-pointer bg-blue-300 self-center 500:text-4xl 800:text-xl lg:text-3xl font-bold hover:scale-105 transition-all ease-linear duration-300 hover:text-orange-800 hover:underline"
						onClick={() => navigate(-1)}
					>
						Go Back
					</button>
				</div>
			</div>
			<img src={ErrorPic} alt="Error pic" className=" 800:w-1/2" />
		</div>
	);
};

export default ErrorPage;
