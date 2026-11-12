# Historias de usuario – Filmoteca

**Proyecto:** Aplicación web de gestión de películas (DIW, Reto T1 – Entrega 1)
**Metodología:** Diseño Centrado en el Usuario (DCU)

## 1. Usuarios y necesidades

| Perfil | Quién es | Qué necesita | Qué le frustra |
|---|---|---|---|
| **Visitante** | Persona que llega a la web sin sesión iniciada | Entender para qué sirve la aplicación y cómo acceder o contactar | No saber qué ofrece la web ni dónde pulsar |
| **Coleccionista (usuario registrado)** | Persona con películas en distintos formatos (DVD, Blu-Ray, VHS, digital) | Ver solo sus copias, saber en qué estado están y consultar el detalle de cada una | Perder la cuenta de lo que tiene, no recordar si una copia está dañada, ver datos de otras personas |

Principios DCU que guían el diseño: **facilidad de uso** (interfaz clara), **accesibilidad** (teclado, contraste, etiquetas) e **intuitividad** (navegación sencilla y lógica).

## 2. Historias de usuario

Prioridad: **Alta / Media / Baja**. Fase: en qué entrega se implementa.

### HU-01 – Entender qué es la aplicación
**Como** visitante, **quiero** ver en la página inicial una descripción clara de la aplicación **para** decidir si me interesa registrarme o iniciar sesión.
- *Criterios de aceptación:*
  - La página inicial explica en pocas líneas qué hace la aplicación.
  - Se muestran las funciones principales (ver copias, estado, detalle).
- **Prioridad:** Alta · **Fase:** Entrega 1

### HU-02 – Ver películas recientes
**Como** visitante, **quiero** ver un listado ilustrativo de películas recientes **para** hacerme una idea del tipo de información que ofrece la aplicación.
- *Criterios de aceptación:*
  - Se muestran al menos título, director, año y género de cada película.
  - El listado es legible también con lector de pantalla (tabla con cabeceras).
- **Prioridad:** Media · **Fase:** Entrega 1

### HU-03 – Moverme entre páginas
**Como** visitante, **quiero** una navegación visible y coherente en todas las páginas **para** llegar a Inicio, Login y Contacto sin perderme.
- *Criterios de aceptación:*
  - La cabecera y el pie aparecen en todas las pantallas con los mismos enlaces.
  - La página actual queda señalada en el menú.
  - Una dirección inexistente muestra una página 404 con enlace de vuelta.
- **Prioridad:** Alta · **Fase:** Entrega 1

### HU-04 – Iniciar sesión
**Como** coleccionista, **quiero** iniciar sesión con mi nombre de usuario y contraseña **para** acceder a mi colección de forma privada.
- *Criterios de aceptación:*
  - El formulario tiene los campos usuario y contraseña, con etiquetas visibles.
  - Si falta algún campo, se avisa antes de enviar.
  - *Entrega 1:* el botón simula el proceso y lo indica con un mensaje.
  - *Entrega 2:* se validan las credenciales contra `users.json` y se crea la sesión.
- **Prioridad:** Alta · **Fase:** Entrega 1 (simulado) y Entrega 2 (real)

### HU-05 – Contactar con el equipo
**Como** visitante o usuario, **quiero** enviar un mensaje con mi nombre, correo y consulta **para** resolver dudas o comunicar problemas.
- *Criterios de aceptación:*
  - El formulario pide nombre, correo electrónico y mensaje, todos obligatorios.
  - El correo se valida con formato de email.
  - Al enviar, se confirma con un mensaje claro (simulado en esta entrega).
- **Prioridad:** Media · **Fase:** Entrega 1

### HU-06 – Ver el listado de mis copias
**Como** coleccionista, **quiero** ver un listado con todas mis copias de películas **para** saber qué tengo de un vistazo.
- *Criterios de aceptación:*
  - Solo aparecen las copias del usuario autenticado, nunca las de otros usuarios.
  - Cada copia muestra título, formato y estado.
  - Cada elemento enlaza a su página de detalle.
- **Prioridad:** Alta · **Fase:** Entrega 2

### HU-07 – Consultar el detalle de una copia
**Como** coleccionista, **quiero** abrir el detalle de una copia **para** ver los datos de la película (director, año, género, descripción) y el estado y formato de mi copia.
- *Criterios de aceptación:*
  - La URL incluye el identificador (`/copia/:id`).
  - Se muestra la información de la película y de las copias asociadas.
  - Hay un enlace para volver al listado.
- **Prioridad:** Alta · **Fase:** Entrega 2

### HU-08 – Cerrar sesión
**Como** coleccionista, **quiero** cerrar mi sesión **para** que nadie más pueda ver mi colección desde mi dispositivo.
- *Criterios de aceptación:*
  - Hay un botón o enlace "Cerrar sesión" visible cuando se ha iniciado sesión.
  - Al cerrar, se destruye la sesión y se vuelve a la página inicial.
- **Prioridad:** Alta · **Fase:** Entrega 2

### HU-09 – Acceso protegido
**Como** coleccionista, **quiero** que mis páginas solo se abran si he iniciado sesión **para** proteger mi información.
- *Criterios de aceptación:*
  - Si alguien sin sesión escribe la URL del listado o de un detalle, es redirigido al login.
  - Un usuario no puede abrir copias de otro usuario.
- **Prioridad:** Alta · **Fase:** Entrega 2

### HU-10 – Saber si mis credenciales son incorrectas
**Como** coleccionista, **quiero** que el login me explique qué ha fallado **para** poder corregirlo sin frustrarme.
- *Criterios de aceptación:*
  - Si los datos no coinciden, aparece un mensaje claro sin revelar cuál de los dos campos falló.
  - El usuario escrito se conserva en el formulario.
- **Prioridad:** Media · **Fase:** Entrega 2

### HU-11 – Distinguir el estado de cada copia
**Como** coleccionista, **quiero** ver el estado de cada copia (buena, dañada, perdida) con texto y color **para** identificarlo rápido sin depender solo del color.
- *Criterios de aceptación:*
  - El estado se muestra siempre con texto (no solo con color).
  - Los colores cumplen contraste suficiente.
- **Prioridad:** Media · **Fase:** Entrega 2

### HU-12 – Usar la web con teclado y en el móvil
**Como** persona con necesidades de accesibilidad o que usa el móvil, **quiero** poder usar toda la web con teclado y en pantallas pequeñas **para** acceder a las mismas funciones que los demás.
- *Criterios de aceptación:*
  - Se puede navegar con la tecla Tab y el foco es siempre visible.
  - Existe un enlace "Saltar al contenido".
  - El diseño se adapta a pantallas estrechas sin scroll horizontal en la página.
- **Prioridad:** Alta · **Fase:** Transversal (desde la Entrega 1)

### Ideas futuras (fuera del alcance actual)
- **HU-13** – Como coleccionista, quiero filtrar mis copias por formato o estado para encontrar rápido lo que busco.
- **HU-14** – Como coleccionista, quiero añadir o editar una copia para mantener mi colección al día.

## 3. Mapa de navegación

```
Inicio (/) ──► Iniciar sesión (/login) ──► [Entrega 2] Listado ──► Detalle (/copia/:id)
   │                                                  │
   └──► Contacto (/contacto)                          └──► Cerrar sesión ──► Inicio
```
