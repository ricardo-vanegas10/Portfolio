
document.addEventListener('DOMContentLoaded', function () {
  // Selecciona los elementos del DOM
  var espanolLink = document.querySelector('#espanolLink');
  var inglesLink = document.querySelector('#inglesLink');

  // Agrega eventos de clic a los enlaces
  espanolLink.addEventListener('click', function (event) {
    event.preventDefault();
    cambiarIdioma('espanol');
  });

  inglesLink.addEventListener('click', function (event) {
    event.preventDefault();
    cambiarIdioma('ingles');
  });

  function cambiarIdioma(idioma) {
    // Implementa aquí la lógica específica para cambiar el idioma de la aplicación
    // Se carga archivos de idioma, cambiar clases, etc.
    // Aquí solo se muestra un mensaje de ejemplo.
    var toggle = document.querySelector("#toggle");
    var introduceElement = document.querySelector('.introduce');
    var infoElement = document.querySelector(".info");
    var asideElement = document.querySelector(".aside");
    var portfolioElement = document.querySelector(".portfolio")
    if (idioma === 'espanol') {
      alert('Idioma cambiado a Español');
      toggle.innerHTML = `Idioma`;
      espanolLink.innerHTML = `Español`;
      inglesLink.innerHTML = "Inglés";
      introduceElement.innerHTML = `
                <h1>Ricardo Vanegas</h1>
                <p class="profession"><strong>Ingeniero civil - Desarrollador Web</strong></p>
                <p>Ingeniero civil con experiencia en principios y normas de ingeniería, habilidades en cálculos, interpretación de planos y supervisión de obra. Además, tengo sólidos conocimientos como desarrollador web para la creación de sitios webs dinamicos utilizando tecnologías como HTML5, CSS, Javascript, PHP y React js. También tengo experiencia con WordPress. Soy autodidacta y puedo aprender nuevas tecnologías por mi cuenta. Destaco por mi liderazgo y resolución de problemas.</p>
            `;
      infoElement.innerHTML = `<h3 class="my-4 bg-dark text-white text-center contacto">Contacto</h3>
            <ul>
            <li><span class="material-symbols-outlined">
                    phone_iphone
                </span><strong>+57 300 762 5268</strong></li>
            <li><span class="material-symbols-outlined">
                    mail
                </span><strong>rick1095@hotmail.com</strong></li>
            <li><span class="material-symbols-outlined">
                    alternate_email
                </span><strong>ricky109529@gmail.com</strong></li>
        </ul>
        <h3 class="my-4 bg-dark text-white text-center skills">Habilidades</h3>
        <ul class="d-flex gap-2 skills">
        <li>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5" width="40" height="40" />
            </a>
        </li>
        <li>
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3" width="40" height="40" />
            </a>
        </li>
        <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
                rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript" width="40" height="40" />
            </a>
        </li>
        <li>
            <a href="https://www.php.net" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt="php" width="40" height="40" />
            </a>
        </li>
        <li>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql" width="40" height="40" />
            </a>
        </li>
        <li>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react" width="40" height="40" />
            </a>
        </li>
        <li>
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="bootstrap" width="40" height="40" />
            </a>
        </li>
        <li>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind"
                    width="40" height="40" /> </a>
        </li>
        <li>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img
                    src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40"
                    height="40" /></a>
        </li>
    </ul>
        <h3 class="my-4 bg-dark text-white text-center education">Educación</h3>
        <ul class="studies degree">
            <li>
                <h4>Ingeniero Civil</h4>
                <p>Universidad de Pamplona</p>
            </li>
        </ul>

        <h3 class="my-4 bg-dark text-white text-center">Cursos</h3>
        <ul class="studies course">
            <li>
                <h4>Desarrollador Web</h4>
                <p>Academia de desarrollo de software</p>
            </li>
        </ul>

        <h3 class="my-4 bg-dark text-white text-center social">Redes Sociales</h3>
        <ul class="studies d-flex justify-content-center gap-2">
        <li><a href="https://www.facebook.com/rick1095/" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    width="40" height="40" />
            </a></li>
        <li><a href="https://www.instagram.com/ricardo.vanegas10/" target="_blank"><img
                    src="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-85ckvxzj.png"
                    width="40" height="40"></a></li>
        <li><a href="https://www.instagram.com/ricardo.vanegas10/" target="_blank"></a></li>
        <li><a href="https://www.linkedin.com/in/ricardo-vanegas-6892a71ab/" target="_blank"><img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    width="40" height="40" /></a>
        </li>
        <li><a href="https://github.com/ricardo-vanegas10" target="_blank"><img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    width="40" height="40" /></a></li>
    </ul>
`;
      asideElement.innerHTML = `<h3 class="my-4 text-center">Experiencia laboral</h3>
     /* <h5>Desarrollador Front-End</h5>
      <p>Syntactic Academia</p>
      <p>Diciembre 2023</p>
      <ul>
          <li>Desarrollo Front-end</li>
          <li>Desarrollo de piezas digitales, mailings, y landings.</li>
          <li>Maquetación y desarrollo de piezas mailings.</li>
      </ul>
      <br> */
                <h5>Auxiliar de ingeniero civil</h5>
                <p>Meg Obras SAS</p>
                <p>Enero 2022 - Julio 2022</p>
                <ul>
                    <li>Realizar las tareas técnicas relacionadas con la ejecución de obras de ingeniería civil con los
                        informes al respecto.</li>
                    <li>Representar a los arquitectos e ingenieros civiles en las obras para asegurarse de que se
                        cumplen las especificaciones del proyecto.</li>
                    <li>Aplicar conocimientos técnicos de los principios y prácticas de la ingeniería civil para
                        identificar y resolver problemas que surjan en el proyecto.</li>
                </ul>
                <br>
              /*  <h5>Auxiliar de ingeniero civil</h5>
                <p>B3D Asociados Consultores y Construcciones S.A.S.</p>
                <p>Enero 2021 - Diciembre 2021</p>
                <ul>
                    <li>Responder por la ejecución y manejo de la obra a su cargo, en los aspectos administrativos.</li>
                    <li>Revisar las especificaciones técnicas establecidas y la normativa legal correspondiente,
                        efectuando los respectivos controles de calidad.</li>
                    <li>Estudiar y conocer a cabalidad los planos y especificaciones de la obra y solicitar autorización
                        para realizar modificaciones al proyecto cuando este lo requiera.</li>
                </ul>
                <br> */
                <h5>Auxiliar de ingeniero civil</h5>
                <p>Construcciones Piedrahita</p>
                <p>Junio 2017 - Agosto 2017</p>
                <ul>
                    <li>Recopilar información técnica asociada al proyecto, para promover de insumos a la etapa de
                        diseño detallado del proyecto de infraestructura en el ár ea de ingeniería civil.</li>
                    <li>Proponer soluciones técnicas a las necesidades planteadas en los requerimientos del proyecto.
                    </li>
                    <li>Asistir en la preparación de estudios, análisis e informes técnicos o administrativos de las
                        diferentes actividades del proyecto.</li>
                    <li>Velar por el buen funcionamiento y uso de las instalaciones, equipos e instrumentos que se
                        utiliza en la contrucción.</li>
                </ul>`;
      portfolioElement.innerHTML = `    <h2 class="text-white text-center">Portafolio</h2>
                <p class="text-white text-center"><strong>Un vistazo a mis trabajos más relevantes</strong></p>
    
                <div id="demo" class="carousel slide" data-bs-ride="carousel">
    
                    <!-- Indicators/dots -->
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                    </div>
                    
                    <!-- The slideshow/carousel -->
                    <div class="carousel-inner">
                    <div class="carousel-item active advice">
                        <img src="./img/advice-app.png" alt="Advice app" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                            <h3><a href="https://ricardo-vanegas10.github.io/advice-generator-app-main/"
                                    target="_blank">Advice generator app main</a></h3>
                            <p><strong>Una aplicación de consejos API que utiliza Tailwind CSS</strong></p>
                        </div>
                    </div>
                    <div class="carousel-item ageapp">
                        <img src="./img/age-app.png" alt="Age app" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                            <h3 class="text-dark"><a href="https://ricardo-vanegas10.github.io/age-calculador-app/"
                                    target="_blank">Age calculator app</a></h3>
                            <p class="text-dark"><strong>Una calculadora básica que calcula la edad en días, meses y
                                    años</strong></p>
                        </div>
                    </div>
                    <div class="carousel-item hivley">
                        <img src="./img/hivley.png" alt="Hivley" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                            <h3><a href="https://ricardo-vanegas10.github.io/Hivley/" target="_blank">Hivley</a></h3>
                            <p><strong>Maquetación básica de HTML, CSS y Javascript usando Tailwind</strong></p>
                        </div>
                    </div>
                    <div class="carousel-item homepage">
                        <img src="./img/homepage-main.png" alt="Homepage main" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                            <h3 class="text-dark"><a href="https://ricardo-vanegas10.github.io/new-homepage-main/"
                                    target="_blank">Página de inicio principal</a></h3>
                            <p class="text-dark"><strong>Maquetación de página responsiva básica usando Bootstrap</strong></p>
                        </div>
                    </div>
                    <div class="carousel-item metaverse">
                        <img src="./img/metaverse.png" alt="Metaverse" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                            <h3><a href="https://ricardo-vanegas10.github.io/Metaverse/" target="_blank">Metaverso</a>
                            </h3>
                            <p><strong>Maquetación básica creado con HTML, CSS y Bootstrap</strong></p>
                        </div>
                    </div>
                    <div class="carousel-item netflix">
                        <img src="./img/netflix.png" alt="Netflix" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                            <h3><a href="https://ricardo-vanegas10.github.io/Netflix/" target="_blank">Netflix</a></h3>
                            <p class="text-white"><strong>Maquetación básica usando HTML, CSS, Javascript y Tailwind</strong></p>
                        </div>
                    </div>
                </div>

                    
                    <!-- Left and right controls/icons -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                      <span class="carousel-control-next-icon"></span>
                    </button>
                  </div>
                  `;

    } else if (idioma === 'ingles') {
      alert('Language changed to English');
      toggle.innerHTML = `Languaje`;
      espanolLink.innerHTML = `Spanish`;
      inglesLink.innerHTML = "English";
      introduceElement.innerHTML = `
                    <h1>Ricardo Vanegas</h1>
                    <p class="profession"><strong>Civil Engineer - Web Developer</strong></p>
                    <p>Civil engineer with experience in engineering principles and standards, skills in calculations, interpretation of plans and construction supervision. In addition, I have solid knowledge as a web developer for creating dynamic websites using technologies such as HTML5, CSS, Javascript, PHP and React js. I also have experience with WordPress. I am self-taught and can learn new technologies on my own. I stand out for my leadership and problem solving.</p>
                `;
      infoElement.innerHTML = `<h3 class="my-4 bg-dark text-white text-center contacto">Contact</h3>
      <ul class="d-flex gap-2 skills">
      <li>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5" width="40" height="40" />
          </a>
      </li>
      <li>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3" width="40" height="40" />
          </a>
      </li>
      <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
              rel="noreferrer">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript" width="40" height="40" />
          </a>
      </li>
      <li>
          <a href="https://www.php.net" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                  alt="php" width="40" height="40" />
          </a>
      </li>
      <li>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql" width="40" height="40" />
          </a>
      </li>
      <li>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react" width="40" height="40" />
          </a>
      </li>
      <li>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap" width="40" height="40" />
          </a>
      </li>
      <li>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind"
                  width="40" height="40" /> </a>
      </li>
      <li>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40"
                  height="40" /></a>
      </li>
  </ul>
            <h3 class="my-4 bg-dark text-white text-center education">Education</h3>
            <ul class="studies degree">
                <li>
                    <h4>Civil engineer</h4>
                    <p>University of Pamplona</p>
                </li>
            </ul>

            <h3 class="my-4 bg-dark text-white text-center">Courses</h3>
            <ul class="studies course">
                <li>
                    <h4>Web developer</h4>
                    <p>Software Development Academy</p>
                </li>
            </ul>

            <h3 class="my-4 bg-dark text-white text-center social">Social networks</h3>
            <ul class="studies d-flex justify-content-center gap-2">
            <li><a href="https://www.facebook.com/rick1095/" target="_blank">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                        width="40" height="40" />
                </a></li>
            <li><a href="https://www.instagram.com/ricardo.vanegas10/" target="_blank"><img
                        src="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-85ckvxzj.png"
                        width="40" height="40"></a></li>
            <li><a href="https://www.instagram.com/ricardo.vanegas10/" target="_blank"></a></li>
            <li><a href="https://www.linkedin.com/in/ricardo-vanegas-6892a71ab/" target="_blank"><img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        width="40" height="40" /></a>
            </li>
            <li><a href="https://github.com/ricardo-vanegas10" target="_blank"><img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        width="40" height="40" /></a></li>
        </ul>
`;
      asideElement.innerHTML = `<h3 class="my-4 text-center">Work experience</h3>
      <h5>Front-End Developer</h5>
      <p>Syntactic Academy</p>
      <p>December 2023</p>
      <ul>
        /*  <li>Front-end development</li>
          <li>Development of digital pieces, mailings, and landings.</li>
          <li>Layout and development of mailing pieces.</li>
      </ul>
      <br> */
                <h5>Civil engineer assistant</h5>
                <p>Meg Obras SAS</p>
                <p>January 2022 - July 2022</p>
                <ul>
                    <li>Carry out technical tasks related to the execution of civil engineering works with related reports.</li>
                    <li>Represent architects and civil engineers on construction sites to ensure project specifications are met.</li>
                    <li>Apply technical knowledge of civil engineering principles and practices to identify and resolve problems that arise in the project.</li>
                </ul>
                <br>
              /*  <h5>Civil engineer assistant</h5>
                <p>B3D Asociados Consultores y Construcciones S.A.S.</p>
                <p>January 2021 - December 2021</p>
                <ul>
                    <li>Responsible for the execution and management of the work in charge, in administrative aspects.</li>
                    <li>Review the established technical specifications and the corresponding legal regulations, carrying out the respective quality controls.</li>
                    <li>Study and fully understand the plans and specifications of the work and request authorization to make modifications to the project when required.</li>
                </ul>
                <br> */
                <h5>Civil engineer assistant</h5>
                <p>Piedrahita Constructions</p>
                <p>June 2017 - August 2017</p>
                <ul>
                    <li>Compile technical information associated with the project, to promote input to the detailed design stage of the infrastructure project in the area of civil engineering.</li>
                    <li>Propose technical solutions to the needs raised in the project requirements.</li>
                    <li>Assist in the preparation of studies, analyzes and technical or administrative reports of the different project activities.</li>
                    <li>Ensure the proper functioning and use of the facilities, equipment and instruments used in construction.</li>
                </ul>`;
      portfolioElement.innerHTML = `    <h2 class="text-white text-center">Portfolio</h2>
                <p class="text-white text-center"><strong>A look at my most relevant works</strong></p>
    
                <div id="demo" class="carousel slide" data-bs-ride="carousel">
    
                    <!-- Indicators/dots -->
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                    </div>
                    
                    <!-- The slideshow/carousel -->
                    <div class="carousel-inner">
                      <div class="carousel-item active advice">
                        <img src="./img/advice-app.png" alt="Advice app" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                          <h3><a href="https://ricardo-vanegas10.github.io/advice-generator-app-main/" target="_blank">Advice generator app main</a></h3>
                          <p><strong>An API advices App that uses Tailwind CSS</strong></p>
                        </div>
                      </div>
                      <div class="carousel-item ageapp">
                        <img src="./img/age-app.png" alt="Age app" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                          <h3 class="text-dark"><a href="https://ricardo-vanegas10.github.io/age-calculador-app/" target="_blank">Age calculator app</a></h3>
                          <p class="text-dark"><strong>A basic calculator that calculates age in days, months and years</strong></p>
                        </div> 
                      </div>
                      <div class="carousel-item hivley">
                        <img src="./img/hivley.png" alt="Hivley" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                          <h3><a href="https://ricardo-vanegas10.github.io/Hivley/" target="_blank">Hivley</a></h3>
                          <p><strong>Basic HTML, CSS and Javascript layout using Tailwind</strong></p>
                        </div>  
                      </div>
                      <div class="carousel-item homepage">
                        <img src="./img/homepage-main.png" alt="Homepage main" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                          <h3 class="text-dark"><a href="https://ricardo-vanegas10.github.io/new-homepage-main/" target="_blank">Homepage main</a></h3>
                          <p class="text-dark"><strong>Basic Responsive Page Layout Using Bootstrap</strong></p>
                        </div>  
                      </div>
                      <div class="carousel-item metaverse">
                        <img src="./img/metaverse.png" alt="Metaverse" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                          <h3><a href="https://ricardo-vanegas10.github.io/Metaverse/" target="_blank">Metaverse</a></h3>
                          <p><strong>Basic layout created with HTML, CSS and Bootstrap</strong></p>
                        </div>  
                      </div>
                      <div class="carousel-item netflix">
                        <img src="./img/netflix.png" alt="Netflix" class="d-block" style="width:100%">
                        <div class="carousel-caption">
                          <h3><a href="https://ricardo-vanegas10.github.io/Netflix/" target="_blank">Netflix</a></h3>
                          <p class="text-white"><strong>Basic layout using HTML, CSS, Javascript and Tailwind</strong></p>
                        </div>  
                      </div>
                    </div>
                    
                    <!-- Left and right controls/icons -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                      <span class="carousel-control-next-icon"></span>
                    </button>
                  </div>
                  `;
    }
  }
});

