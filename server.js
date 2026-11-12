const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const VIEWS_DIR = path.join(__dirname, 'views');
const PUBLIC_DIR = path.join(__dirname, 'public');

// Archivos estáticos (CSS, JS del cliente, imágenes)
app.use(express.static(PUBLIC_DIR));

// Devuelve un manejador que envía una página HTML de /views
const sendView = (fileName) => (req, res) =>
  res.sendFile(path.join(VIEWS_DIR, fileName));

// Rutas de las páginas estáticas de la Entrega 1
app.get('/', sendView('index.html'));
app.get('/login', sendView('login.html'));
app.get('/contacto', sendView('contacto.html'));

// Cualquier otra ruta: página 404 con camino de vuelta
app.use((req, res) => {
  res.status(404).sendFile(path.join(VIEWS_DIR, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor en marcha: http://localhost:${PORT}`);
});
