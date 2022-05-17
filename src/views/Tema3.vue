<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas de verificación

    .row.mb-4
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/tema3/img01.png' data-aos="zoom-in-down")
    
    p.m-0.mb4 Resulta relevante realizar procedimientos que permitan identificar la correcta realización de la Lengua de señas Colombianas - Español, en este sentido cobran especial relevancia las técnicas de verificación las cuales permiten identificar la forma en la cual el intérprete y traductor está llevando a cabo el proceso y con base en ello adelantar acciones de mejora.
    
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.1 Definición y conceptos

    .row.justify-content-center-align-items-center
      .col-12-.col-md-5.align-self-center
        figure
          img.mb-4.mb-md-0(src='@/assets/curso/tema3/img02.png' data-aos="zoom-in-down")
      .col-12.col-md-7
        p.mb-4 Las técnicas de verificación son procedimientos que aportan en el control de la calidad para el debido cumplimiento de los procesos de interpretación y traducción, estas pueden ser realizadas a partir de la observación, para el caso de la lengua de Señas Colombianas - Español dicha verificación debe ser por parte de un experto en el tema.
        p.m-0 De acuerdo con Gordillo, como se citó Martínez, D. Barreto, A,  Corredor, A & Acevedo, S. 2018, la técnica que se debe emplear para verificar los avances en lengua de señas de los estudiantes, es grabar sus interacciones y participaciones, puesto que el posterior análisis de estos vídeos permitirá identificar las falencias para así intervenir de forma acertada, brindado las opciones para un mejor desempeño posible (p.33), lo anterior permite visualizar el video en repetidas ocasiones por el estudiante y el docente validando allí los conocimientos adquiridos y las acciones de mejora desde la valoración propia y del experto. 
    
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.2.	Estrategias

    .row.mb-4
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/tema3/img03.png' data-aos="zoom-in-down")
    
    p.m-0.mb4 Las estrategias se derivan de los objetivos y hacen parte del plan de acción propuesto en una determinada línea, se componen de un conjunto de acciones dirigidas al logro del aprendizaje; para el caso de la Lengua de Señas Colombianas - Español de acuerdo con Martínez, et al. (2018) existen “estrategias de memorización y espacios de práctica. Dado que en comparación con el aprendizaje en lenguas orales en las que se puede recurrir a estrategias como el empleo del alfabeto fonético para recordar cómo pronunciar (o cómo suenan) los nuevos elementos, en la lengua de señas no se cuenta con esta facilidad, por ello su aprendizaje se debe basar en un porcentaje mayor de memorización, lo cual se debe considerar con sumo cuidado. Por su parte, la producción y la práctica se hacen necesarias desde el inicio, lo que exige interacción sincrónica con docente y compañeros desde el principio del proceso de aprendizaje con los mecanismos de óptima calidad visual, así como brindar los espacios reales para las prácticas (p.34). Lo anterior se convierte en un aprendizaje significativo a través de la experiencia y la interacción con diferentes personas y en diferentes contextos, en este sentido también resulta significativo en el marco de las estrategias considerar los elementos culturales y étnicos.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
