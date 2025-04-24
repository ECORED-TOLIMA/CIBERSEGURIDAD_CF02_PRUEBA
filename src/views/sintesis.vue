<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda los principales aspectos de la ciberseguridad, comenzando con el análisis de los tipos de ataques cibernéticos y el impacto que generan en sistemas y redes informáticas. A continuación, se profundiza en las vulnerabilidades más comunes, así como en los métodos empleados para su explotación. También se examina la ingeniería social, destacando sus técnicas y ejemplos de manipulación psicológica utilizadas por los atacantes. Se presentan diversas estrategias de prevención, incluyendo buenas prácticas y herramientas de protección. Además, se reflexiona sobre los principios éticos que deben guiar el actuar en entornos digitales, junto con las normativas legales que regulan esta materia. Finalmente, se estudia el proceso de elaboración de reportes de incidentes y la actuación de las entidades responsables de gestionar y responder ante estos eventos.    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta de manera estructurada los principales temas de la ciberseguridad, incluyendo tipos de amenazas, vulnerabilidades, técnicas de ingeniería social, medidas preventivas, principios éticos y procedimientos para la gestión de incidentes. Cada apartado se relaciona para ofrecer una visión integral de cómo proteger la información en entornos digitales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
