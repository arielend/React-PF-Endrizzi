import { db } from '../firebaseConfig'
import { getDocs, getDoc, collection, doc, query, where } from 'firebase/firestore'
import { createAdaptedProduct } from '../../../adapters/createAdaptedProduct'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) =>{
        const productsRef = categoryId ? 
            query (collection (db, 'products'), where('category', '==', categoryId))
            : collection (db, 'products')
        getDocs(productsRef)
        .then(QuerySnapshot =>{
            const productsAdapted = QuerySnapshot.docs.map(docSnapchot=>{
                return createAdaptedProduct(docSnapchot)
            })
            resolve(productsAdapted);
        })
        .catch(error => {
            reject(error)
        })
    })
}

export const getItemById = (itemId) => {
    const productRef = doc(db, 'products', itemId)
    
    return new Promise((resolve, reject)=>{
        getDoc(productRef)
            .then(docSnapshot =>{
                const productAdapted = createAdaptedProduct(docSnapshot)
                resolve(productAdapted)            
            })
            .catch(error=>{
                reject(error)
            })            
    })    
}