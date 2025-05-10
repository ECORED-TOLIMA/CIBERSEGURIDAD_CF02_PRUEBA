<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Ataques y amenazas informáticas

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p Los ataques y amenazas informáticas representan una de las principales preocupaciones en el mundo digital actual. A medida que dependemos cada vez más de la tecnología para realizar tareas cotidianas, desde la gestión de información personal hasta operaciones comerciales críticas, los ciberdelincuentes han encontrado nuevas formas de explotar vulnerabilidades en sistemas y redes. Estos ataques pueden adoptar diversas formas, como virus, <em>malware</em>, <em>ransomware</em>, <em>phishing</em>, entre otros, y tienen como objetivo desde el robo de datos hasta la interrupción de servicios esenciales.
            .row
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen decorativa')
              .col-10.mb-3
                p.mb-0 Las consecuencias de estos eventos pueden ser devastadoras, afectando no solo a las personas y empresas a nivel económico, sino también en términos de reputación, privacidad y confianza. A esto se suma el hecho de que muchas amenazas están diseñadas para evadir los sistemas de detección tradicionales, lo que incrementa el nivel de riesgo y la complejidad de las respuestas requeridas.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--gris1.p-4
          .row.justify-content-center.align-items-center
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img03.svg', alt='Imagen decorativa')
            .col-10.mb-0
              p.mb-0 El aumento de la sofisticación de las amenazas informáticas ha puesto de manifiesto la necesidad urgente de fortalecer las estrategias de ciberseguridad, tanto a nivel individual como organizacional. Entender las amenazas, sus características y métodos de propagación es el primer paso para anticiparse a ellas y reducir su impacto. Este conocimiento permite desarrollar políticas de protección más eficaces y fomentar una cultura digital consciente, resiliente y preparada ante cualquier intento de ataque.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tipos de ataques cibernéticos

    p.mb-5(data-aos="fade-left") Los ataques cibernéticos son acciones maliciosas dirigidas a sistemas, redes o dispositivos con el fin de robar información, interrumpir servicios o causar daños. Para ejecutarlos, los ciberdelincuentes emplean diversas técnicas, siendo el <em>malware</em> una de las herramientas más utilizadas. Comprender los distintos tipos de ataques y cómo se propagan permite tomar decisiones más efectivas para prevenirlos, contenerlos y eliminarlos.

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h4.mb-0 A) Ataques mediante <em>software</em> malicioso (<em>malware</em>)

    p.mb-5(data-aos="fade-left") El <em>malware</em> es cualquier <em>software</em> diseñado con fines dañinos como robar información, evadir controles o comprometer sistemas. Existen múltiples variantes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img04.svg' alt='AvatarTop')
          p <em>Spyware</em>: diseñado para espiar al usuario, recopila información sobre su actividad, contraseñas y datos confidenciales, como credenciales bancarias. Suele instalarse junto a programas legítimos o mediante troyanos.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img05.svg' alt='AvatarTop')
          p <em>Adware</em>: muestra anuncios no deseados en el navegador o en el sistema. Aunque en algunos casos no es dañino, interfiere con la experiencia del usuario y puede abrir la puerta a otros tipos de <em>malware</em>.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img06.svg' alt='AvatarTop')
          p Puerta trasera (<em>backdoor</em>): permite el acceso remoto a un sistema sin autorización, evitando los mecanismos de seguridad. Actúa de forma silenciosa, facilitando el control total por parte del atacante.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img07.svg' alt='AvatarTop')
          p <em>Ransomware</em>: bloquea el acceso a los datos o al sistema mediante cifrado, exigiendo un pago (rescate) para liberarlos. Se propaga principalmente a través de correos electrónicos de <em>phishing</em> o vulnerabilidades en el sistema. Un ejemplo es WannaCry, que afectó a miles de dispositivos en todo el mundo en cuestión de horas.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img08.svg' alt='AvatarTop')
          p <em>Scareware</em>: utiliza mensajes alarmantes para inducir al usuario a instalar programas falsos de "protección". Generalmente se manifiesta como ventanas emergentes que advierten sobre infecciones inexistentes.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img09.svg' alt='AvatarTop')
          p Virus: se adhiere a archivos ejecutables y necesita la intervención del usuario para activarse. Puede replicarse, mutar y propagarse a través de dispositivos extraíbles, redes compartidas o correo electrónico.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
          p Troyanos: se presentan como <em>software</em> legítimo, pero ejecutan acciones maliciosas sin el conocimiento del usuario. No se replican por sí solos, y frecuentemente se ocultan en archivos multimedia o juegos.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
          p Gusanos: se replican automáticamente para propagarse por redes sin necesidad de intervención humana ni programa anfitrión. Son altamente destructivos y pueden afectar a miles de dispositivos en poco tiempo. Un ejemplo es el gusano Code Red, que en 2001 infectó más de 300.000 servidores en 19 horas.
    .cajon.tarjeta--BG02.px-md-5.px-4
      .titulo.mb-5(data-aos="flip-up")
        img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
        h4.mb-0 B) Ataques pasivos

      p.mb-5(data-aos="fade-left") Son técnicas de espionaje digital donde el atacante intercepta información sin modificarla ni alterar el sistema, lo que dificulta su detección. No generan daños directos ni cambios en los datos, pero permiten recopilar información confidencial al operar de forma silenciosa. Entre los más comunes se encuentran el <em>sniffing</em>, que captura paquetes de datos transmitidos por la red; el <em>eavesdropping</em> o escucha clandestina, que intercepta comunicaciones como llamadas VoIP o correos electrónicos; y el análisis de tráfico, que estudia patrones de comunicación para deducir relaciones o horarios de uso entre los usuarios.

      .titulo.mb-5(data-aos="flip-up")
        img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
        h4.mb-0 C) Ataques masivos

      .row.justify-content-center.align-items-center(data-aos="flip-up")
        .col-12
          .row.justify-content-center.mb-5
            .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
              p Son ataques a gran escala dirigidos a múltiples usuarios o sistemas simultáneamente, con el objetivo de saturar infraestructuras o causar daños significativos. Afectan a muchas víctimas al mismo tiempo, son altamente visibles y disruptivos, y suelen valerse de automatización o redes distribuidas, como los bots. Entre los más comunes se encuentran:
              p Ataques DDoS: colapsan servidores mediante millones de solicitudes simultáneas.
              p <em>Phishing</em> masivo: correos electrónicos enviados en masa para engañar a numerosos usuarios.
              p <em>Ransomware</em> a gran escala: infecciones simultáneas de múltiples dispositivos, como el caso WannaCry.
            .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen decorativa')

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Impacto de las amenazas en sistemas y redes

    p.mb-4(data-aos="fade-left") Las amenazas cibernéticas pueden tener consecuencias graves en los sistemas informáticos y redes, afectando tanto a nivel técnico como operativo, financiero y reputacional. A continuación, se presentan los principales impactos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img21.png", alt="alt").img400.m-auto
      .col-lg-9
        SlyderF.custom(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt").img100.m-auto
            h4.titulo-1 Pérdida de confidencialidad:
            p.mb-0 Las amenazas como el <em>spyware</em> o los ataques pasivos pueden exponer información confidencial, como datos personales, credenciales de acceso, secretos comerciales o información financiera.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt").img100.m-auto
            h4.titulo-1 Pérdida de integridad:
            p.mb-0 El <em>malware</em> puede alterar datos críticos o introducir modificaciones no autorizadas, afectando la precisión, consistencia y fiabilidad de la información almacenada en los sistemas.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img15.svg", alt="alt").img100.m-auto
            h4.titulo-1 Pérdida de disponibilidad: 
            p.mb-0 Ataques como el <em>ransomware</em> o los ataques DDoS pueden dejar fuera de servicio plataformas, servidores o servicios completos, impidiendo el acceso legítimo a los recursos.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img16.svg", alt="alt").img100.m-auto
            h4.titulo-1 Daños económicos:
            p.mb-0 Las organizaciones pueden enfrentar altos costos derivados de la recuperación de sistemas, pérdida de ingresos, multas legales por incumplimientos normativos y contratación de servicios de ciberseguridad.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img17.svg", alt="alt").img100.m-auto
            h4.titulo-1 Pérdida de reputación:
            p.mb-0 Una violación de seguridad puede dañar la imagen de una empresa, disminuir la confianza de los usuarios o clientes y afectar relaciones comerciales.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img18.svg", alt="alt").img100.m-auto
            h4.titulo-1 Interrupción de operaciones:
            p.mb-0 Los sistemas infectados o comprometidos pueden provocar la paralización de procesos productivos, logísticos o administrativos, afectando la continuidad del negocio.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img19.svg", alt="alt").img100.m-auto
            h4.titulo-1 Uso indebido de recursos:
            p.mb-0 Algunos tipos de <em>malware</em>, como los gusanos o troyanos, utilizan los recursos del sistema para actividades maliciosas, como enviar spam, realizar ataques a otros equipos o minar criptomonedas sin autorización.

          .tarjeta.tarjeta--slyder.p-3
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img20.svg", alt="alt").img100.m-auto
            h4.titulo-1 Exposición legal y regulatoria:
            p.mb-0 Cuando se compromete información sensible o personal, se pueden generar responsabilidades legales por el incumplimiento de leyes de protección de datos.

    .row.mb-0
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen decorativa')
      .col-10.mb-3
        p.mb-0 La prevención, detección oportuna y respuesta adecuada frente a las amenazas son fundamentales para mitigar estos impactos y garantizar la seguridad de los sistemas y redes.


  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
