import {db} from "@/lib/firebase/firebase.config";
import {collection, doc, getDoc, getDocs} from "firebase/firestore";

export interface User {
    name: string,
    email: string,
    picture?: string,
}

export const getUser = async ():Promise<User> => {
    const userId = localStorage.getItem('userId');
    const reference = doc(db, "users", userId);
    const snapshot = await getDoc(reference);

    const data = snapshot?.data();
    return {
        name: data?.name,
        email: data?.email,
        picture: data?.picture
    };
}


const getData = async (userId) => {
    const productsRef = collection(db, `users`);
    const result1 = await getDocs(productsRef).then((res) => {
        console.log(res)
        res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    });
    console.log(result1)

    const docRef = doc(db, "users", userId);
    const result2 = await getDoc(docRef)
    console.log(result2)
}