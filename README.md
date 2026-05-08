# Welcome to your Expo app 👋

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. To test app on the phone:

   Install Expo Go app from App Store or Play Store
   
   If the phone and the computer are on the same network:

   ```bash
   npx expo start
   ```

   Then scan the QR code.

   If on different network:

   Create an account at https://ngrok.com/

   ```bash
   ngrok config add-authtoken <YOUR_TOKEN>
   ```

   ```bash
   npx expo start --tunnel
   ```
