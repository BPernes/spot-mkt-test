import * as React from 'react';
import './LoginForm.css';
import Button from '@/components/Button';
import Typography from '@/components/Typography';

function LoginForm() {
	return (
		<form className="flex flex-col gap-3 min-w-14">
			<div className="flex flex-col gap-1">
				<label htmlFor="user">Usuário</label>
				<input
					placeholder="user1234"
					className="bg-white border border-grey-disabled rounded-sm min-h-14 p-2"
					type="text"
					name="user"
					id="user"
					required
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="password">Senha</label>
				<input
					placeholder="*******"
					className="bg-white border border-grey-disabled rounded-sm min-h-14 p-2"
					type="password"
					name="password"
					id="pwd"
					required
				/>
			</div>
			<div className="flex justify-end">
				<Typography className="cursor-pointer" as="span">
					Esqueceu sua senha?
				</Typography>
			</div>

			<Button className="!mt-3" type="submit">
				Entrar
			</Button>
		</form>
	);
}

export default LoginForm;
