
## Prueba Maquetacion Hoteles

Luego de clonar, ingresar a cada parte de la prueba (core y client) y descargar las dependencias:

```sh
npm install
```
Luego de bajar las dependencias, ingresamos a la carpeta core y corremos el servicio del back de nodejs:

```sh
node index.js
```

Para ejecutar el cliente, ingresamos a la carpeta client ejecutamos:

```sh
ng serve
```
La aplicacion Correra en http://localhost:4200

## Cliente

El cliente es una aplicacion creada en Angular6. Para generar los archivos dist (minificados y ofuscados) para produccion, ejecutamos dentro de la carpeta client:

```sh
ng build --prod
```

En la carpeta assets/data se encuentra un archivo appsettings.json, donde se pueden configurar variables de entornos de produccion o desarrollo (direccion de API).

## Core

Pequeña aplicacion utilizando NodeJS y Express. La api permite:

Consultar hoteles: GET http://localhost:8090/hotels

Filtrar por nombre hoteles: GET http://localhost:8090/hotels/name?filter=NOMBRE

Filtrar por estrellas hoteles: GET http://localhost:8090/hotels/stars?filter=123

Crear hoteles: POST http://localhost:8090/hotels (Body: Hotel Object del data.json)
    
Editar hoteles: PUT http://localhost:8090/hotels (Body: Hotel Object del data.json)
    
Eliminar hoteles: DELETE http://localhost:8090/hotels/99999

