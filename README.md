# Backend - Code Challenge

El código fuente se encuentra en el directorio `currency-converter-api`.

Para esta solución se tomaron en cuenta los puntos opcionales plantedos en el reto.

### Ejecución

Para ejecutar este proyecto utilizando [Docker] solo debe ejecutar el comando en la raíz:
```bash
docker compose up -d
```

_Se utiliza el puerto `3000`, revisar que no se encuentra ya en uso para evitar conflictos al intentar levantar el servicio._

Se puede utilizar el `API` con la siguiente url:
```
http://localhost:3000
```

### Documentación con [Swagger]

Para leer la documentación del API en formato web, acceder desde su navegador a la URL:
```
http://localhost:3000/docs
```

Para leer la documentación en `AWS`, visitar el siguiente [enlace](http://ec2-3-141-244-3.us-east-2.compute.amazonaws.com:3000/docs).
```
http://ec2-3-141-244-3.us-east-2.compute.amazonaws.com:3000/docs
```

### AWS

Esta solución se encuentra ejecutándose en una instancia `EC2` de `AWS`.

La URL para utilizar el `API` alojado en `AWS` es la siguiente:

```
http://ec2-3-141-244-3.us-east-2.compute.amazonaws.com:3000
```

## JWT

Todos los `endpoints` del `API` se encuentran protegidos con un `token`, para ello es necesario definir en el `header` lo siguiente:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJKb25hdGhhbiBBcmFuY2liaWEiLCJpYXQiOjE3MDI1MDk3MTh9.VBLgSJJDYd6LV20CKxSfKgnmwW9MzDHuv4tIhhCM3ME
```

_Este `token` es estático y sólo es para própositos del reto_

### Postman

En el repositorio puede encontrar el directorio `postman` y dentro está el archivo `Backend Challenge.postman_collection.json`. El cual puede importar en `Postman` para probar los distintos endpoints del `API`.

_Recuerde actualizar la variable `BASE_URL` dependiendo de dónde se está ejecutando la solución_

_La variable `BASE_URL` por defecto está configurado con el `DNS` de `AWS` (leer la siguiente sección)_

### Tech

- [nodejs] v16 - Evented I/O
- [nestjs] - Node.js Framework
- [typeorm] - TS/JS ORM
- [passport-jwt] - Passport Strategy for JWT Auth
- [jwt] - JSON Web Tokens
- [swagger] - UI API Documentation
- [mysql] - MySQL Database

[nodejs]: <https://nodejs.org/>
[nestjs]: <https://nestjs.com/>
[passport-jwt]: <https://www.passportjs.org/packages/passport-jwt/>
[jwt]: <https://jwt.io/>
[swagger]: <https://swagger.io/tools/swagger-ui/>
[typeorm]: <https://typeorm.io/>
[mysql]: <https://www.mysql.com/>
