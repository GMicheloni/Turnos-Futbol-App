# 🏟️ Gestor de Turnos para Cancha de Fútbol

Este proyecto es una aplicación web diseñada para gestionar los turnos de una cancha de fútbol. Está dividido en dos partes: un **backend** desarrollado con Node.js y TypeScript, y un **frontend** construido con React y Vite.

---

## 🧰 Tecnologías utilizadas

### 🔙 Backend
- **Node.js** + **Express**
- **TypeScript**
- **TypeORM** (u otro ORM si aplica)
- Arquitectura MVC (controladores, servicios, middlewares)
- Validación de datos y rutas protegidas
- Configuración de entorno con `.env`
- Scripts con Nodemon y TypeScript compiler

### 🔜 Frontend
- **React.js**
- **Vite**
- **CSS Modules**
- Componentes reutilizables (`FormularioLogin`, `Navbar`, `ListadoTurnos`, etc.)
- Manejo de estado y validación de formularios

---

## ⚙️ Requisitos

- Node.js y npm instalados
- Base de datos (PostgreSQL )
- Vite 

---

## 🛠️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/GMicheloni/Turnos-Futbol-App.git
cd gestor-turnos-cancha

2. Backend
cd back
npm install
cp .env.sample .env  # Configurar tus variables de entorno
npm start

3. Frontend
cd ../front
npm install
npm start


