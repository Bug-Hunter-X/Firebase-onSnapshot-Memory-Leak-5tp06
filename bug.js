const query = ref(db, 'users').where('uid', '==', user.uid); 
const unsubscribe = onSnapshot(query, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
});
// unsubscribe is not called anywhere
// This will cause a memory leak