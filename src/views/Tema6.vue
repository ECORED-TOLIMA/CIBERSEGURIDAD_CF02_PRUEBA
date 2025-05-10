<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Reportes y gestión de incidentes en ciberseguridad

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center.tarjeta.tarjeta--BG08
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3.px-4
            .row.justify-content-center
              p La gestión de incidentes de ciberseguridad implica la identificación, análisis, reporte y respuesta ante eventos que comprometen la confidencialidad, integridad o disponibilidad de los sistemas informáticos. En este proceso, los reportes juegan un papel fundamental al documentar de manera estructurada los hallazgos, riesgos y acciones recomendadas para mitigar amenazas y fortalecer la postura de seguridad de la organización.
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.px-0
            figure
              img(src='@/assets/curso/temas/tema6/img01.png', alt='Imagen decorativa')    

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Mecanismos de denuncia y respuesta a incidentes
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p Un reporte en ciberseguridad es un documento técnico que describe incidentes detectados, vulnerabilidades identificadas o resultados de auditorías de seguridad. Su propósito es informar a los responsables sobre eventos relevantes que podrían afectar la infraestructura tecnológica y proporcionar la base para tomar decisiones correctivas o preventivas.
            p Un buen reporte debe incluir los siguientes elementos esenciales:
          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema6/img02.jpg', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-10.col-12.desktop
        ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema6/img03.svg', alt="Imagen decorativa")
          .tarjeta.color-acento-botones.p-3(x="29%" y="21%" numero="1.")
            p.mb-0 Identifica el tipo de reporte (incidente, auditoría o vulnerabilidad) y la fecha de elaboración.
          .tarjeta.color-acento-botones.p-3(x="54.5%" y="10%" numero="2.")
            p.mb-0 Explica de forma clara qué ocurrió, cómo fue descubierto y en qué contexto.
          .tarjeta.color-acento-botones.p-3(x="76.5%" y="22%" numero="3.")
            p.mb-0 Evalúa las posibles consecuencias para la organización (pérdida de datos, interrupción del servicio o filtración de información).
          .tarjeta.color-acento-botones.p-3(x="77.8%" y="55%" numero="4.")
            p.mb-0 Incluye registros del sistema (<em>logs</em>), capturas de pantalla, pruebas de explotación u otra documentación que respalde los hallazgos.
          .tarjeta.color-acento-botones.p-3(x="66%" y="79%" numero="5.")
            p.mb-0 Describe las causas del incidente, técnicas utilizadas por los atacantes (si aplica), y detalles técnicos sobre cómo se explotó la vulnerabilidad.
          .tarjeta.color-acento-botones.p-3(x="34.5%" y="82%" numero="6.")
            p.mb-0 Proporciona medidas de remediación, parches sugeridos o cambios en la configuración para prevenir futuros incidentes.
          .tarjeta.color-acento-botones.p-3(x="26%" y="48%" numero="7.")
            p.mb-0 Resume los hallazgos e indica los próximos pasos o responsables de la implementación de las soluciones.

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-md-8.col-12.movil
        figure
          img(src='@/assets/curso/temas/tema6/img03_.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Un reporte de ciberseguridad es una tarea fundamental para documentar incidentes, vulnerabilidades o hallazgos técnicos que puedan comprometer la integridad, confidencialidad o disponibilidad de los sistemas informáticos. A continuación, se describen los pasos esenciales para su elaboración:

    //- .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
    //-   .col-lg-10
    //-     .row.justify-content-center
    //-       .col-lg-8.col-12.mb-md-0
    //-         LineaTiempoD.color-acento-botones.especial
    //-           .row(numero="A" titulo="Recolección de información:")
    //-             .col-12.mb-4.mb-md-0
    //-               p Este paso consiste en recopilar todos los datos relacionados con el incidente, incluyendo registros de actividad (<em>logs</em>), archivos del sistema, reportes de monitoreo, mensajes de error y testimonios de usuarios involucrados. Cuanta más información se reúna, mayor será la claridad del análisis posterior.
              
    //-           .row(numero="B" titulo="Identificación y delimitación del incidente:")
    //-             .col-12.mb-4.mb-md-0
    //-               p Es fundamental definir con precisión qué ocurrió, cuándo y en qué parte del sistema. Esto implica determinar si se trata de una intrusión, una fuga de datos, una infección por <em>malware</em>, una falla interna o un intento de acceso no autorizado, y delimitar su alcance.

    //-           .row(numero="C" titulo="Análisis del impacto y evaluación del riesgo:")
    //-             .col-12.mb-4.mb-md-0
    //-               p Se debe examinar cómo ha afectado el incidente a la organización, tanto desde el punto de vista técnico como operativo. Esto incluye evaluar la pérdida de datos, la afectación al servicio, el daño reputacional y el posible incumplimiento normativo.

    //-           .row(numero="D" titulo="Documentación clara de hallazgos:")
    //-             .col-12.mb-4.mb-md-0
    //-               p En esta etapa se redacta el contenido del informe con lenguaje técnico preciso pero comprensible para los responsables de la seguridad o la gerencia. Deben incluirse detalles sobre las evidencias recopiladas, patrones detectados, comportamiento del atacante (si aplica), vectores de ataque y vulnerabilidades explotadas.

    //-           .row(numero="E" titulo="Elaboración de recomendaciones y medidas correctivas: ")
    //-             .col-12.mb-4.mb-md-0
    //-               p Con base en el análisis, se sugieren soluciones para resolver el incidente y acciones preventivas para evitar su repetición. Estas pueden incluir parches de seguridad, actualizaciones de <em>software</em>, refuerzo de políticas de acceso o capacitación del personal.

    //-           .row(numero="F" titulo="Presentación del reporte a los responsables:")
    //-             .col-12.mb-4.mb-md-0
    //-               p Finalmente, el informe debe entregarse a las áreas correspondientes (como el equipo de TI, el CSIRT o la alta dirección) para su evaluación y toma de decisiones. En algunos casos, también se puede compartir con entidades externas como autoridades legales o CERT nacionales, si la magnitud del incidente lo requiere.

    //-       .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
    //-         figure
    //-           img(src='@/assets/curso/temas/tema6/img04.png', alt='Imagen decorativa')


    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C02")
          .row(titulo="Recolección de información")
            .col-12.mb-0.mb-md-0
              p Este paso consiste en recopilar todos los datos relacionados con el incidente, incluyendo registros de actividad (<em>logs</em>), archivos del sistema, reportes de monitoreo, mensajes de error y testimonios de usuarios involucrados. Cuanta más información se reúna, mayor será la claridad del análisis posterior.
            
          .row(titulo="Identificación y delimitación del incidente")
            .col-12.mb-0.mb-md-0
              p Es fundamental definir con precisión qué ocurrió, cuándo y en qué parte del sistema. Esto implica determinar si se trata de una intrusión, una fuga de datos, una infección por <em>malware</em>, una falla interna o un intento de acceso no autorizado, y delimitar su alcance.
            
          .row(titulo="Análisis del impacto y evaluación del riesgo")
            .col-12.mb-0.mb-md-0
              p Se debe examinar cómo ha afectado el incidente a la organización, tanto desde el punto de vista técnico como operativo. Esto incluye evaluar la pérdida de datos, la afectación al servicio, el daño reputacional y el posible incumplimiento normativo.
            
          .row(titulo="Documentación clara de hallazgos")
            .col-12.mb-0.mb-md-0
              p En esta etapa se redacta el contenido del informe con lenguaje técnico preciso pero comprensible para los responsables de la seguridad o la gerencia. Deben incluirse detalles sobre las evidencias recopiladas, patrones detectados, comportamiento del atacante (si aplica), vectores de ataque y vulnerabilidades explotadas.
            
          .row(titulo="Elaboración de recomendaciones y medidas correctivas")
            .col-12.mb-0.mb-md-0
              p Con base en el análisis, se sugieren soluciones para resolver el incidente y acciones preventivas para evitar su repetición. Estas pueden incluir parches de seguridad, actualizaciones de <em>software</em>, refuerzo de políticas de acceso o capacitación del personal.
            
          .row(titulo="Presentación del reporte a los responsables")
            .col-12.mb-0.mb-md-0
              p Finalmente, el informe debe entregarse a las áreas correspondientes (como el equipo de TI, el CSIRT o la alta dirección) para su evaluación y toma de decisiones. En algunos casos, también se puede compartir con entidades externas como autoridades legales o CERT nacionales, si la magnitud del incidente lo requiere.
            
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema6/img04.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Un reporte bien estructurado y oportuno no solo permite atender un incidente de forma eficaz, sino que también se convierte en un recurso valioso para fortalecer la estrategia de la organización. Con el fin de poner en práctica lo aprendido, se presenta el siguiente ejemplo de reporte de ciberseguridad:

    .tarjeta.tarjeta--BG04.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
          .col-lg-10.col-12
            .row.justify-content-center.tarjeta.tarjeta--C01
              .col-12.mb-md-0.mb-lg-0.mb-3.p-3.px-5
                ol.lista-ol.lista-ol
                  li 
                    span.text-bold A) 
                    p.mb-0 <b>Título:</b> informe sobre vulnerabilidad de acceso en el servidor <em>web</em>.
                  li 
                    span.text-bold B) 
                    p.mb-0 <b>Fecha:</b> 30 de marzo de 2025.
                  li 
                    span.text-bold C) 
                    p.mb-0 <b>Descripción:</b> durante una auditoría rutinaria de seguridad, se identificó una vulnerabilidad crítica de inyección SQL en el módulo de autenticación del servidor <em>web</em> institucional. Esta vulnerabilidad permite a un usuario malintencionado manipular las consultas enviadas a la base de datos a través de los campos de entrada del formulario de inicio de sesión.
                  li 
                    span.text-bold D) 
                    p.mb-0 <b>Impacto:</b> la explotación de esta vulnerabilidad podría permitir la ejecución de comandos arbitrarios en la base de datos, lo que comprometería la integridad, disponibilidad y confidencialidad de la información almacenada. Además, podría permitir el acceso no autorizado a credenciales de usuarios y a datos sensibles de la organización.
                  li 
                    span.text-bold E) 
                    p.mb-0 <b>Evidencia:</b> se adjuntan capturas de pantalla que evidencian la ejecución exitosa de pruebas de inyección SQL en el formulario de autenticación, así como los registros (<em>logs</em>) del servidor que muestran los errores generados como resultado de las consultas manipuladas.
              .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3.px-4
                .row.justify-content-center
                  ol.lista-ol.lista-ol
                    li 
                      span.text-bold F) 
                      p.mb-0 <b>Análisis técnico:</b> se comprobó que el sistema no aplica mecanismos adecuados de validación ni sanitización de los datos ingresados por los usuarios. Esto permite que comandos SQL maliciosos sean interpretados directamente por el motor de base de datos. La falta de uso de sentencias preparadas y de una arquitectura segura aumenta el riesgo de este tipo de ataques.
                    li 
                      span.text-bold G) Recomendaciones:
                        .tarjeta.tarjeta--blanca.p-4.mt-2
                          ul.lista-ul
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Implementar validaciones estrictas del lado del servidor para todas las entradas de usuario.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Utilizar consultas parametrizadas o sentencias preparadas para evitar la manipulación de comandos SQL.
                            li 
                              i.lista-ul__vineta
                              p.mb-0 Actualizar las versiones del <em>framework</em> y del sistema de gestión de bases de datos utilizados.
                            li.mb-0
                              i.lista-ul__vineta
                              p.mb-0 Realizar pruebas de penetración periódicas para detectar vulnerabilidades similares.
                    li 
                      span.text-bold H) 
                      p.mb-0 <b>Conclusión:</b> se recomienda aplicar de manera inmediata las medidas correctivas sugeridas y realizar una revisión completa del código del sistema <em>web</em> para prevenir otras posibles vulnerabilidades. También se sugiere fortalecer los controles de desarrollo seguro dentro del ciclo de vida del <em>software</em>.
              .col-lg-auto.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema6/img05.png', alt='Imagen decorativa')   

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Entidades encargadas de la gestión de reportes

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p La gestión efectiva de incidentes de ciberseguridad requiere la participación de entidades especializadas que centralicen, analicen y coordinen las respuestas ante amenazas. Estas organizaciones, tanto a nivel nacional como internacional, ofrecen canales para reportar incidentes, divulgar vulnerabilidades y emitir alertas de seguridad. A continuación, se describen algunas de las principales entidades encargadas de esta labor:
            p En Colombia:
            .tarjeta.tarjeta--BG03.p-3
              .col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-2
                ul.lista-ul--color.lista-ul
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>ColCERT (Grupo de Respuesta a Emergencias Cibernéticas de Colombia):</b> dependiente del Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC), ColCERT es el equipo nacional encargado de coordinar la respuesta a incidentes de ciberseguridad. Recibe reportes, analiza amenazas y emite boletines de alerta. Sitio <em>web</em>: https://colcert.gov.co 
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>CSIRT de entidades estatales y privadas:</b> muchas organizaciones públicas y privadas cuentan con su propio CSIRT (Computer Security Incident Response Team), equipos especializados en recibir, analizar y mitigar incidentes dentro de sus redes.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Policía Nacional - Centro Cibernético Policial (CCP):</b> encargado de recibir denuncias sobre delitos informáticos. Ofrece canales como el CAI Virtual y el portal de denuncias en línea. Sitio <em>web</em>: https://caivirtual.policia.gov.co 
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>Fiscalía General de la Nación:</b> investiga y judicializa los delitos informáticos reportados por ciudadanos, empresas o instituciones del Estado.
          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img06.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p A nivel internacional:
            .tarjeta.tarjeta--BG03.p-3.mb-3
              .col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-2
                ul.lista-ul--color.lista-ul
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>CERT/CC (Carnegie Mellon University - EE.UU.):</b> uno de los primeros equipos de respuesta a incidentes en el mundo. Publica alertas, coordina respuestas a amenazas globales y mantiene una base de datos de vulnerabilidades.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>FIRST (Forum of Incident Response and Security Teams):</b> red global de equipos de respuesta que promueve la cooperación internacional en la gestión de incidentes. Incluye miembros en más de 90 países.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>ENISA (Agencia de la Unión Europea para la Ciberseguridad):</b> coordina esfuerzos en Europa para mejorar las capacidades de ciberseguridad, proporciona herramientas de gestión de riesgos y fomenta la colaboración entre países.
                  li.mb-3
                    i.fas.fa-shield
                    p.mb-0 <b>INTERPOL – Cybercrime Directorate:</b> apoya la lucha contra el cibercrimen a nivel internacional, facilitando la cooperación entre cuerpos policiales de distintos países.
            p Estas entidades proporcionan mecanismos formales de reporte, así como recursos educativos, boletines de seguridad y directrices para la prevención de incidentes. Conocerlas y saber cómo contactarlas es fundamental para fortalecer las capacidades de respuesta en ciberseguridad tanto a nivel organizacional como nacional.
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img07.png', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema6',
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
