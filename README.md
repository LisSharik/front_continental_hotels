<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./WhatsApp Image 2024-05-02 at 6.23.35 AM.jpeg" width="400" alt="Nest Logo" /></a>
</p>


# Continental Hotels Frontend

This project is the user interface for the Continental Hotels hotel management system. It is developed with React and uses Tailwind CSS for styling.



## Project Structure

The project is organized as follows:
```markdown

front_continental_hotels/
├── src/
│ ├── components/
│ │ ├── BannerBasic.tsx
│ │ ├── BodyIndex.tsx
│ │ ├── Contact.tsx
│ │ ├── Footer.tsx
│ │ ├── Menu.tsx
│ ├── img/
│ │ ├── habHotel2.jpg
│ │ ├── habHotel3.jpg
│ │ ├── habHotel4.jpg
│ │ ├── img360.jpg
│ ├── App.tsx
│ ├── main.tsx

```

## Prerequisites

Make sure you have the following requirements installed:

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

clone https://github.com/LisSharik/front_continental_hotels.git

## Navigate to the project folder:

cd front_continental_hotels


## Install the dependencies:

npm install

## Diagram UML Class
```markdown

+------------------+
|    App           |
+------------------+
| - components:    |
|    Menu          |
|    BannerBasic   |
|    BodyIndex     |
|    Contact       |
|    Footer        |
+------------------+
| + render()       |
+------------------+
           |
           v
+------------------+
|    Menu          |
+------------------+
| + render()       |
+------------------+

+------------------+
|  BannerBasic     |
+------------------+
| + render()       |
+------------------+

+------------------+
|  BodyIndex       |
+------------------+
| - emeraldKing1   |
| - emeraldKing2   |
| - emeraldKing3   |
| - img360         |
| + render()       |
+------------------+
           |
           v
+------------------+
|   Image          |
+------------------+
| - src: string    |
| - alt: string    |
| + render()       |
+------------------+

+------------------+
|  Contact         |
+------------------+
| - nombre         |
| - correo         |
| - descripcion    |
| + cambiarNombre()|
| + cambiarCorreo()|
| + cambiarDescripcion()|
| + enviarFormulario()  |
| + render()       |
+------------------+

+------------------+
|   Footer         |
+------------------+
| + render()       |
+------------------+
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## README 

This README provides a clear and detailed structure of the project, making it easier for other developers to understand and contribute to it. If you need more details or any other section, let me know.
