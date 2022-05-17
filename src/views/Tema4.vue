<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis y ajustes

    .row.mb-5
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/tema4/img01.png' data-aos="zoom-in-down")
    
    .row.justify-content-center.align-items-center.mb-5.mt-4           
      .col-lg-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El análisis se convierte en elemento transversal en la interpretación y traducción, considerando que dicho ejercicio implica un proceso cognitivo importante asociado a la escucha, pensamiento, estructuración de contenidos y respuesta frente a los mismos, en esa medida el análisis permite la comprensión y el ajuste cuando este se requiere.
              br
              br
    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.1 Definición y conceptos

    .row.justify-content-center
      .col-12.col-md-10
        .cajon.color-acento-contenido.px-5.py-4.mb-5.mb-md-0(data-aos="fade-right")
          p.m-0 El análisis en la Lengua de Señas Colombianas - Español es un proceso detallado, que hace parte del aprendizaje y de la ejecución en el ejercicio de interpretación y traducción; de acuerdo con INSOR (2018) El análisis del discurso, es fundamental en tanto permite que los estudiantes identifiquen la relación entre los diferentes niveles del texto y, por lo tanto, determinen la macroestructura y la superestructura.  Además, que reconozcan los dispositivos de cohesión, la cual tiene que ver con los recursos léxico-gramaticales que hacen posible el enlace de un enunciado con otro (p.14). Es así como implica procesos de aprendizaje complejos que requieren de análisis profundos y de ajustes constantes mientras se adquiere y apropia la información entendiendo estos como las mejoras que se evidencian.
    
    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.2.	Estrategias de mejoramiento

    .row.justify-content-center-align-items-center
      .col-12-.col-md-5.align-self-center
        figure
          img.mb-4.mb-md-0(src='@/assets/curso/tema4/img03.png' data-aos="zoom-in-down")
      .col-12.col-md-7
        p.m-0 Las estrategias de mejoramiento hacen parte de los sistemas de gestión de la calidad y tienen como propósito aportar al ciclo PHVA (planear, hacer, verificar y actuar) están enmarcadas en mayor medida en la etapa de verificación en la cual se observa cómo se ha desarrollado el ejercicio de interpretación y traducción previamente planeado y ejecutado, validando si cumple con los criterios establecidos y de evidenciar falencias en el proceso se procede a actuar desde los cambios que deben desarrollarse y las medidas que deben tomarse que permitan mejorar el servicio, este ciclo se repite constantemente adaptándose a los cambios y actualizaciones en el marco del dinamismo que implica la sociedad y cada contexto.

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
