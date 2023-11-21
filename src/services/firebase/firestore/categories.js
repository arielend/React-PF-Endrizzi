import { db } from '../firebaseConfig'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'

export const getCategories = () => {
    return new Promise((resolve, reject) =>{
        const categoriesCollRef = query (collection (db, 'categories'), orderBy('order'))

        getDocs(categoriesCollRef)
        .then(QuerySnapshot =>{
            const categoriesAdapted = QuerySnapshot.docs.map(doc=>{
                const fields = doc.data()
                return {
                    id: doc.id,
                    ...fields
                }
            })
            resolve(categoriesAdapted);
        })
        .catch(error => {
            reject(error)
        })
    })
}