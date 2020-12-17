import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6PAJEYtNpkbA-LDy47SfME27i-dFNc0U",
  authDomain: "ltmwebproject-fetesting.firebaseapp.com",
  databaseURL: "https://ltmwebproject-fetesting.firebaseio.com",
  projectId: "ltmwebproject-fetesting",
  storageBucket: "ltmwebproject-fetesting.appspot.com",
  messagingSenderId: "787184009519",
  appId: "1:787184009519:web:c431f6d60ef4bd504761da",
  measurementId: "G-29P2FZC114"
};

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const getContestsDocument = async () => {
  const contestsRef = await firestore.collection('contests');
  const snapshot = await contestsRef.get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }
  let docs = []
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    doc.data().id = doc.id
    docs.push({
      id: doc.id,
      title: doc.data().title,
      numberOfQuestions: doc.data().numberOfQuestions,
      type: doc.data().type
    })
  });
  console.log('data  ', docs);
  return docs
}

export const getQuestionList = async (contestID) => {
  const questionListRef = await firestore.collection(`contests/${contestID}/question`)
  const snapshot = await questionListRef.get();
  if (snapshot.empty) {
    return;
  }
  let docs = []
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    docs.push(doc.data())
  })
  console.log('data  ', docs);
  return docs
}

export const updateUserResult = async (contestID, point) => {
  if (!auth.currentUser) {
    return
  }
  const user = auth.currentUser
  const data = {
    city: 'Los Angeles',
    displayName: user.displayName,
    point: point,
    urlProfile: user.photoURL
  }; 
  const res = await firestore.collection(`contests/${contestID}/rank`).doc(`${user.uid}`).set(data);
}