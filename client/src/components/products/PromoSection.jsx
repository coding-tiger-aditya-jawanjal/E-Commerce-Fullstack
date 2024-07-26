import Banner3 from "/banner3.png";
import Banner4 from "/banner4.png";
import Video from "/video.mp4";

const PromoSection = () => {
	return (
		<div className="flex flex-col 800:flex-row 800:items-center gap-3 h-full">
			<div className="800:w-2/3 h-full">
				<video
					className="rounded-2xl w-full h-full"
					controls={false}
					autoPlay
					muted
					loop
				>
					<source src={Video} type="video/mp4" />
					Your browser does not support the video.
				</video>
			</div>
			<div className="flex flex-col 500:flex-row 800:flex-col gap-3 800:w-1/3 h-full">
				<img
					src={Banner3}
					alt="ban 3"
					className="rounded-2xl 500:w-1/2 h-full 800:w-full object-cover"
				/>
				<img
					src={Banner4}
					alt="ban 4"
					className="rounded-2xl 500:w-1/2 800:w-full  h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default PromoSection;
