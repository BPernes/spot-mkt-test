import Typography from '@/components/Typography';
import LoginForm from '@/components/LoginForm';

function LoginScreen() {
	return (
		<div className="grid place-items-center h-screen">
			<div className='p-4'>
				<div className="flex flex-col justify-center align-center !mb-4">
					<Typography as="h2" className="text-center">
						Bem vindo a plataforma Spot MKT!
					</Typography>
					<Typography className="text-center">
						No spot certo para a sua gestão 🚀
					</Typography>
				</div>
				<LoginForm />
			</div>
		</div>
	);
}

export default LoginScreen;
