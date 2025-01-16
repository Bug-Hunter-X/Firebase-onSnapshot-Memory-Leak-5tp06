const query = ref(db, 'users').where('uid', '==', user.uid);
let unsubscribe = onSnapshot(query, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
});

// Unsubscribe when the component unmounts or when the data is no longer needed.
//Example: in a react component

useEffect(()=>{
  return () => {
    unsubscribe();
  }
}, []);