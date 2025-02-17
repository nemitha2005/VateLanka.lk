import { collection, getDocs } from "firebase/firestore";
import { getDb } from "./firebaseConfig";

export const fetchMunicipalCouncils = async () => {
  try {
    const db = getDb();
    const councilsSnapshot = await getDocs(collection(db, "municipalCouncils"));
    return councilsSnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.id,
    }));
  } catch (error) {
    console.error("Error fetching municipal councils:", error);
    throw error;
  }
};

export const fetchDistricts = async (municipalCouncil) => {
  try {
    const db = getDb();
    const districtsRef = collection(
      db,
      `municipalCouncils/${municipalCouncil}/Districts`
    );
    const snapshot = await getDocs(districtsRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.id,
    }));
  } catch (error) {
    console.error("Error fetching districts:", error);
    throw error;
  }
};

export const fetchWards = async (municipalCouncil, district) => {
  try {
    const db = getDb();
    const wardsRef = collection(
      db,
      `municipalCouncils/${municipalCouncil}/Districts/${district}/Wards`
    );
    const snapshot = await getDocs(wardsRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.id,
    }));
  } catch (error) {
    console.error("Error fetching wards:", error);
    throw error;
  }
};

export const fetchSupervisors = async (municipalCouncil, district, ward) => {
  try {
    const db = getDb();
    const supervisorsRef = collection(
      db,
      `municipalCouncils/${municipalCouncil}/Districts/${district}/Wards/${ward}/supervisors`
    );
    const snapshot = await getDocs(supervisorsRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    }));
  } catch (error) {
    console.error("Error fetching supervisors:", error);
    throw error;
  }
};

export const createSupervisor = async (supervisorData) => {
  try {
    const response = await fetch(
      "https://vatelanka-backend.vercel.app/api/admin/createSupervisor",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...supervisorData,
          municipalCouncil: supervisorData.municipalCouncil.toLowerCase(),
        }),
      }
    );
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || "Failed to create supervisor");
    }
    return data;
  } catch (error) {
    console.error("Error creating supervisor:", error);
    throw error;
  }
};

export const createTruck = async (truckData) => {
  try {
    const response = await fetch(
      "https://vatelanka-backend.vercel.app/api/admin/createTruck",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...truckData,
          municipalCouncil: truckData.municipalCouncil.toLowerCase(),
        }),
      }
    );
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || "Failed to create truck");
    }
    return data;
  } catch (error) {
    console.error("Error creating truck:", error);
    throw error;
  }
};
