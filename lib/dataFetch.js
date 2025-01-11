import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getProjectData() {
  let allProjectData = [];
  let mobileImagesData = [];
  // Test

  try {
    const projectsCollection = collection(db, "firestoreProjects");
    const querySnapshotProjects = await getDocs(projectsCollection);
    querySnapshotProjects.forEach((doc) => {
      allProjectData.push({
        company: doc.data().company || "",
        description: doc.data().description,
        github: doc.data().github || "",
        image: doc.data().image || doc.data().imageZoom,
        imageZoom: doc.data().imageZoom || "",
        name: doc.data().name,
        personal: doc.data().personal,
        slug: doc.data().slug,
        stack: doc.data().stack,
        timeline: doc.data().timeline,
        ...doc.data(),
      });
    });

    const mobileImagesCollection = collection(db, "mobileImages");
    const querySnapshotMobileImages = await getDocs(mobileImagesCollection);
    querySnapshotMobileImages.forEach((doc) => {
      mobileImagesData.push({
        id: doc.id,
        image: doc.data().image || "",
      });
    });
  } catch (e) {
    console.log(e);
    return {
      allProjectData: [],
      mobileImagesData: [],
    };
  }
  return {
    allProjectData,
    mobileImagesData,
  };
}

// Fetch data from Google Sheets
export async function getGoogleSheetData() {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycby1iUCs9AAGoja7fxQf_8sj7NBKQ5Y_p-yaZVaF4cbIzVTVgq6PPVYKVa7J481qBWZPsA/exec";

  try {
    const response = await fetch(scriptUrl);
    if (!response.ok) {
      throw new Error(`Error fetching Google Sheet data: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Return the fetched JSON data
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
    return [];
  }
}
