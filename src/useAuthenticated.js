import React from "react";

const useAuthenticated = (auth) => {
  const [a, setA] = React.useState(auth.currentUser);
  React.useEffect(() => {}, [a]);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setA(user);
    });
    return () => unsubscribe();
  }, []);

  return a;
};

export default useAuthenticated;
