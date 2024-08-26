<<<<<<< HEAD
# Backend de Gestión de Usuarios y Productos

Este proyecto es un backend que permite la gestión de usuarios y productos, incluyendo la creación, edición, eliminación y consulta de estos elementos. Además, ofrece funcionalidades de autenticación para usuarios administradores.

## Requisitos

Es necesario tener los siguientes requisitos instalados en tu entorno de desarrollo:

- **Node.js 20.6+**: Importante que sea la versión 20.6 o superior para que funcione el archivo `.env`.
- **MongoDB**: Base de datos NoSQL que puedes utilizar en un servidor propio, ya sea local o en la nube.

## Instalación

1. Clonar este repositorio.
2. Ejecutar `npm install` para instalar todas las dependencias necesarias.

## Configuración

Crear un archivo `.env` en la raíz del proyecto y configurar las variables de entorno necesarias. Puedes guiarte por el archivo `.env_sample` para saber qué variables configurar.

## Uso

### Opción 1: Hacer el build

Para iniciar el servidor en modo producción:

1. Ejecutar `npm run build` para generar la build.
2. Con la build ya realizada, ejecutar `npm start` para iniciar el servidor.

### Opción 2: Modo desarrollo

Para ejecutar el servidor en modo desarrollo:

1. Ejecutar `npm run dev`.

## Documentación de API

La tabla a continuación detalla los endpoints disponibles para cada servicio del backend:

### Usuarios
**Ruta principal:** `/api/v1/users`

| Método | Endpoint                | Protegido | Debe ser Admin | Descripción                   | Body                                                              |
|--------|-------------------------|-----------|----------------|-------------------------------|-------------------------------------------------------------------|
| GET    | /                        | ✅        | ✅             | Obtiene todos los usuarios     | -                                                                 |
| POST   | /                        | ❌        | ❌             | Crea un nuevo usuario          | `{ "firstname": string, "lastname": string, "email": string, "password": string }` |
| PUT    | /:id                     | ✅        | ❌             | Actualiza un usuario por su id | `{ "firstname"?: string, "lastname"?: string, "email"?: string, "password"?: string }` |
| GET    | /check-email?email={email} | ❌        | ❌             | Verifica si un email ya existe | -                                                                 |

### Autenticación
**Ruta principal:** `/api/v1/auth`

| Método | Endpoint | Protegido | Debe ser Admin | Descripción           | Body                                                     |
|--------|----------|-----------|----------------|-----------------------|----------------------------------------------------------|
| POST   | /login   | ❌        | ❌             | Inicia sesión          | `{ "email": string, "password": string }`                |

### Productos
**Ruta principal:** `/api/v1/products`

| Método | Endpoint | Protegido | Debe ser Admin | Descripción                   | Body                                                                                   |
|--------|----------|-----------|----------------|-------------------------------|----------------------------------------------------------------------------------------|
| GET    | /        | ❌        | ❌             | Obtiene todos los productos    | -                                                                                      |
| POST   | /        | ✅        | ✅             | Crea un nuevo producto         | `{ "name": string, "imageUrl": string, "price": number, "description": string, "available": boolean, "ingredients": string, "category": string }` |
| PUT    | /:id     | ✅        | ✅             | Actualiza un producto por su id | `{ "name"?: string, "price"?: number, "description"?: string, "ingredients"?: string, "category"?: string }` |
| DELETE | /:id     | ✅        | ✅             | Elimina un producto por su id  | -                                                                                      |

## Equipo

- **Leandro Vinticol**
- **Ivan Alexander Balceda**
- **Ignacio Lencina**
- **Lucila Amand de Mendieta**
=======
# Backend de Gestión de Usuarios y Productos

Este proyecto es un backend que permite la gestión de usuarios y productos, incluyendo la creación, edición, eliminación y consulta de estos elementos. Además, ofrece funcionalidades de autenticación para usuarios administradores.

## Requisitos

Es necesario tener los siguientes requisitos instalados en tu entorno de desarrollo:

- **Node.js 20.6+**: Importante que sea la versión 20.6 o superior para que funcione el archivo `.env`.
- **MongoDB**: Base de datos NoSQL que puedes utilizar en un servidor propio, ya sea local o en la nube.

## Instalación

1. Clonar este repositorio.
2. Ejecutar `npm install` para instalar todas las dependencias necesarias.

## Configuración

Crear un archivo `.env` en la raíz del proyecto y configurar las variables de entorno necesarias. Puedes guiarte por el archivo `.env_sample` para saber qué variables configurar.

## Uso

### Opción 1: Hacer el build

Para iniciar el servidor en modo producción:

1. Ejecutar `npm run build` para generar la build.
2. Con la build ya realizada, ejecutar `npm start` para iniciar el servidor.

### Opción 2: Modo desarrollo

Para ejecutar el servidor en modo desarrollo:

1. Ejecutar `npm run dev`.

## Documentación de API

La tabla a continuación detalla los endpoints disponibles para cada servicio del backend:

### Usuarios
**Ruta principal:** `/api/v1/users`

| Método | Endpoint                | Protegido | Debe ser Admin | Descripción                   | Body                                                              |
|--------|-------------------------|-----------|----------------|-------------------------------|-------------------------------------------------------------------|
| GET    | /                        | ✅        | ✅             | Obtiene todos los usuarios     | -                                                                 |
| POST   | /                        | ❌        | ❌             | Crea un nuevo usuario          | `{ "firstname": string, "lastname": string, "email": string, "password": string }` |
| PUT    | /:id                     | ✅        | ❌             | Actualiza un usuario por su id | `{ "firstname"?: string, "lastname"?: string, "email"?: string, "password"?: string }` |
| GET    | /check-email?email={email} | ❌        | ❌             | Verifica si un email ya existe | -                                                                 |

### Autenticación
**Ruta principal:** `/api/v1/auth`

| Método | Endpoint | Protegido | Debe ser Admin | Descripción           | Body                                                     |
|--------|----------|-----------|----------------|-----------------------|----------------------------------------------------------|
| POST   | /login   | ❌        | ❌             | Inicia sesión          | `{ "email": string, "password": string }`                |

### Productos
**Ruta principal:** `/api/v1/products`

| Método | Endpoint | Protegido | Debe ser Admin | Descripción                   | Body                                                                                   |
|--------|----------|-----------|----------------|-------------------------------|----------------------------------------------------------------------------------------|
| GET    | /        | ❌        | ❌             | Obtiene todos los productos    | -                                                                                      |
| POST   | /        | ✅        | ✅             | Crea un nuevo producto         | `{ "name": string, "imageUrl": string, "price": number, "description": string, "available": boolean, "ingredients": string, "category": string }` |
| PUT    | /:id     | ✅        | ✅             | Actualiza un producto por su id | `{ "name"?: string, "price"?: number, "description"?: string, "ingredients"?: string, "category"?: string }` |
| DELETE | /:id     | ✅        | ✅             | Elimina un producto por su id  | -                                                                                      |

## Equipo

- **Leandro Vinticol**
- **Ivan Alexander Balceda**
- **Ignacio Lencina**
- **Lucila Amand de Mendieta**
>>>>>>> 6126c764aed9274068175b7114ca3a0c25824c34
