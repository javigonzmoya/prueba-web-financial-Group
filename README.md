# Prueba para Web Financial Group

Esto es una Prueba para Web Financial Group de visualización de datos financieros mediante angular suministrados por una API de prueba

## DataTableApp --V

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

# Estructura del proyecto

El proyecto se estructura en dos componentes y dos servicios para la conexion con la api

## Componentes

### dataview-screen

Donde se visualizar los datos consumiendo los servicios de datos

### navbar

Componente creado para dar algo de estilo y mostrar mi nombre y el del usuario logeado

## Services

### auth-service

creado para obtener el token

### data-service

creado para mediante el token devuelto obtener los datos pasdos por el pipe

## Pipes

### millones-pipe

creado un custom pipe para mostrar en millones como la visualizacion

## environmens

Uso los enviromens para almacenar la apiURL y las credenciales de llamada

## Models

Tipado de la respuesta de la api
