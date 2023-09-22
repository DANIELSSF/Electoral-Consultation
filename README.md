# Electoral Consultation

This is an electoral consultation project that leverages the latest web technologies to create a modern and efficient user experience.

## Prerequisites

Before you can start working with this project, you need to have Yarn installed on your system.

### How to Install Yarn

Yarn is a package manager for JavaScript and Node.js projects. To install Yarn, follow these steps:

1. **For Windows**: Visit the [Yarn installation page](https://classic.yarnpkg.com/en/docs/install/#windows-stable) and download the installer for Windows. Run the installer and follow the installation instructions.
  
   ```bash
   npm install -g yarn
   yarn --version
   ```

## Installation

To get started with this project, you should first clone it and install the necessary dependencies.

```bash
git clone https://github.com/DANIELSSF/Electoral-Consultation.git
cd Electoral-Consultation
yarn
```

Available Scripts
In the project directory, you can run the following scripts:

- Starts the application in development mode. Open http://localhost:5173 in your browser to see it. The page will automatically reload if you make code changes and start json-server to simulate a database in other terminal.
```bash
yarn json-server --watch ./src/db/db.json
yarn dev
```

- Compiles the application for production into the dist folder. This optimizes and minifies the code for optimal performance.
```bash
yarn build
```

## Key Technologies Used:
- React: A JavaScript library for building user interfaces.
- Redux Toolkit: A library for efficiently managing application state.
- Material-UI: A set of UI components for React.
- Vite: A fast development environment with hot module replacement.
- TypeScript: A superset of JavaScript that provides static typing.

## Contributing
If you wish to contribute to this project, please make sure to follow the contribution guidelines. You can find more information in the CONTRIBUTING.md file.

## License
This project is licensed under the MIT License. See the LICENSE.md file for more details.

This README.md file was automatically generated based on information from the package.json file. Make sure to keep it updated as the project evolves.
