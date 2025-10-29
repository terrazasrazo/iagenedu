# I Jornada de Inteligencia Artificial Generativa en Educación UNAM 2023

Aplicación web construida con **React 18** y **Vite** para difundir la I Jornada de IA Generativa en Educación de la UNAM. El proyecto se desplegará como sitio estático y consume datos locales para garantizar la disponibilidad offline de los contenidos clave.

## Requisitos

- Node.js ≥ 18
- npm ≥ 9

## Instalación y scripts

```bash
npm install       # Instala dependencias
npm run dev       # Servidor de desarrollo (http://localhost:5173)
npm run build     # Genera el sitio estático en /var/www/html/iagenedu/i-jornada/
npm run preview   # Servidor para previsualizar el build
npm run lint      # Revisión de estilo con ESLint
```

## Variables de entorno

Configura un archivo `.env` en la raíz del proyecto. Las variables actualmente utilizadas son:

- `VITE_BASE_URL`: Ruta base del sitio. Se usa tanto en `vite.config.js` como en React Router para que las rutas funcionen bajo cualquier subdirectorio. Ejemplo: `/iagenedu/i-jornada/`.
- `VITE_HOME_URL`: URL pública del portal institucional. Útil para componer enlaces absolutos. Ejemplo: `https://iagenedu.unam.mx`.

Reinicia el servidor de desarrollo tras modificar el archivo `.env`.

## Datos locales

Las páginas principales utilizan colecciones JSON incluidas en el repositorio:

- `src/Pages/IJornada/mainsessions.json`: listado de sesiones plenarias. Se consume directamente en `IJornada/index.jsx`.
- `src/Pages/Workshops/workshops.json`: catálogo completo de talleres con detalle de ponentes. Se usa tanto en `Workshops/index.jsx` como en `WorkshopDetails/index.jsx` para filtrar y mostrar la información sin llamadas a la API.

Actualiza estos archivos cuando cambien los contenidos oficiales del evento.

## Estructura de páginas

El directorio `src/Pages` agrupa las vistas del sitio:

- `App/index.jsx`: raíz de enrutamiento (`BrowserRouter`) y layout general (encabezado, navegación y pie).
- `IJornada/index.jsx`: portada del evento con banner, propósito e inserción de videos por fecha.
- `IJornada/Sessions/*.jsx`: contenido extendido de cada mesa, panel o sesión especial.
- `Workshops/index.jsx`: listado filtrable de talleres (por nivel y fecha) basado en `workshops.json`.
- `WorkshopDetails/index.jsx`: detalle del taller seleccionado, incluyendo video, objetivos, herramientas, referencias y ponentes.
- `InterestingResources/index.jsx`: repositorio curado de artículos, cursos, lineamientos y otras fuentes con filtros por tipo de recurso y acceso rápido al buscador de palabras clave.
- `Findings/index.jsx`: sección que presenta las recomendaciones oficiales para el uso educativo de IA generativa e incluye el enlace de descarga del documento PDF.
- `NotFound/index.jsx`: página de error 404 mostrada cuando la ruta no coincide con las definidas.

## Despliegue

El build produce archivos estáticos en `/var/www/html/iagenedu/i-jornada/` (configurado en `vite.config.js`). Asegúrate de que el directorio exista y tenga permisos de escritura antes de ejecutar `npm run build` en entornos de producción.
