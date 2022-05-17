<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/introduccion/img01.png' data-aos="zoom-in-down")
    
    p.mb-5 La interpretación se entiende como un proceso que involucra elementos cognitivos relacionados con el pensamiento y la comprensión, lingüísticos en tanto se ven involucradas dos lenguas, y comunicativo en la medida en que se transmite un mensaje en el que interviene un emisor y un receptor articulando a su vez elementos propios de cada cultura. De acuerdo con el Decreto 2369 de 1997 la función principal del intérprete oficial es traducir al idioma castellano o de éste a la lengua de señas colombiana, las comunicaciones que deben efectuar las personas sordas con personas oyentes, o la traducción a los sistemas especiales de comunicación utilizados por las personas sordociegas (art.5).

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/introduccion/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Por su parte la Resolución 10185 de 2018 define el intérprete oficial de la Lengua de Señas Colombiana - español como aquella persona con amplios conocimientos en la misma, que puede realizar interpretación del español hablado a lengua de señas y viceversa. También son intérpretes para sordos aquellas personas que realicen la interpretación simultánea del castellano hablado a otras formas de comunicación de la población sorda, distintas a la lengua de señas, y viceversa (art.2).
              br
              br

    p.m-0 De acuerdo con ISO 17100, cómo se citó en INSOR (2019), interpretar se define como el acto de verter una lengua a otra información oral o en forma de signos, de esta manera los intérpretes de lengua de señas colombiana (LSC) trabajan para permitir intercambios comunicativos entre los usuarios de la lengua de señas y los usuarios de habla español (p.10). Con dicha idoneidad, el intérprete se convierte en “un medio a través del cual las personas sordas pueden acceder a todos los servicios que como ciudadanos colombianos les confiere la Constitución” (Ley 324 de 1996, art.7), definiendo escenarios incluyentes y participativos.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
