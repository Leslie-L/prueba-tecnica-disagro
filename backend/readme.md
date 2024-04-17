# API
Esta API fue desarrollada con Node.js, Express.js, MongoDB Atlas, Mongoose y Joi. Proporciona funcionalidades para administrar asistencias confirmadas por los usuarios.

# URL base
https://prueba-tecnica-disagro.vercel.app/api/v1/

# Endpoints

## Obtener todas las asistencias confirmadas
Endpoint: GET /api/v1/assistance

Este endpoint devuelve todas las asistencias confirmadas por los usuarios.

## Crear una nueva asistencia confirmada
Endpoint: POST /api/v1/assistance

Este endpoint permite a los usuarios crear una nueva asistencia confirmada. Los detalles de la asistencia deben proporcionarse en el cuerpo de la solicitud en formato JSON.

Ejemplo de cuerpo de solicitud:

```json
Copy code
{
  "name": "Juan",
  "lastName": "Pérez",
  "email": "juan@example.com",
  "date": "2024-04-20T10:00:00.000Z",
  "Cart": ["id","id"]
}
```

## Obtener productos y servicios
Endpoint: GET /api/v1/products-and-services

Este endpoint permite obtener todos los productos y servicios que el usuario puede elegir.


## Configuración
Antes de ejecutar la API, asegúrate de tener Node.js y MongoDB Atlas configurados.
Con MongoDB Atlas se necesita crear una base de datos y objetener el link de acceso.
Luego, sigue estos pasos:

Clona este repositorio:
```
Copy code
git clone https://github.com/Leslie-L/prueba-tecnica-disagro.git
```
Accede al directorio del proyecto:
```
Copy code
cd backend
```

Instala las dependencias:
```
npm install
```
Configura la conexión a tu base de datos MongoDB Atlas en el archivo .env. El archivo debe de tener las varablies
```
DB=link_base_de_datos
PORT=puerto_por_defecto

```

## Uso
Para iniciar la API, ejecuta el siguiente comando:
```
npm start
```
Esto iniciará el servidor en el puerto especificado en el archivo .env (por defecto, puerto 3000).
