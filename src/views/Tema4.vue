<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de prevención

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center.tarjeta.tarjeta--C01
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3.px-4
            .row.justify-content-center
              p En un mundo digital plagado de amenazas invisibles, prevenir los ataques es tan importante como detectarlos. La ingeniería social, al explotar el comportamiento humano, requiere medidas de protección que involucren tanto la tecnología como la conciencia de los usuarios. Para explicar la importancia de la prevención, se puede imaginar una ciudad virtual llamada “Fortaleza de Datos”, donde sus habitantes (trabajadores digitales) enfrentan a diario intentos de engaño disfrazados de correos urgentes, llamadas sospechosas o promesas engañosas. Esta narrativa sirve como metáfora para destacar que la primera línea de defensa en ciberseguridad no es un <em>software</em> ni un dispositivo, sino el criterio informado de cada persona.
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema4/img02.svg', alt='Imagen decorativa')
              .col-lg-10.col-12.mb-0
                p.mb-0 El Consejo de Ciberseguridad de esta ciudad virtual entrenó a sus ciudadanos con cinco técnicas clave de defensa. Estas estrategias prácticas ayudan a detectar y evitar los ataques más comunes basados en manipulación psicológica.
          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.px-0
            figure
              img(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen decorativa')    

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img03.svg' alt='AvatarTop')
          h4.text-center Piensa antes de hacer clic
          p Evitar abrir enlaces o archivos adjuntos de remitentes desconocidos es una práctica fundamental. Verificar cuidadosamente la dirección del remitente antes de actuar puede evitar caer en trampas como correos falsos que simulan provenir de entidades legítimas.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img04.svg' alt='AvatarTop')
          h4.text-center Verifica siempre la identidad
          p Ante solicitudes sospechosas, especialmente si hay urgencia, se debe confirmar la identidad del remitente por otro canal confiable. Esto aplica tanto a correos como a llamadas o mensajes instantáneos.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img05.svg' alt='AvatarTop')
          h4.text-center No compartas más de la cuenta
          p La información aparentemente inofensiva en redes sociales puede ser utilizada para diseñar ataques personalizados. Se recomienda limitar lo que se publica, especialmente si está relacionado con la vida laboral o contraseñas indirectas.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img06.svg' alt='AvatarTop')
          h4.text-center Duda de lo urgente y lo emocional
          p Los atacantes suelen crear una sensación de urgencia o manipular emociones para forzar decisiones rápidas. Tomarse un momento para reflexionar y verificar siempre la información ayuda a evitar errores.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img07.svg' alt='AvatarTop')
          h4.text-center Capacitación constante
          p La formación periódica del personal en temas de ciberseguridad y la realización de simulacros refuerzan la cultura de prevención. Los métodos de ingeniería social evolucionan, por lo que el conocimiento actualizado es una herramienta crítica.

    p.mb-0(data-aos="fade-left") Estas prácticas no solo reducen el riesgo de ataques, sino que también fortalecen el papel del usuario como parte activa de la seguridad organizacional.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Medidas de seguridad y buenas prácticas

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p Para enfrentar los ataques de ingeniería social y otras amenazas cibernéticas, es fundamental adoptar una serie de medidas preventivas que complementen las buenas prácticas de los usuarios. Estas acciones deben implementarse tanto a nivel personal como organizacional y enfocarse en reducir los riesgos desde distintos frentes. Entre las medidas más efectivas se encuentran:
            .tarjeta.tarjeta--BG07.p-3
              .col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-2
                ul.lista-ul--color.lista-ul
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 Verificar siempre la identidad de quienes solicitan información confidencial.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 No hacer clic en enlaces ni descargar archivos de correos electrónicos sospechosos.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 Aplicar autenticación en dos pasos (2FA) para añadir una capa extra de protección a las cuentas.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 Limitar la información publicada en redes sociales, especialmente si puede ser usada para suplantaciones.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 Fomentar una cultura de ciberseguridad a través de capacitaciones, campañas de concientización y simulacros.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 Establecer protocolos claros de respuesta ante incidentes, de modo que los empleados sepan cómo actuar si identifican un posible ataque.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema4/img08.png', alt='Imagen decorativa')
    
    p.mb-0(data-aos="fade-left") Estas prácticas deben integrarse en el comportamiento diario de los usuarios, ya que la ingeniería social se basa en errores humanos más que en fallas técnicas.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Herramientas de protección en ciberseguridad

    p.mb-5(data-aos="fade-left") Además de las buenas prácticas, existen herramientas tecnológicas que ayudan a prevenir los ataques y fortalecer la seguridad de la información. Estas soluciones están diseñadas para proteger tanto los dispositivos como los datos, mediante mecanismos de autenticación, encriptación, detección y control de accesos. Algunas de las herramientas más utilizadas incluyen:

    .tarjeta.tarjeta--BG01.p-4.p-md-5.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Autenticación en dos pasos (2FA)
              p Añade una verificación adicional para acceder a cuentas. Herramientas como Google Authenticator, Microsoft Authenticator, Duo Security o Authy ofrecen opciones seguras. Incluso existen soluciones físicas como <em>YubiKey</em>.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img09.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 <em>Firewalls</em>
              p Dispositivos que filtran el tráfico de red para bloquear accesos no autorizados. Ejemplos: Cisco ASA, Fortinet FortiGate y Palo Alto Networks.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img10.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Sistemas de detección y prevención de intrusiones (IDS/IPS)
              p Detectan actividades sospechosas en la red. Ejemplos: Snort, Suricata y Cisco Firepower.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img11.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 VPN (Red Privada Virtual)
              p Cifran la conexión a internet para proteger la información transmitida. Ejemplos: Cisco AnyConnect y Netgear VPN Router.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img12.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Dispositivos de autenticación física
              p Tarjetas inteligentes (como CAC) o dispositivos biométricos (lectores de huellas o reconocimiento facial) que permiten el acceso seguro a sistemas críticos.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img13.png', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-7.order-lg-1.order-2
              h4 Almacenamiento cifrado: 
              p Protege archivos confidenciales con soluciones como Kingston IronKey o Apricorn Aegis Secure.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img14.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-left") Estas herramientas deben integrarse en una estrategia de seguridad integral, complementada con políticas claras, monitoreo constante y educación continua del personal.

</template>

<script>
export default {
  name: 'Tema4',
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
