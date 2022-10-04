// class Vino {
//     constructor(marca, tipoVino, varietal, precio, img, id, stock) {
//         this.marca = marca
//         this.tipoVino = tipoVino
//         this.varietal = varietal
//         this.precio = precio
//         this.img = img
//         this.id = id
//         this.stock = stock
//     }
// }

// export const listaVino = [
//     new Vino("Los Haroldos", "tinto", "Malbec", 1200, "/assets/los-haroldos-estate-malbec-mrbeef.jpg", 1, 15),
//     new Vino("Los Haroldos", "tinto", "Cabernet Sauvignon", 900, "/assets/Los-haroldos-cabernet.png", 2, 10),
//     new Vino("Los Haroldos", "tinto", "Bonarda", 1100, "/assets/Los-Haroldos-Bonarda.png", 3, 12),
//     new Vino("Los Haroldos", "blanco", "Chardonnay", 700, "/assets/los-haroldos-chardonnay.png", 4, 22),
//     new Vino("Los Haroldos", "blanco", "Chenin Dulce", 900, "/assets/los-haroldos-chenindulce.png", 5, 6),
//     new Vino("El Esteco - Don David", "tinto", "Syrah", 950, "/assets/el-esteco-syrah.jpg", 6, 9),
//     new Vino("Santa Julia", "blanco", "Tardío", 800, "/assets/Vino-Santa-Julia-Cosecha.jpg", 7, 12),
//     new Vino("Las Perdices", "tinto", "Malbec", 1300, "/assets/las-perdices-malbec.png", 8, 24),
//     new Vino("Las Perdices", "tinto", "Cabernet Sauvignon", 1250, "/assets/las-perdices-cabernet.png", 9, 12),
//     new Vino("Las Perdices", "tinto", "Cabernet Franc", 1150, "/assets/las-perdices-cabernetFranc.png", 10, 16),
//     new Vino("Las Perdices", "blanco", "Viognier", 1200, "/assets/perdices-viognier.jpg", 11, 18),
//     new Vino("Las Perdices", "blanco", "Sauvignon Blanc", 900, "/assets/sauvignon-blanc.png", 12, 18),
//     new Vino("Las Perdices", "blanco", "Sweety", 1100, "/assets/las-perdices-sweety.png", 13, 20),
//     new Vino("Rutini", "blanco", "Chardonnay", 1300, "/assets/Rutini_Chardonnay.jpeg", 14, 12),
//     new Vino("Alamos", "tinto", "Cabernet", 1500, "/assets/alamos-cabernet.jpg", 15, 10),
//     new Vino("Alamos", "tinto", "Malbec Reserva", 1400, "/assets/alamos-malbec.png", 16, 6),
//     new Vino("Alamos", "blanco", "Torrontes", 1350, "/assets/alamos-torrontes.png", 17, 4),
//     new Vino("Alamos", "blanco", "Semillon", 1250, "/assets/alamos-chardonnay.jpg", 18, 3),
//     new Vino("El Esteco", "tinto", "Cabernet Sauvignon", 1350, "/assets/elestecocabernetsauvignon.jpg", 19, 6),
//     new Vino("El Esteco", "blanco", "Blanc de Blancs", 1500, "/assets/elesteco-blanc.png", 20, 8)
// ]


import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
import { db } from './firebase';
// setDoc
// CREATE
export const createItem = async (obj, coleccion) => {
    const colRef = collection(db, coleccion);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'vinoteca');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems = async () => {
    const colRef = collection(db, 'vinoteca');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'vinoteca');
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const colRef = collection(db, 'vinoteca');
    const result = await getDoc(doc(colRef, id));
    let response = result.data()
    response.id = id;
    return response;

}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'vinoteca');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}