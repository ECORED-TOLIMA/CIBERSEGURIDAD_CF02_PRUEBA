<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Vulnerabilidades en ciberseguridad

    .bloque-texto-g.bloque-texto-g--inverso.color1.p-3.p-sm-4.p-md-5.mb-0(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En ciberseguridad las vulnerabilidades representan puntos débiles o fallos en los sistemas, redes o procedimientos que pueden ser aprovechados por atacantes para comprometer la integridad, confidencialidad o disponibilidad de la información. Estas pueden originarse en diferentes capas tecnológicas, desde errores humanos hasta deficiencias técnicas en <em>software</em> o <em>hardware</em>. Comprenderlas y mitigarlas es fundamental para establecer una postura de seguridad efectiva.
        br
        br
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Tipos de vulnerabilidades
    
    p.mb-5(data-aos="fade-left") Las vulnerabilidades pueden clasificarse según su origen o naturaleza. A continuación, se describen algunas de las más comunes y críticas:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Tipos de vulnerabilidades</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(style= "width: 30%") Vulnerabilidad
                th(style= "width: 35%") Descripción
                th(style= "width: 35%") Riesgo asociado
            tbody
              tr
                td.text-bold(style="background-color: #fff") Contraseñas débiles o por defecto
                td(style="background-color: #fff") Uso de contraseñas simples como “123456” o no cambiar las credenciales predeterminadas.
                td(style="background-color: #fff") Acceso no autorizado por ataques de fuerza bruta o uso de credenciales conocidas.

              tr
                td.text-bold(style="background-color: #fff") <em>Software</em> sin actualizar
                td(style="background-color: #fff") Aplicaciones o sistemas con parches de seguridad pendientes.
                td(style="background-color: #fff") <em>Exploits</em> conocidos que pueden ser utilizados fácilmente por atacantes.

              tr
                td.text-bold(style="background-color: #fff") Inyección SQL
                td(style="background-color: #fff") Inclusión de comandos SQL maliciosos en formularios o URLs vulnerables.
                td(style="background-color: #fff") Robo, modificación o eliminación de datos en bases de datos.

              tr
                td.text-bold(style="background-color: #fff") Mala configuración de seguridad
                td(style="background-color: #fff") Servicios mal configurados, como permisos excesivos o falta de autenticación en servidores.
                td(style="background-color: #fff") Exposición de información sensible o acceso total al sistema.

              tr
                td.text-bold(style="background-color: #fff") Falta de cifrado
                td(style="background-color: #fff") Transmisión de datos en texto plano (ej. HTTP en lugar de HTTPS).
                td(style="background-color: #fff") Interceptación y robo de datos sensibles por parte de atacantes.

              tr
                td.text-bold(style="background-color: #fff") Ingeniería social
                td(style="background-color: #fff") Engaños dirigidos a los usuarios para obtener información confidencial (<em>phishing</em>, <em>vishing</em>, etc.).
                td(style="background-color: #fff") Acceso indebido mediante el uso de credenciales o instalación de <em>malware</em>.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            .cajon.cajon.color2.p-3
              .row.justify-content-center
                .col-12.order-lg-2.order-2.mb-lg-0
                  p.mb-0 Estas vulnerabilidades representan puntos críticos dentro de cualquier infraestructura tecnológica, ya que pueden ser aprovechadas por actores maliciosos para obtener acceso no autorizado, comprometer la integridad de los datos o interrumpir servicios esenciales. Aunque muchas de ellas pueden parecer simples o fácilmente evitables, su presencia suele deberse a la falta de actualización constante, la ausencia de políticas de seguridad claras o la poca conciencia de los usuarios frente a los riesgos digitales. Identificar y gestionar estas debilidades de manera proactiva es esencial para reducir la superficie de ataque y fortalecer la seguridad global del entorno informático.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen decorativa')

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Métodos de explotación de vulnerabilidades

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p Los atacantes aprovechan las vulnerabilidades identificadas mediante diversas técnicas que les permiten comprometer sistemas, robar datos o interrumpir servicios. Estas técnicas pueden clasificarse según el tipo de fallo que se explota:
            .tarjeta.tarjeta--BG03.p-3
              .col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
                ul.lista-ul--color.lista-ul
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Explotación de vulnerabilidades de <em>software</em>:</b> errores como desbordamientos de búfer, ejecución remota de código o inyecciones permiten comprometer sistemas. Estas fallas son comunes cuando se carece de prácticas seguras de desarrollo o se usan librerías obsoletas.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Ataques a nivel de red:</b> protocolos sin cifrado, servicios expuestos o la falta de autenticación pueden facilitar ataques como <em>sniffing</em> o <em>man-in-the-middle</em>, comprometiendo la confidencialidad de la información.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Explotación de configuraciones incorrectas:</b> sistemas mal configurados pueden ser descubiertos y manipulados fácilmente. Ejemplos incluyen bases de datos sin contraseña o interfaces de administración expuestas a internet.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Ingeniería social:</b> se basa en manipular a los usuarios para obtener acceso a sistemas. Ataques como el <em>phishing</em>, el <em>vishing</em> o el <em>baiting</em> son métodos habituales de entrada, especialmente cuando no existe formación en ciberseguridad.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img03.jpg', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-left") Para reducir el riesgo de explotación de vulnerabilidades, se recomienda implementar las siguientes acciones preventivas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.mb-3
          .col-lg-4.col-12.order-lg-1.order-2.mb-lg-0.mb-3
            .tarjeta.tarjeta--gris.p-4
              .row.justify-content-center
                .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema2/img04.svg', alt='Imagen decorativa')
                .col-lg-8.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                  p Aplicar parches y actualizaciones de seguridad de forma constante.

          .col-lg-4.col-12.order-lg-1.order-2.mb-lg-0.mb-3
            .tarjeta.tarjeta--gris.p-4
              .row.justify-content-center
                .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema2/img05.svg', alt='Imagen decorativa')
                .col-lg-8.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                  p Configurar correctamente los servicios y sistemas según buenas prácticas.

          .col-lg-4.col-12.order-lg-1.order-2.mb-lg-0.mb-3
            .tarjeta.tarjeta--gris.p-4
              .row.justify-content-center
                .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema2/img06.svg', alt='Imagen decorativa')
                .col-lg-8.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                  p Implementar el principio de mínimo privilegio en el control de accesos.

        .row.justify-content-center
          .col-lg-4.col-12.order-lg-1.order-2.mb-lg-0.mb-3
            .tarjeta.tarjeta--gris.p-4
              .row.justify-content-center
                .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema2/img07.svg', alt='Imagen decorativa')
                .col-lg-8.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                  p Usar protocolos seguros (como HTTPS, SSH) para proteger la transmisión de datos.

          .col-lg-4.col-12.order-lg-1.order-2.mb-lg-0.mb-3
            .tarjeta.tarjeta--gris.p-4
              .row.justify-content-center
                .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema2/img08.svg', alt='Imagen decorativa')
                .col-lg-8.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                  p Capacitar continuamente a los usuarios para prevenir ataques de ingeniería social.

          .col-lg-4.col-12.order-lg-1.order-2.mb-lg-0.mb-3
            .tarjeta.tarjeta--gris.p-4
              .row.justify-content-center
                .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema2/img09.svg', alt='Imagen decorativa')
                .col-lg-8.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                  p Auditar y monitorear continuamente la infraestructura para identificar vulnerabilidades.

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--azul.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.col-3.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imagen decorativa')
            .col-lg-8.col-12.mb-3
              h4(style="color: #6018EC") Ataques y vulnerabilidades 
              p.mb-0 A continuación, se presenta un video sobre ataques y vulnerabilidades en ciberseguridad. Este recurso audiovisual permite reforzar los conocimientos adquiridos mediante ejemplos prácticos y un lenguaje claro.
            .col-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/embed/au8EXjh-0jw?si=t0xW1quNAJ83HgtZ" target="_blank")
                span Abrir video
                i.fas.fa-file-video

</template>

<script>
export default {
  name: 'Tema2',
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
