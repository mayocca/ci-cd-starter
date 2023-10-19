# Introducción a CI/CD y Pipelines

Este repositorio contiene el código fuente de la aplicación de ejemplo para la introducción a CI/CD y Pipelines.

## Requisitos

- Git
- Node.js 18.x

## Instalación

```bash
npm install
```

## Ejecución en modo desarrollo

```bash
npm run dev
```

## Build

Para generar el build de la aplicación, primero se debe cambiar el valor de los parámetros `site` y `base` en el archivo `astro.config.mjs` para que coincidan con el nombre de usuario y el nombre del repositorio en GitHub.

Luego, ejecutar el siguiente comando:

```bash
npm run build
```
