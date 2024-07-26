import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Modal } from "react-responsive-modal";

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
				className="flex flex-row items-center gap-5 cursor-pointer text-pink-500 my-5"
				onClick={HandleOpenModal}
			>
				<FaFilter size={24} />
				<span className=" font-medium text-xl">Filter & Sort</span>
			</div>
			<Modal open={openModal} onClose={HandleCloseModal} center>
				<h2 className=" mt-10">Simple centered modal</h2>
			</Modal>
		</>
	);
};

export default FilterModal;