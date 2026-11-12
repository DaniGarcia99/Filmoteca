# Filmoteca – Entrega 1 (DIW)

Prototipo web estático pero totalmente navegable de una aplicación de gestión de películas, servido con **Node.js y Express**.

## Páginas
| Ruta | Archivo | Contenido |
|---|---|---|
| `/` | `views/index.html` | Descripción, funciones y listado ilustrativo de películas recientes |
| `/login` | `views/login.html` | Formulario de inicio de sesión (envío simulado) |
| `/contacto` | `views/contacto.html` | Formulario de contacto (envío simulado) |
| cualquier otra | `views/404.html` | Página de error con enlace de vuelta |

## Ejecutar en local
```bash
npm install
npm start
```
Abre http://localhost:3000. Para recargar al guardar: `npm run dev`.

## Estructura
```
server.js          Servidor Express y rutas
views/             Páginas HTML
public/css/        Estilos
public/js/         Simulación de formularios
docs/              Historias de usuario (Parte 1.1)
```

## Documentación
- Historias de usuario: [`docs/historias-usuario.md`](docs/historias-usuario.md)

## Despliegue (Render)
- Build command: `npm install`
- Start command: `npm start`
