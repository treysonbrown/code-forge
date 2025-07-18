import { FaRegHeart } from "react-icons/fa";

type LikeProp = {
	likeCount: number;
}



const Like: React.FC<LikeProp> = ({ likeCount }) => {
	return (
		<div className="flex text-center flex-start font-alegreya  text-base md:text-xl lg:text-2xl text-white font-bold align-items gap-3">
			<div className="mt-1">
				<FaRegHeart />
			</div>
			<p className="flex align-items ">{likeCount}</p>
		</div>
	)
}

export default Like;
