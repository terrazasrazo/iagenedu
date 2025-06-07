# I Jornada de Inteligencia Artificial Generativa en Educación UNAM 2023

## Estructura de Páginas y Funcionalidades

El proyecto cuenta con las siguientes páginas principales, ubicadas en el directorio `src/Pages`:

- **`App/index.jsx`**: Componente principal de la aplicación. Maneja el enrutamiento general y la estructura de la página (cabecera, pie de página).
- **`IJornada/index.jsx`**: Página principal del evento "I Jornada de Inteligencia Artificial Generativa en Educación UNAM 2023". Muestra información general sobre la jornada.
- **`IJornada/Sessions/*.jsx`**: Conjunto de páginas que detallan cada una de las sesiones específicas de la "I Jornada". Incluyen:
    - `BienvenidaInauguracion.jsx`: Detalles de la sesión de bienvenida e inauguración.
    - `IAGenerativaAprendizaje.jsx`: Detalles de la sesión sobre IA generativa y aprendizaje.
    - `ExperienciasIAGenerativaUNAM.jsx`: Detalles de la sesión sobre experiencias con IA generativa en la UNAM.
    - `PresentacionesRelampagoLunes.jsx`: Detalles de las presentaciones relámpago del lunes.
    - `InvestigacionIAGenUNAM.jsx`: Detalles de la sesión sobre investigación en IA generativa en la UNAM.
    - `IAGenerativaEvaluacion.jsx`: Detalles de la sesión sobre IA generativa y evaluación.
    - `FuturosIAGenerativaUNAM.jsx`: Detalles de la sesión sobre los futuros de la IA generativa en la UNAM.
    - `PresentacionesRelampagoMartes.jsx`: Detalles de las presentaciones relámpago del martes.
    - `Clausura.jsx`: Detalles de la sesión de clausura.
- **`Keywords/index.jsx`**: Página dedicada a mostrar y filtrar contenido (sesiones, talleres) basado en palabras clave.
- **`NotFound/index.jsx`**: Página que se muestra cuando se intenta acceder a una ruta no existente (error 404).
- **`WorkshopDetails/index.jsx`**: Página que muestra la información detallada de un taller específico, incluyendo su descripción, ponentes, etc.
- **`Workshops/index.jsx`**: Página que lista todos los talleres disponibles como parte del evento.

## Variables de Entorno

Este proyecto utiliza las siguientes variables de entorno. Puedes configurarlas creando un archivo `.env` en la raíz del proyecto:

- `VITE_BASE_URL`: Define la URL base de la aplicación. Es utilizada por Vite y React Router para resolver correctamente las rutas.
  - Ejemplo: `/iagenedu/i-jornada/`
- `VITE_API_URL`: Especifica la URL base para los endpoints de la API con los que la aplicación se comunicará.
  - Ejemplo: `https://ada.bunam.unam.mx/iagen-api`
- `VITE_HOME_URL`: Define la URL principal del proyecto, que podría usarse para enlaces absolutos o referencias.
  - Ejemplo: `https://iagenedu.unam.mx`
- `VITE_MY_PHRASE`: Una variable de entorno personalizada; su propósito debe documentarse de acuerdo con su uso en la aplicación.
  - Ejemplo: `"iagenedu"`

Asegúrate de reemplazar los valores de ejemplo con tu configuración real.
