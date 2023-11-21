export const createAdaptedProduct = (document) => {

    const fields = document.data()

    return {
        id: document.id,
        name: fields.name,
        category: fields.categoty,
        description: fields.description,
        img: fields.img,
        stock: fields.stock,
        price: fields.price,
        discount: fields.discount,
    }

}