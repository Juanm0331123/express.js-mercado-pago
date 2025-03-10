# Express.js con Mercado Pago

Este proyecto es una integración de Express.js con la API de Mercado Pago para crear órdenes de pago y recibir notificaciones de pagos.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- [ngrok](https://ngrok.com/) para exponer tu servidor local a Internet

## Instalación

1. Clona este repositorio:

   ```sh
   git clone https://github.com/tu-usuario/express.js-mercado-pago.git
   ```

2. Navega al directorio del proyecto:

   ```sh
   cd express.js-mercado-pago
   ```

3. Instala las dependencias:

   ```sh
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y agrega tus credenciales de Mercado Pago:

   ```env
   PORT=3000
   MERCADO_PAGO_ACCESS_TOKEN=tu_access_token
   MERCADO_PAGO_PUBLIC_KEY=tu_public_key
   ```

## Uso

### Iniciar el servidor

Para iniciar el servidor en modo desarrollo, ejecuta:

```sh
npm run dev
```

El servidor se iniciará en `http://localhost:3000`.

### Exponer el servidor con ngrok

1. Descarga ngrok desde [aquí](https://ngrok.com/download) y descomprímelo en una ubicación de tu elección.

2. Agrega tu authtoken de ngrok (reemplaza `tu_authtoken` con tu token real):

   ```powershell
   .\ngrok.exe config add-authtoken tu_authtoken
   ```

3. Inicia el túnel para exponer tu servidor en el puerto 3000:

   ```powershell
   .\ngrok.exe http http://localhost:3000
   ```

   Esto generará una URL pública que puedes usar para recibir notificaciones de Mercado Pago.

## Endpoints

### Crear una orden

- **URL:** `/create-order`
- **Método:** `POST`
- **Descripción:** Crea una nueva orden de pago en Mercado Pago.
- **Respuesta:** Devuelve los detalles de la orden creada.

### Recibir notificaciones de pago (webhook)

- **URL:** `/webhook`
- **Método:** `POST`
- **Descripción:** Recibe notificaciones de pagos desde Mercado Pago.
- **Respuesta:** Devuelve un estado 204 si la notificación se procesa correctamente.

## Estructura del Proyecto

```plaintext
express.js-mercado-pago/
├── src/
│   ├── config.js
│   ├── controllers/
│   │   └── payment.controller.js
│   ├── public/
│   │   └── index.html
│   ├── routes/
│   │   └── payments.routes.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
