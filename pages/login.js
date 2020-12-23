import { useRouter } from 'next/router';

const Login = () => {
	const router = useRouter();
	const onLogin = (e) => {
		e.preventDefault();

		router.push('/dashboard'); //redirecting
	};
	return (
		<>
			<input placeholder="username" />
			<input placeholder="password" type="password" />
			<button onClick={onLogin} type="button">
				Log in
			</button>
		</>
	);
};
export default Login;
