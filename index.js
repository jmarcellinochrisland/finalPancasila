// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu3x7eoLhhwMN8eVtSmNzcVVbQGB0x-Ug",
  authDomain: "quizpancasila.firebaseapp.com",
  projectId: "quizpancasila",
  storageBucket: "quizpancasila.firebasestorage.app",
  messagingSenderId: "36093197898",
  appId: "1:36093197898:web:0f4acd4aff6c808350f0b3",
  measurementId: "G-C24V18QBFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Database Helper Functions

// Add data to a collection
export async function addData(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
}

// Get all documents from a collection
export async function getAllDocuments(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    return documents;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
}

// Get a single document by ID
export async function getDocument(collectionName, docId) {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    throw error;
  }
}

// Update a document
export async function updateDocument(collectionName, docId, data) {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
    console.log("Document updated successfully");
    return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
}

// Delete a document
export async function deleteDocument(collectionName, docId) {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted successfully");
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
}

// Query documents with conditions
export async function queryDocuments(collectionName, conditions) {
  try {
    let q = collection(db, collectionName);
    
    conditions.forEach(condition => {
      const { field, operator, value } = condition;
      q = query(q, where(field, operator, value));
    });
    
    const querySnapshot = await getDocs(q);
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    return documents;
  } catch (error) {
    console.error("Error querying documents: ", error);
    throw error;
  }
}

// Quiz-specific functions

// Get all quiz questions
export async function getQuizQuestions() {
  try {
    const questions = await getAllDocuments('kuis');
    return questions.sort((a, b) => a.nomor - b.nomor);
  } catch (error) {
    console.error("Error getting quiz questions: ", error);
    throw error;
  }
}

// Add quiz question
export async function addQuizQuestion(questionData) {
  try {
    const docId = await addData('kuis', questionData);
    console.log("Quiz question added with ID: ", docId);
    return docId;
  } catch (error) {
    console.error("Error adding quiz question: ", error);
    throw error;
  }
}

// Save quiz result
export async function saveQuizResult(resultData) {
  try {
    const docId = await addData('hasil_kuis', resultData);
    console.log("Quiz result saved with ID: ", docId);
    return docId;
  } catch (error) {
    console.error("Error saving quiz result: ", error);
    throw error;
  }
}

// Get quiz results
export async function getQuizResults() {
  try {
    const results = await getAllDocuments('hasil_kuis');
    return results;
  } catch (error) {
    console.error("Error getting quiz results: ", error);
    throw error;
  }
}

// Comment functions

// Add comment
export async function addComment(commentData) {
  try {
    const docId = await addData('komentar', commentData);
    console.log("Comment added with ID: ", docId);
    return docId;
  } catch (error) {
    console.error("Error adding comment: ", error);
    throw error;
  }
}

// Get all comments
export async function getComments() {
  try {
    const comments = await getAllDocuments('komentar');
    return comments.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
  } catch (error) {
    console.error("Error getting comments: ", error);
    throw error;
  }
}

// Video functions

// Add video
export async function addVideo(videoData) {
  try {
    const docId = await addData('video', videoData);
    console.log("Video added with ID: ", docId);
    return docId;
  } catch (error) {
    console.error("Error adding video: ", error);
    throw error;
  }
}

// Get all videos
export async function getVideos() {
  try {
    const videos = await getAllDocuments('video');
    return videos.sort((a, b) => a.nomor - b.nomor);
  } catch (error) {
    console.error("Error getting videos: ", error);
    throw error;
  }
}

// Get video by ID
export async function getVideo(videoId) {
  try {
    return await getDocument('video', videoId);
  } catch (error) {
    console.error("Error getting video: ", error);
    throw error;
  }
}

// Remove duplicate videos by nomor
export async function removeDuplicateVideos() {
  try {
    const videos = await getVideos();
    const seenNumbers = new Set();
    const duplicates = [];
    
    videos.forEach(video => {
      if (seenNumbers.has(video.nomor)) {
        duplicates.push(video);
      } else {
        seenNumbers.add(video.nomor);
      }
    });
    
    // Delete duplicates
    for (const duplicate of duplicates) {
      await deleteDocument('video', duplicate.id);
      console.log(`Deleted duplicate video: ${duplicate.judul} (ID: ${duplicate.id})`);
    }
    
    console.log(`Removed ${duplicates.length} duplicate videos`);
    return duplicates.length;
  } catch (error) {
    console.error("Error removing duplicate videos: ", error);
    throw error;
  }
}
