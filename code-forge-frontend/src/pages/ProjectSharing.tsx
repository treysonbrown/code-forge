import Header from "../components/Header";
import Post from "../components/Post";

const ProjectSharing = () => {
	return (

		<div>
			<Header whiteText="PROJECT" blueText="SHARING" />

			<div className="mt-10" >
				<Post username="test" post_description="test testing test test testing test test testing test" title="test_user" image="../../src/assets/debugger.svg" />
			</div>

		</div >

	)
}
export default ProjectSharing;
