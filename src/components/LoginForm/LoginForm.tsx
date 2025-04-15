import * as React from 'react';
import './LoginForm.css';
import Button from '../Button';
import Typography from '../Typography';
import { UserContext } from '../../providers/UserProvider';

function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { setIsLogged } = React.useContext(UserContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username === 'spotmkt' && password === '123') {
      setIsLogged(true);
    }
  }

  return (
    <form className="flex flex-col gap-3 min-w-14" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="user">Usuário</label>
        <input
          placeholder="user1234"
          className="bg-white border border-grey-disabled rounded-sm min-h-14 p-2"
          type="text"
          name="user"
          id="user"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Typography className="cursor-pointer" as="span">
          Esqueceu sua senha?
        </Typography>
      </div>

      <Button className="!mt-3 items-center justify-center" type="submit">
        Entrar
      </Button>
    </form>
  );
}

export default LoginForm;
