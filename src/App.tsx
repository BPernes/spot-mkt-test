import * as React from 'react'
import './App.css';
import LoginScreen from '@/components/LoginScreen';
import HomeScreen from '@/components/HomeScreen';
import { UserContext } from './providers/UserProvider';

function App() {
	const { isLogged } = React.useContext(UserContext)

	return (
		<>
			{isLogged ? (<HomeScreen />) : (<LoginScreen />)}
		</>
	);
}

export default App;
