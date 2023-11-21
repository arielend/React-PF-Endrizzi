const products = [
    {
        id: '1',
        category: 'processors',
        name: 'AMD Ryzen 3 3200',
        price: '85000',
        stock: '3',
        description: 'Procesador AMD, socket AM4',
        img: '/images/p-1.webp'
    },
    {
        id: '2',
        category: 'processors',
        name: 'AMD Ryzen 7 5700X',
        price: '269000',
        stock: '5',
        description: 'Procesador AMD, socket AM4',
        img: '/images/p-3.webp'
    },
    {
        id: '3',
        category: 'processors',
        name: 'Intel Celeron G5925',
        price: '48000',
        stock: '0',
        description: 'Procesador Intel, socket 1200 Comet Lake',
        img: '/images/p-5.webp'
    },
    {
        id: '4',
        category: 'processors',
        name: 'Intel Core i5 11400F',
        price: '156000',
        stock: '4',
        description: 'Procesador Intel, socket 1200 Rocket Lake',
        img: '/images/p-7.webp'
    },
    {
        id: '5',
        category: 'motherboards',
        name: 'MSI A320M-A PRO AM4',
        price: '73000',
        stock: '2',
        description: 'Motherboard MSI, chipset AMD A320, socket AM4',
        img: '/images/mb-9.webp'
    },
    {
        id: '6',
        category: 'motherboards',
        name: 'Asus ROG Strix B550-F',
        price: '245000',
        stock: '4',
        description: 'Motherboard Asus Rog Strix B550-F Gaming WIFI II, chipset AMD B550, socket AM4',
        img: '/images/mb-7.webp'
    },
    {
        id: '7',
        category: 'motherboards',
        name: 'Asrock Z390 Phantom Gaming 4S',
        price: '42000',
        stock: '5',
        description: 'Motherboard Azrock Z390 Phantom Gaming 4S Wi-Fi, chipset Intel 390, socket 1151 Coffe Lake',
        img: '/images/mb-1.webp'
    },
    {
        id: '8',
        category: 'motherboards',
        name: 'Asus prime H610M-K',
        price: '86000',
        stock: '4',
        description: 'Motherboard Asus Prime H610M-K DDR4, chipset Intel H610, socket 1700 Alder Lake',
        img: '/images/mb-5.webp'
    },
    {
        id: '9',
        category: 'videocards',
        name: 'Asus Phoenix GeForce GTX1630',
        price: '212000',
        stock: '5',
        description: 'Placa de video Asus Phoenix GeForce GTX1630, DDR6, 4 GB, chipset GPU GTX 1630',
        img: '/images/vc-4.webp'
    },
    {
        id: '10',
        category: 'videocards',
        name: 'Zotac GeForce RTX4070 Ti',
        price: '808000',
        stock: '2',
        description: 'Placa de video Zotac geForce RTX4070 Ti, DDR6X, 12 GB, chipset GPU RTX 4070 Ti',
        img: '/images/vc-11.webp'
    },
    {
        id: '11',
        category: 'videocards',
        name: 'AsRock Radeon RX 6500 XT',
        price: '229000',
        stock: '3',
        description: 'Placa de video AsRock Radeon RX 6500 XT, DDR6, 4 GB, chipset GPU RX 6500 XT',
        img: '/images/vc-8.webp'
    },
    {
        id: '12',
        category: 'videocards',
        name: 'XFX Radeon RX 6650 XT',
        price: '355000',
        stock: '4',
        description: 'Placa de video XFX Radeon RX 6650 XT, DDR6, 8 GB, chipset GPU RX 6650 XT',
        img: '/images/vc-10.webp'
    },
    {
        id: '13',
        category: 'ram',
        name: 'ADATA DDR4 16GB (2 x 8GB) 4133MHz',
        price: '65000',
        stock: '6',
        description: 'Memoria RAM ADATA, DDR4, 16GB (2 unidades de 8GB), velocidad 4133 mhz, con disipador, RGB',
        img: '/images/ram-1.webp'
    },
    {
        id: '14',
        category: 'ram',
        name: 'Corsair DDR4 16GB (2 x 8GB) 2666MHz',
        price: '53000',
        stock: '5',
        description: 'Memoria RAM Corsair, DDR4, 16GB (2 unidades de 8GB), velocidad 2666 mhz, con disipador, RGB',
        img: '/images/ram-2.webp'
    },
    {
        id: '15',
        category: 'ram',
        name: 'Patriot Viper DDR4 16GB (2 x 8GB) 3200MHz',
        price: '48000',
        stock: '7',
        description: 'Memoria RAM Patriot Viper, DDR4, 16GB (2 unidades de 8GB), velocidad 3200 mhz, con disipador, RGB',
        img: '/images/ram-4.webp'
    },
    {
        id: '16',
        category: 'ram',
        name: 'Kingston Fury DDR4 16GB 3200MHz',
        price: '48500',
        stock: '8',
        description: 'Memoria RAM Kingston Fury, DDR4, 16GB, velocidad 3200 mhz, con disipador',
        img: '/images/ram-3.webp'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getItemById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find((prod) => prod.id === itemId ))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter((prod) => prod.category === categoryId ))
        }, 1000)
    })
}

