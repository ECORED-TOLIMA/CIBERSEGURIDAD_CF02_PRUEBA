<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ingeniería social

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p La ingeniería social consiste en engañar o influenciar a las personas para que realicen determinadas acciones o revelen información sensible. Los atacantes que emplean estas técnicas suelen aprovechar la buena voluntad, la falta de conocimiento o los puntos débiles emocionales o psicológicos de los usuarios. En lugar de vulnerar un sistema directamente, manipulan a las personas para que, sin darse cuenta, les otorguen acceso o información valiosa.
            .row
              .tarjeta.tarjeta--C01.p-4
                .row.justify-content-center
                  .col-auto.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen decorativa')
                  .col-lg-9.col-12.mb-0
                    p.mb-0 Un ejemplo común es cuando un atacante se hace pasar por una figura de autoridad y contacta a un empleado con un supuesto problema urgente. Durante la conversación, puede emplear halagos, amenazas sutiles o referencias a personas influyentes para presionar al usuario y lograr su objetivo.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--azul.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.col-3.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img14.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.mb-3
              h4(style="color: #6018EC")  La ingeniería social 
              p.mb-0 A continuación, se presenta un video sobre la ingeniería social, en el cual se explican los principios básicos de esta técnica de manipulación, sus principales métodos de ejecución y los riesgos que representa para la seguridad de la información.
            .col-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/embed/5FeJVcZerS0?si=vYqYYw8gTV_hFL4S" target="_blank")
                span Abrir video
                i.fas.fa-file-video

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Técnicas de ingeniería social

    p.mb-5(data-aos="fade-left") Las técnicas utilizadas en ingeniería social son diversas y se adaptan al contexto y al perfil de la víctima. Algunas de las más comunes incluyen:

    .row.justify-content-center.mb-0
      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img03.svg' alt="Imagen decorativa" style="width: 120px").m-auto
          .tarjeta.color-hover
            .p-4
              P.text-center <b><em>Phishing</em>:</b> envío de correos electrónicos fraudulentos que aparentan ser legítimos para obtener credenciales o instalar <em>malware</em>.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img04.svg' alt="Imagen decorativa" style="width: 120px").m-auto
          .tarjeta.color-hover
            .p-4
              P.text-center <b><em>Vishing</em> (voice <em>phishing</em>):</b> uso de llamadas telefónicas en las que el atacante finge ser un representante de soporte técnico o una entidad bancaria.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img05.svg' alt="Imagen decorativa" style="width: 120px").m-auto
          .tarjeta.color-hover
            .p-4
              P.text-center <b><em>Smishing</em> (SMS <em>phishing</em>):</b> envío de mensajes de texto con enlaces maliciosos o solicitudes de información personal.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img06.svg' alt="Imagen decorativa" style="width: 120px").m-auto
          .tarjeta.color-hover
            .p-4
              P.text-center <b><em>Pretexting</em>:</b> creación de una historia falsa (pretexto) para obtener información confidencial, como un supuesto auditor que solicita datos de acceso.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img07.svg' alt="Imagen decorativa" style="width: 120px").m-auto
          .tarjeta.color-hover
            .p-4
              P.text-center <b><em>Baiting</em>:</b> utilización de cebos físicos o digitales (como memorias USB infectadas o enlaces de descarga atractivos) para que el usuario acceda a <em>malware</em>.

      .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img08.svg' alt="Imagen decorativa" style="width: 120px").m-auto
          .tarjeta.color-hover
            .p-4
              P.text-center <b><em>Shoulder</em> <em>surfing</em>:</b> observación directa de credenciales o datos personales mientras la víctima los ingresa, en lugares públicos o laborales.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Ejemplos de ataques basados en manipulación psicológica

    .tarjeta.tarjeta--BG04.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
        .col-12
          .row.justify-content-center
            .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
              p Los ataques de ingeniería social utilizan estrategias psicológicas para inducir a las personas a actuar en contra de sus propios intereses o de la seguridad de su organización. Estos ataques se basan en la confianza, la urgencia, el miedo o la curiosidad, y son diseñados cuidadosamente para explotar comportamientos humanos predecibles. A diferencia de los ataques puramente técnicos, su eficacia radica en la capacidad del atacante para generar una falsa sensación de legitimidad o necesidad.
              .row
                .col-auto.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen decorativa')
                .col-lg-10.col-12.mb-3
                  p.mb-0 Conocer ejemplos reales y comunes de este tipo de ataques es fundamental para desarrollar una actitud crítica y alerta frente a posibles intentos de manipulación. La prevención empieza por identificar patrones de comportamiento sospechosos y comprender cómo se ejecutan estas tácticas en diferentes entornos, tanto digitales como presenciales. A continuación, se presentan los ejemplos más frecuentes utilizados por los atacantes:

            .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img09.jpg', alt='Imagen decorativa')

      .row.justify-content-center.align-items-center
        .col-lg-10.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3(data-aos="flip-down")
          .tarjeta.tarjeta--BG06.p-3
            .row.justify-content-center.align-items-center.mb-3
              .col-auto.mb-3
                figure
                  img(src='@/assets/curso/temas/tema3/img10.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p <b>Correo falso de soporte técnico:</b> un usuario recibe un mensaje urgente que solicita verificar su cuenta en un enlace que imita la página oficial de la empresa. Al ingresar sus datos, estos son capturados por el atacante.

            .row.justify-content-center.align-items-center.mb-3
              .col-auto.mb-3
                figure
                  img(src='@/assets/curso/temas/tema3/img11.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p <b>Llamada del “jefe” en emergencia:</b> el atacante simula ser el gerente general que necesita urgentemente una clave de acceso o el envío de información confidencial. La presión del tono y la autoridad percibida suelen hacer que el empleado coopere.

            .row.justify-content-center.align-items-center.mb-3
              .col-auto.mb-3
                figure
                  img(src='@/assets/curso/temas/tema3/img12.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p <b>USB abandonada en el estacionamiento:</b> un empleado encuentra una memoria USB etiquetada como “nómina confidencial” y la conecta a su equipo por curiosidad. El dispositivo instala un <em>malware</em> de acceso remoto.

            .row.justify-content-center.align-items-center.mb-3
              .col-auto.mb-3
                figure
                  img(src='@/assets/curso/temas/tema3/img13.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p <b>Mensaje SMS con enlace de rastreo falso:</b> el usuario recibe un mensaje sobre un paquete pendiente. Al hacer clic en el enlace, se descarga un programa malicioso.


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
