/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import { useNotification } from '../../context/NotificationContext'
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

import classes from './checkout.module.css'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'

const Checkout = () => {

    const [ orderId, setOrderId ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const { cart, totalPrice, clearCart } = useCart()
    const { showNotification } = useNotification()

    const { register, formState: {errors} , watch, handleSubmit } = useForm({
        defaultValues:{
            nombre:'',
            apellido: '',
            telefono: '',
            email: '',
            emailConfirm: '',
        }}
    )

    const emailConfirmed =(watch('email') === watch('emailConfirm'))
    const validated = (errors.nombre === undefined && errors.apellido === undefined && errors.telefono === undefined && errors.email === undefined && errors.emailConfirm === undefined && emailConfirmed)

    const createOrder = async (userData) => {

        let today = new Date()

        try{

            setLoading(true)

            const order = {
                userData: userData,
                items: cart,
                total: totalPrice,
                orderDate: today,
                orderState: 'generada',
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const idsInCart = cart.map(prod => prod.id)
            const productsCollRef = query(collection(db, 'products'), where(documentId(), 'in', idsInCart))

            const { docs } = await getDocs(productsCollRef)

            docs.forEach(async docSnapshot => {
                const fields = docSnapshot.data()
                const stockDB = fields.stock
                const productInCart = cart.find(prod => prod.id === docSnapshot.id)
                const prodQuantity = productInCart.quantity

                stockDB >= prodQuantity ?
                    batch.update(docSnapshot.ref, {stock: stockDB - prodQuantity})
                    :
                    outOfStock.push(
                        {
                            id: docSnapshot.id,
                            ...fields
                        }
                    )
                
                if(outOfStock.length === 0){
                    const ordersCollRef = collection(db, 'orders')

                    const { id } = await addDoc(ordersCollRef, order)
                    batch.commit()
                    clearCart()
                    setOrderId(id)

                    showNotification(
                        {
                            message: `El ID su orden es ${id}`,
                            duration: 4000,
                            icon: 'exclamation',
                    });

                } else{
                    showNotification(
                        {
                            message: `Algún producto no tiene stock`,
                            duration: 4000,
                            icon: 'exclamation',
                    });
                }
                        
            })
        }
        catch (error){
            console.error(error)
            showNotification(
                {
                    message: `Se produjo un error: ${error}`,
                    duration: 3000,
                    icon: 'exclamation',
            });
        }
        finally{
            setLoading(false)
        }
    }

    const onSubmit = (data) => {

        const userData = {
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,
            telefono: data.telefono,            
        }

        createOrder(userData)        
    }

    if(cart.length === 0){
        return(
            <h1 style={{fontSize: 40, position:'absolute', top: '40%', left:'50%', transform: 'translateX(-50%)'}}>
                Deberías ver de poner algo en tu carrito
            </h1>
        )        
    } 
    
    //COMPONENTE

    return(

        <>

        <h1 className={classes.title}>Finalizar compra</h1>
        
        <div className={classes.checkout}>

            <div className={classes.cartData}>
                <h2 className={classes.cartData__header__title}>Paso 1 - Revisa tu carrito</h2>
                                
                <table style={{width: 900}}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio U.</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map(prod => {
                            return(
                                <tr key={prod.id}>
                                    <td className={classes.tableRowName}>{prod.name}</td>
                                    <td>{prod.quantity}</td>
                                    <td>$ {prod.price}</td>
                                    <td>$ {prod.price * prod.quantity}</td>                                            
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                <h3 className={classes.cartPrice}>Total de la compra ${totalPrice}</h3>

            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                
                <h2 className={classes.form__header__title}>Paso 2 - Confirma tu compra</h2>
                
                <div className={classes.form__field}>
                    <label className={classes.form__field__label}>Nombre: 
                        <input className={classes.form__field__input} type="text" {...register('nombre', {
                            required: true,
                            maxLength: 20
                        })}/>
                    </label>
                    {errors.nombre?.type === 'required' &&
                        <p className={classes.form__field__alert}>El campo nombre es requerido</p>}
                </div>

                <div className={classes.form__field}>
                    <label className={classes.form__field__label}>Apellido:</label>
                    <input className={classes.form__field__input} type="text" {...register('apellido', {
                        required: true,
                        maxLength: 20
                    })}/>
                    {errors.apellido?.type === 'required' && <p className={classes.form__field__alert}>El campo apellido es requerido</p>}
                </div>

                <div className={classes.form__field}>
                    <label className={classes.form__field__label}>Teléfono:</label>
                    <input className={classes.form__field__input} type="number" {...register('telefono', {
                        required: true,
                        maxLength: 10
                    })}/>
                    {errors.telefono?.type === 'required' && <p className={classes.form__field__alert}>El campo teléfono es requerido</p>}
                </div>

                <div className={classes.form__field}>
                    <label className={classes.form__field__label}>Mail:</label>
                    <input className={classes.form__field__input} type="email" {...register('email',{
                        required: true,
                        pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    })}/>
                    {errors.email?.type === 'required' && <p className={classes.form__field__alert}>El campo mail es requerido</p>}
                    {errors.email?.type === 'pattern' && <p className={classes.form__field__alert}>El campo no tiene el formato correcto</p>}
                </div>

                <div className={classes.form__field}>
                    <label className={classes.form__field__label}>Mail confirm:</label>
                    <input className={classes.form__field__input} type="email" {...register('emailConfirm', {
                        required: true,
                    })}/>
                    {errors.emailConfirm?.type === 'required' && <p className={classes.form__field__alert}>El campo mail confirm es requerido</p>}
                    {
                        ((watch('emailConfirm') !== watch('email')) && watch('emailConfirm') !== '') && <p className={classes.form__field__alert}>Los mail no coinciden</p>//Comparando campos
                    }
                </div>

                {validated ? <Button type={'submit'} label={'Comprar'}/>
                : <Button type={'submit'} label={'Comprar'} disabled={true}/>}                
                
            </form>

        </div>

        </>

    )
}

export default Checkout