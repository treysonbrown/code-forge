type Comment = {
	username: string;
	response: string;
}

type PostProps = {
	username: string;
	title: string;
	post_description: string;
	comments: Comment[];
	image?: string;

}



const Post: React.FC<PostProps> = ({ username, title, post_description, image = "" }) => {
	return (
		<div >
			<div className="flex gap-10">
				<h1 className="flex justify-center mt-30 text-white text-xl md:text-2xl lg:text-3xl font-bold">{username}</h1>
				<h1 className="flex justify-center mt-30 text-white text-xl md:text-2xl lg:text-3xl font-bold">{title}</h1>
			</div>
			<img src={image} />
			<p>{post_description}</p>
		</div>
	)
}
export default Post;
