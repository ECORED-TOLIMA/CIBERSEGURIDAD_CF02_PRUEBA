<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ética en ciberseguridad

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center.tarjeta.tarjeta--C01
          .col-lg-10.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3.px-4
            .row.justify-content-center
              p La ética en ciberseguridad se refiere al conjunto de principios y normas morales que orientan el comportamiento de los profesionales, usuarios y organizaciones en el ámbito de la seguridad digital. Este campo exige un compromiso responsable con la protección de la información, el respeto por la privacidad, la transparencia y la legalidad en el uso de tecnologías.            
          .col-lg-2.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.px-0
            figure
              img(src='@/assets/curso/temas/tema5/img01.png', alt='Imagen decorativa')    

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Principios éticos en la seguridad de la información
    
    p.mb-5(data-aos="fade-down") Entre los desafíos más frecuentes en este ámbito se encuentran situaciones complejas que ponen a prueba la integridad ética de los profesionales y las organizaciones encargadas de la seguridad digital. Estos desafíos surgen por el acelerado avance tecnológico, la creciente dependencia de los sistemas informáticos y la necesidad de equilibrar la innovación con el respeto a los derechos fundamentales. A continuación, se detallan algunos de los más relevantes:

    .tarjeta.tarjeta--BG04.px-md-5.px-4
      .row.justify-content-center.mb-5(data-aos="flip-down")
        .col-md-8.col-lg.m-2
          .row
            .col-12.px-0
              figure
                img(src='@/assets/curso/temas/tema5/img02.png', style="width: 100%" ,alt='').m-auto
            .col-12.bg-c1(style="height:100%")
              .p-4
                p <b>Privacidad de los datos personales:</b> el acceso, almacenamiento y uso de información privada sin consentimiento plantea dilemas importantes. Empresas, gobiernos o ciberdelincuentes pueden vulnerar la privacidad, lo que exige establecer límites claros sobre el tratamiento de los datos y garantizar la protección de la información sensible.

        .col-md-8.col-lg.m-2
          .row
            .col-12.px-0
              figure
                img(src='@/assets/curso/temas/tema5/img03.png', style="width: 100%" ,alt='').m-auto
            .col-12.bg-c1.h-100
              .p-4
                p <b><em>Hacking</em> ético vs. <em>Hacking</em> malicioso:</b> distinguir entre el uso legítimo de técnicas de <em>Hacking</em> para fortalecer la seguridad y el uso con fines ilícitos es crucial. El <em>Hacking</em> ético se realiza con autorización y persigue prevenir riesgos, mientras que el <em>Hacking</em> malicioso busca dañar, espiar o robar.
                br

      .row.justify-content-center.mb-5(data-aos="flip-down")
        .col-md-8.col-lg.m-2
          .row
            .col-12.px-0
              figure
                img(src='@/assets/curso/temas/tema5/img04.png', style="width: 100%" ,alt='').m-auto
            .col-12.bg-c1(style="height:100%")
              .p-4
                p <b>Vigilancia masiva:</b> la recopilación de datos a gran escala por parte de gobiernos o corporaciones, con fines de control o seguridad, puede derivar en prácticas invasivas. Este tipo de vigilancia debe estar regulada para no vulnerar derechos fundamentales como la privacidad o la libertad de expresión.

        .col-md-8.col-lg.m-2
          .row
            .col-12.px-0
              figure
                img(src='@/assets/curso/temas/tema5/img05.png', style="width: 100%" ,alt='').m-auto
            .col-12.bg-c1(style="height:100%")
              .p-4
                p <b>Uso de inteligencia artificial en ciberseguridad:</b> las decisiones automatizadas que se aplican a la seguridad digital pueden reproducir o amplificar sesgos si los algoritmos no están bien diseñados o auditados. Esto plantea el desafío de garantizar transparencia, equidad y control humano en el uso de la IA.
      
      p.mb-5(data-aos="fade-down") Para enfrentar estos desafíos, se promueven principios como:

      .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center.tarjeta.tarjeta--C01
            .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3.p-4.px-4
              .row.justify-content-center
                ul.lista-ul--color.lista-ul
                  li.mb-4
                    i.fas.fa-shield
                    p.mb-0 <b>Confidencialidad:</b> proteger la información contra accesos no autorizados.
                  li.mb-4
                    i.fas.fa-shield
                    p.mb-0 <b>Integridad:</b> asegurar que los datos no sean modificados sin autorización.
                  li.mb-4
                    i.fas.fa-shield
                    p.mb-0 <b>Transparencia:</b> comunicar de manera clara cómo se recopila, usa y protege la información.
                  li.mb-4
                    i.fas.fa-shield
                    p.mb-0 <b>Responsabilidad:</b> asumir las consecuencias de las decisiones tomadas en entornos digitales.
                  li.mb-0
                    i.fas.fa-shield
                    p.mb-0 <b>Legalidad:</b> actuar conforme a las leyes vigentes en materia de ciberseguridad.
            .col-lg-auto.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.px-0
              figure
                img(src='@/assets/curso/temas/tema5/img06.png', alt='Imagen decorativa')   

    p.mb-5(data-aos="fade-down") También surgen dilemas éticos que implican tomar decisiones complejas:

    .row.justify-content-center.mb-5
      .col-8.col-lg.bg-c2.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/temas/tema5/img08.svg', style="width: 50px" ,alt='')
          p.text-white #[b ¿Es aceptable vulnerar sistemas para denunciar injusticias (hacktivismo)?]
          
      .col-8.col-lg.bg-c2.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/temas/tema5/img09.svg', style="width: 50px" ,alt='')
          p.text-white #[b ¿Debe reportarse una vulnerabilidad a la empresa o hacerla pública?]
          
      .col-8.col-lg.bg-c2.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/temas/tema5/img10.svg', style="width: 50px" ,alt='')
          p.text-white #[b ¿Es ético que los gobiernos accedan a datos personales para prevenir delitos?]
          
      .col-8.col-lg.bg-c2.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/temas/tema5/img11.svg', style="width: 50px" ,alt='')
          p.text-white <b>¿Se justifica el uso de <em>malware</em> con fines de defensa nacional?</b>

    p.mb-5(data-aos="fade-down") El <em>hackeo</em> ético representa una respuesta a estos dilemas, al permitir pruebas controladas de seguridad bajo autorización formal, con el objetivo de fortalecer los sistemas informáticos.

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--azul.p-4
          .row.justify-content-center.align-items-center
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema5/img07.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.mb-3
              h4(style="color: #6018EC")  Metodologías del <em>Hacking</em> ético
              p.mb-0 A continuación, se presenta un video sobre metodologías del <em>Hacking</em> ético. El video complementa los principios éticos abordados, resaltando la importancia del consentimiento, la legalidad y la responsabilidad en el ejercicio profesional de la seguridad digital.
            .col-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/embed/r3S8tscj-bg?si=LMEhVskbp2ZlwpwI" target="_blank")
                span Abrir video
                i.fas.fa-file-video

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Legislación y normativas éticas aplicadas

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p El ejercicio ético de la ciberseguridad no solo se basa en valores, sino también en normativas y leyes que regulan el manejo de la información digital y establecen responsabilidades legales.
            p Algunas de las principales normativas y marcos éticos a nivel internacional y nacional incluyen:
            .tarjeta.tarjeta--BG03.p-3.mb-3.px-4
              .col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-2
                ul.lista-ul--color.lista-ul
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Ley 1581 de 2012 (Colombia):</b> regula la protección de datos personales.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Ley 1273 de 2009 (Colombia):</b> crea nuevos tipos penales relacionados con delitos informáticos y la protección de la información.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Reglamento General de Protección de Datos (GDPR - Unión Europea):</b> establece normas estrictas para el tratamiento de datos personales y su transferencia internacional.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>ISO/IEC 27001:</b> norma internacional sobre gestión de la seguridad de la información.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Código de Ética de (ISC)²:</b> organización global que promueve estándares éticos en profesionales de seguridad informática.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Principios de Budapest (Convenio sobre Ciberdelincuencia):</b> primer tratado internacional que busca armonizar legislaciones y fortalecer la cooperación contra delitos informáticos.
            .row
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen decorativa')
              .col-10.mb-3
                p.mb-0 Estas leyes y normas exigen a las organizaciones implementar controles técnicos y administrativos para prevenir abusos, garantizar la privacidad y promover un entorno digital seguro y justo para todos los usuarios.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema5/img12.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema5',
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
