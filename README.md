# AWS_LAMBDA

Este proyecto consiste en una serie de funciones creadas en AWS Lambda que permiten realizar operaciones en una base de datos DynamoDB. 
Estas funciones están diseñadas para permitir la creación, actualización, eliminación y consulta de productos en la base de datos.

## Tabla de contenidos

- [Funciones Lambda](#funciones)
- [Requisitos previos](#requisitosprevios)
## Funciones
- El proyecto cuenta con las siguientes funciones Lambda:

## CrearProducto: 
- Esta función permite insertar un nuevo producto en la base de datos DynamoDB.

## ListarProducto: 
- Permite obtener una lista de todos los productos registrados en la base de datos

## ListarporID: 
- Permite obtener un registro especificando como parametro su id registrado en la base de datos.

## ActualizarProducto: 
- Esta función permite modificar un producto existente en la base de datos.

## EliminarProducto: 
- Permite eliminar un producto de la base de datos.


## Requisitos previos
Antes de utilizar este proyecto, es necesario cumplir con los siguientes requisitos:

Tener una cuenta en AWS con acceso a los servicios de Lambda y DynamoDB.
Configurar las credenciales de AWS en el entorno local o utilizar un perfil de AWS válido.

## Ejemplos de API

Aquí se proporcionan ejemplos de las rutas de API Gateway para cada operación CRUD de productos, junto con los datos JSON de ejemplo para cada solicitud.

- Crear todos los productos:

  - Método: POST
  - Ruta: `https://kc0eq0y6eg.execute-api.us-east-1.amazonaws.com/productoshttps://tu-api-gateway-url/productos`

- Actualizar un producto por ID:

  - Método: POST
  - Ruta: https://kc0eq0y6eg.execute-api.us-east-1.amazonaws.com/actualizarProducto?id=3165eb19-2af8-4874-b8c2-da728b13c47a

- Eliminar un producto por ID:

  - Método: DELETE
  - Ruta: https://kc0eq0y6eg.execute-api.us-east-1.amazonaws.com/deleteProductos?id=3165eb19-2af8-4874-b8c2-da728b13c47a

- Listar todos los productos:

  - Método: GET
  - Ruta: https://kc0eq0y6eg.execute-api.us-east-1.amazonaws.com/ListarTodosProductos

- Listar productos por ID:

  - Método: GET
  - Ruta:  https://kc0eq0y6eg.execute-api.us-east-1.amazonaws.com/ListarIdProducto?id=bcdcb345-1b9a-4909-ab53-19c4c3c5e6e

