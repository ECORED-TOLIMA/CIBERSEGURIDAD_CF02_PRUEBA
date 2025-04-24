<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            .tarjeta.tarjeta--gris1.p-4.h-100.d-lg-flex.align-items-center
              p.mb-0 Este componente formativo permite comprender las amenazas digitales, la ingeniería social y la ética en ciberseguridad, proporcionando un enfoque integral sobre los riesgos que afectan la seguridad de la información. A través del análisis de ataques informáticos, vulnerabilidades y estrategias de manipulación, se busca desarrollar habilidades para la prevención, detección y gestión de incidentes. Además, se abordan principios éticos y normativas que regulan la ciberseguridad, promoviendo buenas prácticas en entornos digitales. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/intro/img01.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/kWGrbFbZ6Uk?si=9OppPe6ZxnPTFONG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
