# Tienda de ropa Middo Naito

En nuestra aplicación "Middo Naito" vas a disponer de una amplía selección de prendas con diferentes diseños para cubrir todos tus gustos.

## Audiencia objetivo

Nuestro Ecommerce se dirige hacia un público jóven-adulto y adolescente, presentando una estética simple y relajada para aquellos que buscan adquirir prendas de diseño y calidad, inspiradas en la década de los '90 y  2000.

## Integrantes del Grupo 12

- Barriera, Juan: Soy estudiante de Ingenieria Industrial, y este es mi primer proyecto relacionado a la programacion web fullstack. Apasionado en aprender nuevas cosas constantemente.



- Belay, Santiago: Actualmente tengo 18 años y estudio ingeniería en informática, me interesa mucho la estética y aprender cosas nuevas. Este es mi primer proyecto web.



- Ibarra, Nahuel: Soy estudiante de Ingenieria en Sistemas e iniciado en la programación web fullstack.  Tengo algunos conocimientos relacionados con el desarrollo front-end. Amante del cine, series y videojuegos.


## Inspiraciones


 Empresa    | Razón de selección
----------- | -----------
 Gucci      | Al ser una firma de productos de moda de talla mundial, cuenta con una aplicación web muy completa. Principalemente, nos paració muy atractivo el diseño que presenta al exhibir sus productos. URL: https://www.gucci.com/es/es/
 Enlighted  | Enlighted cuenta con una aplicación web muy sencilla y atractiva en su versión movil. URL: https://www.enlighted.com.ar/
 Bullbenny  | La tienda web de Bullbenny es fácil de usar y presenta los productos de una manera clara y amigable. Ademas cuenta con un carrito de compra sencillo de utilizar. URL: https://www.bullbenny.com.ar/
 Dafiti     | Dispone de una página web con una catalogo muy variado y presenta las categorías productos de dinamica y ordenada. URL: https://www.dafiti.com.ar/
 Kika       | Cuenta con una versión mobile atractiva y dinámica. URL: https://www.kikamayorista.com.ar/
 Equus      | Presenta una distribución de los productos minimalista, con una visualización dinámina del producto. URL: https://www.equus.com.ar/

## Instrucciones para instalación de Middo Naito

1. Clonar el proyecto a través de una consola con el comando:

    > git clone https://github.com/matiasibarra7/grupo_12_middo-naito.git

2. Acceder mediante la consola a la carpeta del proyecto e instalar las dependencias (Debes ubicarte donde se encuentran los archivos '*package.json*' y '*app.js*'), con el comando: 

    > npm install

3. Deberás de disponer de los programas necesarios para correr un servidor en MySQL
<br>
*(En la ruta del proyecto "database/config" existe un ejemplo de como se debe configurar el archivo config, si utilizas un servidor de MySQL con un usuario diferente al default, deberas reemplazar los campos correspondientes en un nuevo archivo 'config.js', caso contrario, solo renombra el archivo 'config.js.example' a 'config.js')*

4. Ejecutar el script '*structure.sql*' encontrado en la carpeta '*DB_scripts*' con alguna herramienta de gestión de bases de datos. Esta acción creará la base de datos del sistema.

5. Ejecutar el script '*data.sql*' encontrado en la carpeta '*DB_scripts*' con alguna herramienta de gestión de bases de datos. Este script insertará datos de ejemplo de usuarios y productos, necesario para probar el sistema con sus funcionalidades.

6. Ejecutar la aplicación mediante una terminal (Previamente ubicado en la carpeta donde se encuentra el archivo *package.json*), utilizando el comando: 
    
    > npm run start

    **Ten en cuenta que debes tener el servidor de MySQL corriendo en el puerto 3306**

7. Acceder mediante tu navegador a la siguiente url: 

    > http://localhost:3000/


    ¡Y listo! Ya podrás navegar por la aplicación web Middo Naito. Puedes probar la navegación y creación de un nuevo usuario o utilizar alguno de los siguientes para probar sus funcionalidades:


    Usuario    | Contraseña | Tipo de Usuario
    -----------| -----------| ----------
    user_default@middo.com | UsuarioMiddo | Normal
    user_admin@middo.com | AdminMiddo | Administrador

<br>

## Seguimiento del proyecto

Tablero del proyecto: [Trello](https://trello.com/b/0zEIPbVy/middonaito-grupo12)