const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in...
} else {
  // User is signed out...
}
});

useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);