![Banner Tecno Tienda](/public/images/readme/banner-readme.png)
# Proyecto ecommerce Tecno Tienda
## Curso de React
## _CODERHOUSE - Comisión 58160_


## Acerca del proyecto
Este proyecto consiste en una aplicación web que permite a los usuarios comprar productos de hardware y periféricos para computadoras, tales como tarjetas gráficas, motherboards, procesadores y memorias entre otros. El proyecto aún se encuentra en etapa de desarrollo.


## Tecnologías aplicadas
Este proyecto fue desarrollado utilizando siguientes tecnologías:

![Tecnologías del proyecto](/public/images/readme/tecnologias-readme.png)

## Backend as a service
Siendo un Proyecto de Front-End, el servicio de backend que sustenta el sitio fue integrado con
![Built with Firebase](/public/images/readme/built-with-firebase.png)


## Enlaces a mis redes sociales

- [LinkedIn](https://www.linkedin.com/in/ariel-endrizzi/)
- [GitHub](https://github.com/arielend)


## Para correr el proyecto localmente

```
$ git clone https://github.com/arielend/React-PF-Endrizzi
$ cd tecno-tienda
$ npm install
$ npm run dev
```

## Flujo del Sitio
El proyecto se inicia desde la página principal, desde la cual podras ver un listado completo de los productos ofrecidos por la tienda. Desde la parte superior podras navegar a travez de un menú de categorías desde el cual se accede a un listado filtrado de productos. Las categorías de productos en venta son Motherboards, Placas de Video, Procesadores, Memorias RAM y una categoría de Almacenamiento, la cual exhibe un mensaje por falta de productos en la misma.  

La barra de navegación, la cual esta presenta en todo el sitio, permite navegar también hacia la página de inicio y a traves de un botón, el cual muestra la cantidad de productos que lo componen, navegar hacia el carrito de compras.  

Todos los item listados, tanto en la vista de inicio como en la vista filtrada por productos, nos muestra tarjetas individuales con información basica de los productos, como ser el nombre, una imagen y el precio; además de incluir un boton que nos permite navegar al detalle de ese producto. La tarjeta de productos exhibe además flags que señalan si el producto se encuentra sin stock y si posee aplicado algún descuento.  

Accediendo al detalle del producto una pantalla nos muestra la vista detallada, en la cual además de la información proporcionada en la pantalla anterior, agrega una descripción del producto, muestra el stock disponible y los controles que nos permiten seleccionar una cantidad y agregarla al carrito de compras. Una vevz agregado el producto al carrito se mostrara un boton que nos permitirá hacer el checkout de la compra y otro que nos permitirá seguir comprando.  


El acceso al carrito de compras se puede hacer desde el widget del carrito ubicado en la barra de navegación o desde el boton que se muestra al agregar un producto al carrito desde el detalle. Desde el carrito se puede visualizar, en al caso de haber agregado productos, un listado que muestra el nombre del producto agregado, la cantidad de unidades de ese producto, el precio unitario y el subtotal del producto, ademas del total de la compra. Desde ese listado, por medio de un boton ubicado junto a cada producto de la lista, se puede remover un elemento del carrito. Dos botones permiten vaciar el carrito o proceder a finalizar el proceso de compra.

El proceso de compra se realiza desde el componente chekout, el mismo muestra un detalle de los productos que integran el carrito de compras para revisión y a traves de un formulario se solicitan los datos mínimos para finalizar la compra. El formulario de checkout es validado por 'React-Hooh-Form". Una vez ingresados y validados los datos, se finaliza la compra, luego de la cual el sitio informa el identificador de la orden generada.

## Accedé al despliegue del proyecto en Vercel
[Tecno Tienda](https://react-pf-endrizzi.vercel.app/)

![Vercel](/public/images/readme/vercel.png)

# GRACIAS POR VISITAR MI PROYECTO
