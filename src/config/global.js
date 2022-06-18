export default {
  global: {
    componenteFormativo: 'La interpretación y las técnicas de verificación',
    descripcionCurso:
      'El intérprete como mediador comunicativo y basado en su condición de ser biológico, psicológico y social, requiere poseer competencias que le permitan desempeñar su rol de manera óptima. Es así, como una preocupación destacable en el contexto colombiano es la formación de los intérpretes, con el fin de que estos respondan a las necesidades de los usuarios del servicio de interpretación considerando además que actualmente, este ejercicio laboral ha sido una labor que a lo largo de los últimos 20 años se ha catalogado como la prestación de un servicio de manera empírica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ejercicio de la interpretación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis contrastivo de la lengua',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Equivalencias entre las dos lenguas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Reestructuración del mensaje',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Valoración del proceso de interpretación, de pertinencia y de coherencia del discurso',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El intérprete de apoyo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Perfil del intérprete de apoyo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '2 Funciones y logística',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estrategias, relevos y materiales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas de verificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición y conceptos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estrategias',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Análisis y ajustes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Definición y conceptos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Estrategias de mejoramiento',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Burad, V. (2009). Una teoría interpretativa para el binomio lengua de señas-lengua hablada.',
      link:
        'https://cultura-sorda.org/wp-content/uploads/2015/03/Burad_teoria_interpretativa_binomio_lengua_senas_lengua_hablada_2009.pdf',
    },
    {
      referencia:
        'Decreto 2369 de 1997. Por medio del cual se reglamenta parcialmente la Ley 324 de 1996. Septiembre 22 de 1996. D.O. 43137.',
    },
    {
      referencia:
        'Gauthier, (2016). Ensayando sobre la interpretación en Lengua de Señas Venezolana.',
      link:
        'https://cultura-sorda.org/ensayando-sobre-la-interpretacion-en-lengua-de-senas-venezolana/',
    },
    {
      referencia:
        'INSOR (2018). La enseñanza de la lengua escrita como segunda lengua en la básica primaria. Una experiencia desde el PEBBI.',
      link:
        'http://www.insor.gov.co/home/wp-content/uploads/filebase/cart_lengua_esc.pdf ',
    },
    {
      referencia:
        'INSOR (2019). Caracterización de ciudadanos, usuarios y grupos de interés.',
      link:
        'http://www.insor.gov.co/home/descargar/Caracterizacion_ciudadano_usuarios_grupos_interes_2019.pdf',
    },
    {
      referencia:
        'Lado, R. (1957). Linguistics across cultures: Applied linguistics for language teachers. University of Michigan Press: Ann Arbor.',
    },
    {
      referencia:
        'Ley 324 de 1996. Por la cual se crean algunas normas a favor de la población sorda. Octubre 11 de 1996. D.O. 42899.',
    },
    {
      referencia:
        'Martínez, D. L., Barreto, A. G., Corredor, A., & Zapata, S. A. (2018). Formación en Lengua de Señas Colombiana LSC: Una sistematización de la experiencia de FENASCOL. Libros Universidad Nacional Abierta ya Distancia.',
    },
    {
      referencia:
        'Resolución 10185 de 2018. Por la cual se reglamenta el proceso de reconocimiento de intérpretes oficiales de la Lengua de Señas Colombiana - Español y se deroga la Resolución 5274 de 2017. 26 de junio de 2018. D.O. 50.636 ',
    },
  ],
  glosario: [
    {
      termino: 'Pragmática',
      significado:
        'Parte de la lingüística que se enfoca en el estudio del lenguaje y cómo se relacionan los hablantes y el contexto.',
    },
    {
      termino: 'Segundo intérprete',
      significado: 'Intérprete de apoyo.',
    },
    {
      termino: 'Traslatorio',
      significado: 'De cambiar, mover o transferir de una lengua a otra.',
    },
  ],
  complementario: [
    {
      tema: 'Binomio Lengua de Señas-lengua hablada',
      referencia:
        'Burad, V. (2009). Una teoría interpretativa para el binomio lengua de señas-lengua hablada.',
      tipo: 'Artículo',
      link:
        'https://cultura-sorda.org/wp-content/uploads/2015/03/Burad_teoria_interpretativa_binomio_lengua_senas_lengua_hablada_2009.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila Garcia Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Productora audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luz Mila Pacheco Fuentes',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Adriana María Bustamante',
        cargo: 'Profesional diseño curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Germán Albeiro Saldarriga',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Manuel Alejandro Garzón',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo: 'Instructora',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabián Castaño Pérez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andrés Villamizar Lizcano',
        cargo: 'Diseño web & producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Daniel Polanco Muñoz',
        cargo: 'Validación de diseño',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Álvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Validación de recursos',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
