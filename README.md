# Electoral Consultation

El proyecto **Electoral Consultation** es una aplicación web moderna diseñada para consultas electorales, utilizando tecnologías avanzadas para una experiencia de usuario eficiente y escalable.

## Estructura y Arquitectura

- **Framework Frontend**: Utiliza **React** para construir la interfaz de usuario, permitiendo una arquitectura basada en componentes reutilizables.
- **Gestión de Estado**: **Redux Toolkit** simplifica la gestión del estado de la aplicación de manera predecible.
- **Componentes UI**: **Material-UI** implementa el diseño Material de Google a través de componentes React para una interfaz atractiva y consistente.
- **Entorno de Desarrollo**: **Vite** ofrece un entorno de desarrollo rápido con características como reemplazo en caliente de módulos.
- **Lenguaje**: **TypeScript** proporciona comprobación de tipos estáticos para detectar errores durante el desarrollo.

## Requisitos previos

Antes de empezar a trabajar con este proyecto, necesitas tener Yarn instalado en tu sistema.

### Cómo instalar Yarn

Yarn es un gestor de paquetes para proyectos JavaScript y Node.js. Para instalar Yarn, siga estos pasos:

1. **Para Windows**: Visita la [Página de instalación de Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) y descarga el instalador para Windows. Ejecute el instalador y siga las instrucciones de instalación.
  
   ```bash
   npm install -g yarn
   yarn --version
   ```

## Instalación

Para empezar con este proyecto, primero debes clonarlo e instalar las dependencias necesarias.

```bash
git clone https://github.com/DANIELSSF/Electoral-Consultation.git
cd Consulta-Electoral
yarn
```

Scripts disponibles
En el directorio del proyecto, puedes ejecutar los siguientes scripts:

- Inicia la aplicación en modo desarrollo. Abre http://localhost:5173 en tu navegador para verla. La página se recargará automáticamente si haces cambios en el código e inicia json-server para simular una base de datos en otro terminal.
```bash
yarn json-server --watch ./src/db/db.json
yarn dev
```

- Compila la aplicación para producción en la carpeta dist. Esto optimiza y minifica el código para un rendimiento óptimo.
```bash
yarn build
```

## Tecnologías clave utilizadas:
- React: Una librería JavaScript para construir interfaces de usuario.
- Redux Toolkit: Una librería para gestionar eficientemente el estado de las aplicaciones.
- Material-UI: Un conjunto de componentes de interfaz de usuario para React.
- Vite: Un entorno de desarrollo rápido con sustitución de módulos en caliente.
- TypeScript: Un superconjunto de JavaScript que proporciona tipado estático.
