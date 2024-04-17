# Frontend

Esta es la solucion a la prueba tecnica de disagro que consiste en una página web desarrollada con React, Vite, Tailwind CSS y Firebase. La aplicación permite a los usuarios iniciar sesión y completar un formulario para solicitar servicios.

## ecnologías Utilizadas
- React: Una biblioteca de JavaScript para construir interfaces de usuario.
-  Vite: Un entorno de desarrollo rápido para aplicaciones web modernas.
- Tailwind CSS: Un framework de CSS utility-first para diseñar interfaces de usuario.
- Firebase Auth: Una plataforma de desarrollo que permite manejar sesiones de usuarios.

## Requisitos Previos
Node.js y npm (o yarn) deben estar instalados en tu máquina.
# Instalación
Clona este repositorio:

```
Copy code
git clone https://github.com/Leslie-L/prueba-tecnica-disagro.git
```
Accede al directorio del proyecto:
```
Copy code
cd frontend
```
Instala las dependencias:
```
Copy code
npm install
# O usando yarn
yarn
```

## Configuración de Firebase
Antes de ejecutar la aplicación, asegúrate de configurar tu proyecto de Firebase:

1. Crea un proyecto en Firebase Console.
2. Agrega tu aplicación web a tu proyecto Firebase y sigue las instrucciones para configurar Firebase en tu aplicación. Especificamente cambiar las credenciales en el archivo `src/firebase/credentials.js`
3. Habilita la autenticación por correo electrónico y contraseña en la sección "Authentication" de tu proyecto Firebase.
4. Configura las reglas de seguridad de Firebase Database para controlar el acceso a los datos.

## Uso
Una vez que hayas configurado tu proyecto de Firebase, puedes iniciar la aplicación:
```
Copy code
npm run dev
# O usando yarn
yarn dev
```

Esto iniciará la aplicación en modo de desarrollo. Abre tu navegador y accede a http://localhost:5173 para ver la aplicación en acción.

