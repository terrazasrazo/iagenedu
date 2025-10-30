# IAGenEdu – 2a Jornada

Sitio web de la 2ª Jornada de Inteligencia Artificial Generativa en la Educación (UNAM).

Construido con React + Vite y TailwindCSS. Incluye páginas informativas, agenda y un directorio de talleres con filtros por nivel y fecha, ordenados por día de ocurrencia y nivel. La vista de detalle de cada taller se resuelve por `id`.

Producción: https://iagenedu.unam.mx

## Tecnologías

- React 18 + React Router
- Vite 4 (plugin react-swc)
- TailwindCSS 3 + PostCSS/Autoprefixer
- ESLint

## Requisitos

- Node.js >= 18 (recomendado)
- npm >= 9

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Esto levanta el servidor de desarrollo de Vite. Abre la URL indicada en la terminal.

## Scripts disponibles

- `npm run dev`: servidor de desarrollo
- `npm run build`: compila el sitio para producción
- `npm run preview`: sirve el build localmente
- `npm run lint`: ejecuta ESLint

## Variables de entorno

El proyecto utiliza variables de entorno de Vite (prefijo `VITE_`). Puedes definirlas en un archivo `.env`, `.env.local` o variables del entorno de tu sistema.

- `VITE_BASE_URL`: base pública del sitio. Útil si se despliega bajo un subpath (ej. `/2a-jornada/`). Se usa en `vite.config.js`.
- `VITE_HOME_URL`: URL pública del sitio raíz (se usa, por ejemplo, para el enlace del logotipo en el encabezado).

Ejemplo `.env.local`:

```dotenv
VITE_BASE_URL=/2a-jornada/
VITE_HOME_URL=https://iagenedu.unam.mx
```

## Datos y fuentes de contenido

- Talleres (listado y detalle): `src/Pages/Workshops/Workshops.json`
	- El listado aplica filtros por nivel y día, y ordena por `ocurrenceDay` y luego `level` (con desempate por título).
	- La vista de detalle de un taller toma el `id` desde la ruta y busca en este JSON.
	- Campos HTML (como `tools`, `themes`) se renderizan como HTML controlado.

Para actualizar la oferta de talleres, edita `Workshops.json`. Si agregas o cambias campos, valida que los componentes involucrados sigan funcionando:

- Listado: `src/Components/Jornada2th/WorkshopsBlock/WorkshopsBlock.jsx`
- Detalle: `src/Components/Jornada2th/WorkshopDetails/WorkshopDetails.jsx`

## Estructura relevante

```
src/
	main.jsx
	index.css
	Components/
		Jornada2th/
			WorkshopsBlock/
				WorkshopsBlock.jsx  # Listado de talleres con filtros y orden
			WorkshopDetails/
				WorkshopDetails.jsx # Detalle del taller por id
		Card/                   # Tarjeta para items de talleres y otros
	Pages/
		Workshops/
			Workshops.json        # Fuente de datos local de talleres
```

## Build y despliegue

```bash
npm run build
```

Notas importantes:

- `vite.config.js` define `base` con `VITE_BASE_URL` y un `outDir` absoluto (`/var/www/html/iagenedu/2a-jornada/`).
	- Si no cuentas con ese path en tu entorno, ajusta `outDir` o usa un build local y despliega los archivos generados manualmente.
	- Para desplegar bajo un subpath, configura `VITE_BASE_URL` (por ejemplo `/2a-jornada/`).

Para revisar el resultado del build localmente:

```bash
npm run preview
```

## Estilo y linting

```bash
npm run lint
```

Sigue las reglas del linter y procura no introducir errores o advertencias nuevas.
