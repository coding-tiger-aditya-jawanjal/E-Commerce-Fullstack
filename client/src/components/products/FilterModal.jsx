import { useState } from "react";
import { FaFilter, FaSort } from "react-icons/fa";
import { Modal } from "react-responsive-modal";
import { Categories } from "../../seed/data";
import RangeSlider from "react-range-slider-input";

const FilterModal = () => {
	const [openModal, setOpenModal] = useState(false);

	const HandleOpenModal = () => {
		setOpenModal(true);
	};

	const HandleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<>
			<div
				className="flex flex-row items-center gap-5 cursor-pointer text-pink-500 my-5 sticky z-20 top-0"
				onClick={HandleOpenModal}
			>
				<FaFilter size={24} />
				<span className=" font-medium text-xl">Filter & Sort</span>
			</div>
			<Modal
				open={openModal}
				onClose={HandleCloseModal}
				center
				styles={{
					modal: {
						width: "90%",
						minHeight: "90%",
						borderRadius: "10px",
					},
				}}
			>
				<div className="flex flex-col gap-10 p-5">
					<h1 className=" text-orange-500 font-bold text-5xl my-10 self-center text-center">
						Sort your choice !
					</h1>
					<SortByCategory />
					<SortByPrice />
					<SortByWay />
					<button className=" text-lg rounded-lg px-6 py-4 hover:cursor-pointer hover:bg-green-300 bg-blue-300 self-end font-medium">
						Search
					</button>
				</div>
			</Modal>
		</>
	);
};

export default FilterModal;

const SortByCategory = () => {
	return (
		<div className="flex flex-col gap-5">
			<h2 className="font-bold text-3xl text-orange-800 ">Category : </h2>
			<div className="flex flex-wrap gap-5">
				{Categories.map((e) => {
					return (
						<span
							key={e}
							className="cursor-pointer px-3 py-1 rounded-lg bg-gray-200 text-lg font-medium"
						>
							{e}
						</span>
					);
				})}
			</div>
		</div>
	);
};

const SortByPrice = () => {
	const handleChangeRange = (e) => {
		console.log(e);
	};

	return (
		<div className="flex flex-col gap-5">
			<h2 className="font-bold text-3xl text-orange-800 ">Price Range : </h2>
			<div className="max-w-96 flex flex-col gap-5">
				<RangeSlider
					id="range-slider-gradient"
					step={100}
					defaultValue={[500, 10000]}
					min={500}
					max={50000}
					onInput={handleChangeRange}
				/>
				<div className="flex flex-col gap-2 text-xl">
					<span>
						<strong>Min : </strong> <i>$ 50</i>
					</span>
					<span>
						<strong>Min : </strong> <i>$ 50</i>
					</span>
				</div>
			</div>
		</div>
	);
};

const SortByWay = () => {
	return (
		<div className="flex flex-col gap-5">
			<h2 className="font-bold text-3xl text-orange-800 ">Sort : </h2>
			<div className="relative max-w-max">
				<select
					name="sort"
					className="cursor-pointer outline-none text-xl max-w-max py-3 px-6 rounded-lg bg-gray-100 appearance-none "
					defaultValue={"desc"}
				>
					<option value="asc">Assending</option>
					<option value="desc">Decending</option>
				</select>
				<FaSort className="absolute top-1/2 -translate-y-1/2 right-1" />
			</div>
		</div>
	);
};
