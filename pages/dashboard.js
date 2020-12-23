import Image from 'next/image';
const Dashboard = ({ avatar_url, name, bio, blog }) => (
	<>
		<h1>{name}</h1>
		<p>{`Bio = ${bio}`}</p>
		<p>{`Blog = ${blog}`}</p>
		{/* <p>
			<Image src="https://avatars0.githubusercontent.com/u/55087404?v=4.png" alt="Avatar" height=></Image>
		</p> */}
	</>
);

Dashboard.getInitialProps = async () => {
	const res = await fetch('https://api.github.com/users/shivanishimpi');
	const user = await res.json();
	return user;
};
export default Dashboard;
