
# 🐱 Cat App – Ionic

Cat App es una aplicación desarrollada con Ionic Framework que consume The Cat API para mostrar un listado de razas de gatos con información detallada e imágenes. La aplicación puede ejecutarse como app móvil y web, ofreciendo una experiencia fluida y moderna.

## 🚀 Características

- 📋 Listado de razas de gatos
- 🔍 Vista de detalle por raza
- 🖼️ Imágenes dinámicas obtenidas desde The Cat API
- 🌍 Información completa: origen, temperamento, descripción y más
- 📱 Diseño responsive compatible con Android, iOS y Web
- ⚡ Navegación fluida usando Ionic Router

## 🛠️ Tecnologías

- Ionic Framework
- Angular
- TypeScript
- HTML5 & SCSS
- HTTP Client para consumo de APIs REST
- Ionic Components (IonList, IonCard, IonImg, etc.)

## 🔗 API Utilizada

- The Cat API  
  https://developers.thecatapi.com

## 📦 Instalación

### Requisitos previos

- Node.js >= 22
- npm o yarn
- Ionic CLI



## ▶️ Ejecutar la aplicación
### Para navegadores
```bash
ionic serve

```
### Plataformas Nativas
```bash
ionic cap run android
ionic cap run ios

```

## 🔐 Configuración de la API

// src/environments/environment.ts
```bash
export const environment = {
  apiUrl: 'https://api.thecatapi.com/v1',
  apiKey: 'YOUR_API_KEY'
};

```

## 🔐 Estructura del proyecto
```bash
src/
├── app/
│   ├── components/
│   │   ├── cats-img.components.ts
│   ├── pages/
│   │   ├── cats/
│   │   └── cat-detail/
│   ├── services/
│   │   └── cat.service.ts
│   └── models/
├── environments/
├── assets/
└── ...


```



## License

[MIT](https://choosealicense.com/licenses/mit/)

