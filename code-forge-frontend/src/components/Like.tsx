import { FaRegHeart } from "react-icons/fa";

type LikeProp = {
	likeCount: number;
}



const Like: React.FC<LikeProp> = ({ likeCount }) => {

	const onClick = () => {
		likeCount++
	}

	return (
		<div className="flex text-center flex-start font-alegreya  text-base md:text-xl lg:text-2xl text-white font-bold align-items gap-3">
			<button onClick={onClick} className="flex text-center flex-start font-alegreya  text-base md:text-xl lg:text-2xl text-white font-bold align-items gap-3">
				<div className="mt-1">
					<FaRegHeart />
				</div>
				<p className="flex align-items ">{likeCount++}</p>
			</button>
		</div>
	)
}

export default Like;
