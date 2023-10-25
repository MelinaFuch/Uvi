# Para correr el front de forma local

Simplemente desde la carpeta 'client' abrir una terminal y correr el comando 'npm install' para instalar todas las dependencias, y luego 'npm run dev' para correr la aplicación de manera local (en la misma terminal se indica la url donde se aloja la aplicación)

# Extras
    - Configuración de Paypal: Se hace la solicitud post al back y se le envía el precio ingresado en el input por el cliente (que sería el monto a donar). De ahí se redirige al cliente a la página de Paypal, donde realizara el pago a la cuenta indicada desde el back (leer el README.md del back donde explico paso a paso cómo configurarlo). Una vez realizado el pago, se envia al cliente a la página /thanks (puede modificarla a voluntad) y luego de 3 segundos se redirige al usuario a la página inicial.