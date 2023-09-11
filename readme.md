<header align="center">
  
  <h1 align="center">Turnero Dino - Usuario cliente</h1>
  
  <p align="center">Vista de fila digital para clientes y puestos con ofertas dinámicas</p>
 
</header>

<section align="center">

[Documentación](https://github.com/Cristian-Sosa/FilaDigital)
·
[Ver Portal de empleo](http://clubmami.com.ar/miturno/turnero/AV/carniceria)
·
[Reportar Bug](https://github.com/Cristian-Sosa/FilaDigital/issues)
·
[Solicitar Feature](https://github.com/Cristian-Sosa/FilaDigital/issues)

</section>

<!-- TABLE OF CONTENTS -->
<details closed>
  <summary>Indice de contenidos</summary>
  <ul>
    <li>
      <a href="#about-the-project">Sobre el Proyecto</a>
      <ul>
        <li><a href="#capturas">Capturas</a></li>
        <li><a href="#stack">Stack & Dependencias</a></li>
      </ul>
    </li>
    <li><a href="#install">Como iniciar</a></li>
    <li><a href="#contact">Contactos</a></li>
  </ul>
</details>

<br />
<br />

<section id="about-the-project">
  <h2>💼 Sobre el Proyecto</h2>

FilaDigital es una página web que permite al usuario `escanear con QR` el puesto. Permite al usuario cliente final:

- Cargar su turno físico (previamente retirado en el puesto)
- Ver turno actual, recibe una alerta 5 turnos antes para acercarse al puesto
- Ver ofertas del puesto actual

_Esta web se complementa con una página que tiene cada puesto._

<article id="capturas">

  <h3>📸 Capturas vista de cliente</h3>

![Desktop App version](./docs/image-1.png "Desktop App version - Login")

<br />

![Desktop App version](./docs/image-2.png "Desktop App version - Turnero - Alerta 1")

<br />
<br />
<br />

<h3>📸 Capturas vista de BackOffice</h3>

<br />

![Desktop App version](./docs/puesto.png "Desktop App version - Turnero - Alerta 1")

<br />

![Desktop App version](./docs/marketing.png "Desktop App version - Turnero - Alerta 1")

</article>
  
<br />
<br />
  
<article id="stack">
  
  <h3>👾 Stack & Dependencias</h3>

| **Nombre**                    | **Versión** |
| ----------------------------- | ----------- |
|                               |             |
| nodeJs                        | 18.16.0     |
| npm                           | 9.6.6       |
|                               |             |
| @angular-devkit/build-angular | 16.0.3      |
| @angular-devkit/core          | 16.0.3      |
| @angular-devkit/schematics    | 16.0.6      |
| @angular/cli                  | 16.0.6      |
| @schematics/angular           | 16.0.6      |
| rxjs                          | 7.8.1       |
| typescript                    | 5.0.4       |
|                               |             |
| canvasJs                      | latests     |

</article>
  
<br />

</section>

<section id="install">
  <h2>💻 Como iniciar</h2>

<article>
  
  *Para el proyecto es necesario tener instalado NodeJs & npm*

  <pre>
  <code>
   $ git clone https://github.com/Cristian-Sosa/FilaDigital.git // Clone the repo
   
   $ git checkout main // rama main del front
   
   $ npm i // Instalación de dependencias
  </code>
  </pre>

  <br />
  
  El proyecto está estructurado de la siguiente forma:  
  
  <pre>
    + src
        + app
            + core
                + components
                + modules
                + pages
            + shared
                + components
                + models
                + services  
  </pre>
  
En la carpeta `core/pages` se vaun componente general que es exportado en cada módulo, el resto de componentes son llamados desde `core/components` o importados desde su módulo compartido que se encuentra en `shared`

En la carpeta `shared/models` se van a encontrar las interfaces, las cuales están modularizadas para las respuestas de servicios y/o variables.

En la carpeta `shared/services` se van a encontrar servicios con responsabilidades divididas para cada acción.

  <br />
  <br />
  <br />

Cómandos para desarrollo local

  <pre>
  <code>
  // Para cambiar las variables de entorno ingresar a 'src/environments'

   $ ng serve --configuration production // desarrollo local con API de producción

   $ ng serve // desarrollo local con API de testing
  </code>
  </pre>
  
</article>
  
</section>

<br />
<br />

<section id="contact">
  <h2>🤝🏽 Contactos</h2>

<article>
  
  Participantes del proyecto:
  
  - Hugo Ragno (Product Owner)
  - Marcelo Urriche (Scrum Master)
  - Marcos Castillo (Desarrollador)
  - Matias Molina (Desarrollador)
  - Cristian Sosa (Desarrollador)

</article>
  
</section>
