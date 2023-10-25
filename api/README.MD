# Configuración para el back
Para instalar dependencias: npm install.
El port utilizado localmente es el 3000.
Para utilizar el back de manera local se utiliza el comando: 'npm run dev'.

# Configuración para integrar Paypal real (el que está actualmente es de prueba)
Crear un archivo nombrado ".env" y copiar y pegar los nombres de las variables de entorno definidas en el archivo .env.js.
Y para obtener sus valores deberá ingresar a la página https://developer.paypal.com/home donde deberá ingresar sesión con la cuenta con la que va a cobrar las donaciones para la página.

Una vez que inicie sesión deberá pasar de modo 'SandBox' (prueba) a 'Live' y seguir los pasos que le indica la misma página para configurar su cuenta como una cuenta de negocios.

Luego deberá dirigirse al apartado Apps&Credentials (https://developer.paypal.com/dashboard/applications/sandbox), donde deberá presionar el botón 'Create App', y una vez creada su 'app' se le dará un CLIENT_ID y una clave SECRET. Esa información deberá colocarla, según corresponda, en las variables declaradas anteriormente en el archivo que creó ".env".

Y en la variable PAYPAL_API deberá colocar esta url https://api-m.paypal.com para ejecutar las peticiones HTTP al Paypal real (ya configurado todo lo anterior mencionado).

Si quiere ejecutarlo desde un entorno de prueba deberá seguir todos los pasos anteriores desde el modo 'Sandbox' de Paypal y en la variable PAYPAL_API deberá colocar esta url https://api-m.sandbox.paypal.com .

# .env
Además de las variables de Paypal, debe poner los valores del host del front (HOST_FRONT) (ya sea la url de la página en un entorno local o de un deploy realizado), e igualmente para el host del back (HOST_BACK).