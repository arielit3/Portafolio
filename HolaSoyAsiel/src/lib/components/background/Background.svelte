<!--
  Componente Background
  Esta version usa esferas grandes y colores oscuros. Las esferas se mueven
  despacio usando transform (GPU acelerado) y un ligero blur para dar
  sensacion de volumen sin cargar demasiado la CPU.

  Reglas importantes:
  - el fondo esta en posicion fija y z-index bajo para quedar detras del contenido
  - pointer-events: none para que el fondo no interfiera con interacciones
  - pocas esferas, animacion lenta y uso de transform para mejores rendimientos
-->
<script lang="ts">
  // componente visual, sin props por ahora
</script>

<style>
/* contenedor que cubre toda la pantalla y queda detras del contenido */
.background {
  position: fixed;
  inset: 0; /* cubre toda la pantalla */
  z-index: 0; /* queda detras del contenido principal */
  overflow: hidden; /* evita scroll por transform/blur fuera del area */
  pointer-events: none; /* no captura eventos del mouse */
  background: #060609; /* base muy oscura para la paleta solicitada */
}

/* cada esfera es un elemento absoluto con un radial-gradient para dar volumen */
.sphere {
  position: absolute;
  border-radius: 50%;
  will-change: transform; /* optimizacion: indica al navegador que animaremos transform */
  filter: blur(36px); /* difumina la esfera para que parezca suave y grande */
  opacity: 0.7; /* baja opacidad para que no opaque el contenido */
  transform-origin: center;
}

/* esfera 1: izquierda arriba, tono morado-azulado */
.sphere.a {
  width: 520px; /* tamanio grande para dar efecto de fondo */
  height: 520px;
  left: -10%;
  top: -8%;
  background: radial-gradient(circle at 30% 30%, rgba(135, 108, 178, 0.95), rgba(8,145,178,0.6) 60%, transparent 70%);
  animation: moveA 30s linear infinite; /* animacion muy lenta */
}

/* esfera 2: derecha, tono teal naranja suave */
.sphere.b {
  width: 640px;
  height: 640px;
  right: -12%;
  top: 20%;
  background: radial-gradient(circle at 40% 40%, rgba(154, 211, 225, 0.9), rgba(96, 93, 90, 0.6) 60%, transparent 75%);
  animation: moveB 36s linear infinite;
}

/* esfera 3: centro inferior, tono frio oscuro */
.sphere.c {
  width: 420px;
  height: 420px;
  left: 20%;
  bottom: -14%;
  background: radial-gradient(circle at 50% 40%, rgba(11,16,32,0.95), rgba(13,24,45,0.7) 60%, transparent 80%);
  animation: moveC 40s linear infinite;
  opacity: 0.6;
}

/* animaciones: ligeros desplazamientos y escalados para dar movimiento sutil */
@keyframes moveA {
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(30px,40px) scale(1.03); }
  100% { transform: translate(0,0) scale(1); }
}
@keyframes moveB {
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(-40px,-20px) scale(1.02); }
  100% { transform: translate(0,0) scale(1); }
}
@keyframes moveC {
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(-20px,30px) scale(1.015); }
  100% { transform: translate(0,0) scale(1); }
}

</style>

<!-- marcado: tres esferas como capas visuales. aria-hidden para que sean decorativas -->
<div class="background" aria-hidden="true">
  <div class="sphere a"></div>
  <div class="sphere b"></div>
  <div class="sphere c"></div>
</div>
