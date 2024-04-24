# NODEJS BACKEND CODERHOUSE
Entrega 1 

## Intalacion 

```bash
# Paso 1: Clonar el repositorio
git clone https://github.com/TomasZalazar/Entrega1_BackEnd.git

# Paso 2: Instalar dependencias (en la carpeta raíz para instalar dependencias)
npm i

# Paso 3: Correr el script en consola en la carpeta raíz "npm run app" para conectar con el servidor de Express
npm run app
````
## Para usar las acciones GET 
levantar el servidor con el script
npm run app
````bash 
# Paso 1: en consola : npm run app 
   (esto corre por dentro nodemon ./src/app.js)
`````
abrir el archivo app.http
````bash 
# Paso 2: abrir archivo y ubicar el mouse en la palabra GET para poder clickearlo y hacer el request 
`````





Estos pasos te permitirán configurar y ejecutar el backend Node.js. Si tienes alguna pregunta o problema, no dudes en preguntar.

## Rutas

```python 

# Products

/api/products

# Cart

/api/cart


````

## Acciones
```python 

# GET

## Recuperar los productos

GET http://localhost:4000/api/products

## Recuperar los productos por su id 

GET http://localhost:4000/api/products/:pid

## Recuperar el carrito

GET http://localhost:4000/api/cart

# POST

/api/cart

# PUT

# DELETE

````