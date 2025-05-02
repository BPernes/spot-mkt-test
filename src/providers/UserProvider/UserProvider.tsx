import * as React from 'react';

export const UserContext = React.createContext({
  isLogged: false,
  setIsLogged: (isLogged: boolean) => {
    console.warn('No UserProvider found. setIsLogged called with:', isLogged);
  },
});

function UserProvider({ children }: React.PropsWithChildren<{}>) {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
