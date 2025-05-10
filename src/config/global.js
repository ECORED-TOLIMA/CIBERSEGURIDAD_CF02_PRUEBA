export default {
  global: {
    Name: 'Amenazas digitales, ingeniería social y ética en ciberseguridad',
    Description:
      'Ese componente formativo establece las bases para comprender las amenazas digitales, la ingeniería social y la ética en ciberseguridad. Aborda tipos de ataques, vulnerabilidades, estrategias de manipulación, medidas preventivas y normativas éticas, proporcionando herramientas clave para la gestión de incidentes y la protección de la información en entornos digitales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ataques y amenazas informáticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de ataques cibernéticos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Impacto de las amenazas en sistemas y redes',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Vulnerabilidades en ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de vulnerabilidades',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos de explotación de vulnerabilidades',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ingeniería social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas de ingeniería social',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ejemplos de ataques basados en manipulación psicológica',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de prevención',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Medidas de seguridad y buenas prácticas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Herramientas de protección en ciberseguridad',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ética en ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Principios éticos en la seguridad de la información',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Legislación y normativas éticas aplicadas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Reportes y gestión de incidentes en ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Mecanismos de denuncia y respuesta a incidentes',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Entidades encargadas de la gestión de reportes',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Ataques y amenazas informáticas',
      referencia:
        'Correa, C. A. P., & Díaz, H. P. (2007). Las amenazas informáticas: Peligro latente para las organizaciones actuales. Revista Gerencia Tecnológica Informática, 6(16), 85–97.',
      tipo: 'Revista',
      link: 'https://core.ac.uk/download/pdf/230227206.pdf',
    },
    {
      tema: '1. Ataques y amenazas informáticas',
      referencia:
        'ESET Latinoamérica. (2023). Tendencias en ciberseguridad para el 2024. ',
      tipo: 'Articulo',
      link:
        'https://web-assets.esetstatic.com/wls/es/articulos/reportes/cybersecurity-trends-2024-es.pdf',
    },
    {
      tema: '3. Ingeniería social',
      referencia:
        'Pérez, J. (2023). Ataques basados en ingeniería social en Colombia: buenas prácticas y recomendaciones. Revista Tecnología en Marcha, 24(49), 120-130. ',
      tipo: 'Articulo',
      link: 'https://www.scielo.sa.cr/pdf/is/v24n49/2215-2458-is-24-49-120.pdf',
    },
    {
      tema: '5. Ética en ciberseguridad',
      referencia:
        'Ecosistema de Recursos Educativos Digitales. (2022, abril 27). ¿En qué se diferencian los hackers éticos de los hackers maliciosos? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=b4X4Rh4eNyU',
    },
  ],
  glosario: [
    {
      termino: 'Ataque de <em>phishing</em>',
      significado:
        'técnica de ingeniería social que busca engañar a los usuarios para que revelen información confidencial, como credenciales de acceso o datos financieros, a través de correos electrónicos fraudulentos o sitios <em>web</em> falsos.',
    },
    {
      termino: 'Ataque de <em>ransomware</em>:',
      significado:
        'tipo de amenaza informática en la que un <em>malware</em> cifra los archivos del usuario o sistema y exige un rescate para su liberación.',
    },
    {
      termino: 'Cifrado',
      significado:
        'técnica de seguridad que convierte información en un formato ilegible para protegerla de accesos no autorizados. Solo puede ser descifrada con una clave específica.',
    },
    {
      termino: 'Código malicioso (<em>malware</em>)',
      significado:
        'programas diseñados para dañar, alterar o acceder de forma no autorizada a sistemas informáticos, incluyendo virus, troyanos, gusanos y <em>spyware</em>.',
    },
    {
      termino: 'Doble autenticación',
      significado:
        'método de seguridad que requiere dos formas de verificación antes de conceder acceso a un sistema, como una contraseña y un código enviado al móvil.',
    },
    {
      termino: '<em>Firewall</em>',
      significado:
        'sistema de seguridad que controla el tráfico de red entrante y saliente según reglas predefinidas, protegiendo los dispositivos contra accesos no autorizados.',
    },
    {
      termino: 'Gusano',
      significado:
        'tipo de <em>malware</em> que se replica automáticamente en un sistema sin necesidad de intervención humana, propagándose a través de redes y causando daños.',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        '<em>software</em> malicioso diseñado para infiltrarse, dañar o comprometer la seguridad de un sistema informático sin el consentimiento del usuario.',
    },
    {
      termino: 'Privacidad digital',
      significado:
        'derecho y práctica de proteger la información personal y los datos de los usuarios en entornos digitales, evitando el acceso no autorizado y el uso indebido de la información.',
    },
    {
      termino: 'Puerta trasera',
      significado:
        'método de acceso oculto en un sistema que permite el control remoto sin el conocimiento del usuario, a menudo explotado por atacantes.',
    },
    {
      termino: 'Riesgo informático',
      significado:
        'probabilidad de que una vulnerabilidad sea explotada por una amenaza, causando daño o afectación a un sistema, red o información.',
    },
    {
      termino: '<em>Spyware</em>',
      significado:
        'tipo de <em>software</em> malicioso que recopila información del usuario sin su consentimiento y la transmite a un tercero.',
    },
    {
      termino: 'VPN (Red Privada Virtual)',
      significado:
        'tecnología que crea una conexión segura y cifrada entre un dispositivo y una red, protegiendo la privacidad y evitando la interceptación de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arango Gómez, O. (s.f.). El ABC de la seguridad informática: Guía práctica para entender la seguridad digital. Instituto Tecnológico Metropolitano.',
      link:
        'https://repositorio.itm.edu.co/bitstream/handle/20.500.12622/5901/El%20ABC%20de%20la%20seguridad%20inform%C3%A1tica%20gu%C3%ADa%20pr%C3%A1ctica%20para%20entender%20la%20seguridad%20digital.pdf',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales. (2022). Ataques y vulnerabilidades [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=au8EXjh-0jw',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales. (2022). La ingeniería social [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=5FeJVcZerS0',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales. (2022). Metodologías del <em>Hacking</em> ético [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=r3S8tscj-bg',
    },
    {
      referencia:
        'Guaña-Moya, J. (2023). La importancia de la seguridad informática en la educación digital: Retos y soluciones. RECIMUNDO, 7(1), 609–616.',
      link: 'https://doi.org/10.26820/recimundo/7.(1).enero.2023.609-616',
    },
    {
      referencia:
        'Instituto Valenciano de Ciberseguridad y Telemática. (2021). Ciberseguridad: El reto del siglo XXI.',
      link:
        'https://invaci.es/wp-content/uploads/2021/08/CIBERSEGURIDAD-EL-RETO-DEL-SIGLO-XXI.pdf',
    },
    {
      referencia:
        'Paya-Santos, C., & Luque-Juárez, J. M. (2021). El sistema de inteligencia criminal ante las nuevas amenazas y oportunidades del ciberespacio. Revista Científica General José María Córdova, 19(36), 1121–1136.',
      link: 'https://doi.org/10.21830/19006586.855',
    },
    {
      referencia:
        'Tejena-Macías, M. A. (2018). Análisis de riesgos en seguridad de la información. Polo del Conocimiento, 3(4), 230.',
      link: 'https://doi.org/10.23857/pc.v3i4.809',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier Eduardo Díaz Machuca',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
