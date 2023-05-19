# AWS_LAMBDA

Este proyecto consiste en una serie de funciones creadas en AWS Lambda que permiten realizar operaciones en una base de datos DynamoDB. 
Estas funciones están diseñadas para permitir la creación, actualización, eliminación y consulta de productos en la base de datos.

## Tabla de contenidos

- [Funciones Lambda](#funciones)
- [Requisitos previos](#requisitos)
-
## Funciones
El proyecto cuenta con las siguientes funciones Lambda:

## CrearProducto: 
Esta función permite insertar un nuevo producto en la base de datos DynamoDB.


## ListarProducto: 
Permite obtener una lista de todos los productos registrados en la base de datos

## ListarporID: 
Permite obtener un registro especificando como parametro su id registrado en la base de datos.

## ActualizarProducto: 
Esta función permite modificar un producto existente en la base de datos.

## EliminarProducto: 
Permite eliminar un producto de la base de datos.

BuscarProducto: Esta función permite buscar un producto por su ID en la base de datos.

## Requisitos previos
Antes de utilizar este proyecto, es necesario cumplir con los siguientes requisitos:

Tener una cuenta en AWS con acceso a los servicios de Lambda y DynamoDB.
Configurar las credenciales de AWS en el entorno local o utilizar un perfil de AWS válido.

## Ejemplos de API

Aquí se proporcionan ejemplos de las rutas de API Gateway para cada operación CRUD de productos, junto con los datos JSON de ejemplo para cada solicitud.

- Listar todos los productos:

  - Método: GET
  - Ruta: `https://tu-api-gateway-url/productos`

- Buscar un producto por ID:

  - Método: GET
  - Ruta:
