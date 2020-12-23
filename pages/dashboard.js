import Image from 'next/image';
const Dashboard = ({ avatar_url, name, bio, blog }) => (
	<>
		<h1>{name}</h1>
		<p>{`Bio = ${bio}`}</p>
		<p>{`Blog = ${blog}`}</p>
		{/* <p>
			<Image src={`${avatar_url}.png`} alt="Avatar" width={500} height={500} />
		</p> */}
		<p>
			<Image src="https://avatars2.githubusercontent.com/u/37953717?v=4" alt="Avatar" width={500} height={500} />
		</p>
	</>
);

Dashboard.getInitialProps = async () => {
	const res = await fetch('https://api.github.com/users/shivanishimpi');
	const user = await res.json();
	return user;
};
export default Dashboard;
