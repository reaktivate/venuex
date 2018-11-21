const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const namespace = `environments/${env}/`;

function query(firebase) {
  return firebase.firestore().doc(namespace);
}

function prepareDocumentSnapshot(snapshot) {
  if (!snapshot.exists) {
    const path = snapshot.ref.path.replace(namespace, '');

    throw new Error(`Document "${path}" doesn't exists`);
  }

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
}

function prepareCollectionSnapshot(snapshot) {
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export default query;
export { query, prepareDocumentSnapshot, prepareCollectionSnapshot };
