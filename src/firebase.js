import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArGdikHobnoTChd2GDqCQvuC8n6N7j3m8",
  authDomain: "mnms-6771f.firebaseapp.com",
  databaseURL: "https://mnms-6771f.firebaseio.com",
  projectId: "mnms-6771f",
  storageBucket: "mnms-6771f.appspot.com",
  messagingSenderId: "463589125769",
  appId: "1:463589125769:web:df54ca92d64ec10a7d2058",
  measurementId: "G-6ZWSN1MX8K"
};
const provider = new firebase.auth.GoogleAuthProvider();

  // Initialize Firebase
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
const getUserDocument = async (uid) => {
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
export const modifyUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (snapshot.exists) {
    try {
      await userRef.set({
        ...additionalData
      }, { merge: true });
    } catch (error) {
      console.error("Error changing user document", error);
    }
  }
  return getUserDocument(user.uid);
};
export const getRoomNum = async () => {
  const snapshot = await firestore.collection('rooms').get();
  if (!snapshot.exists) {
    return 0;
  }
  else {
    return snapshot.size;
  }
};
export const generateRoomDocument = async (room, additionalData) => {
  if (!room) return;
  const roomRef = firestore.doc(`rooms/${room.id}`);
  const snapshot = await roomRef.get();
  if (!snapshot.exists) {
    const { info, characters } = room;
    try {
      await roomRef.set({
        info,
        characters,
        ...additionalData
      });
      await firestore.doc(`scripts/${room.id}`).set({
        scripts:[]
      });
      await firestore.doc(`discussions/${room.id}`).set({
        discussions:[]
      });
    } catch (error) {
      console.error("Error creating room document", error);
    }
  }
  return getRoomDocument(room.id);
};
export const getRoomDocument = async (roomid) => {
  if (!roomid) return null;
  try {
    const RoomDocument = await firestore.doc(`rooms/${roomid}`).get();
    return {
      roomid,
      ...RoomDocument.data()
    };
  } catch (error) {
  console.error("Error fetching room info", error);
  }
};
export const getScript = async (roomid) => {
  if (!roomid) return null;
  try {
    const ScriptDocu = await firestore.doc(`scripts/${roomid}`).get();
    return {
      roomid,
      ...ScriptDocu.data()
    };
  } catch (error) {
  console.error("Error fetching script history", error);
  }
}
export const scriptonChange = async (roomid) => {
  if (!roomid) return null;
  try {
    firestore.doc(`rooms/${roomid}`).onSnapshot(true);
  } catch (error) {
    console.error("Error fetching script update state",error);
  }
}
export const updateScript = async (roomid, Data) => {
    const scriptref = await firestore.doc(`scripts/${roomid}`);
    const snapshot = await scriptref.get();
    if (snapshot.exists) {
      try {
        await scriptref.update({
          scripts: firebase.firestore.FieldValue.arrayUnion({
            when: Date.now(),
            ...Data})
        });
      } catch (error) {
        console.error("Error sending new script", error);
      }
    }
}
export const addRoomUserDocument = async (user, Data) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (snapshot.exists) {
    try {
      await userRef.update({
        rooms: firebase.firestore.FieldValue.arrayUnion(Data)
      });
    } catch (error) {
      console.error("Error changing user document", error);
    }
  }
};