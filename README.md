<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Development environment

1. Clonar el proyecto
2. Copiar ```env.template``` y renombrar a ```.env```
3. Ejecutar

```
yarn install
```
4. Levantar la imagen (docker desktop)
```
docker-compose up -d
```
5. Levantar el backend de Nest
```
yarn start:dev
```
6. Visitar el sitio
```
localhost:3000/graphql
```