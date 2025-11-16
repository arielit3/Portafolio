<script lang="ts">
	// importo el componente welcome que ya existia
	import Welcome from '$lib/components/welcome/welcome.svelte'
	// importo el nuevo componente Background que contiene el fondo difuminado
	import Background from '$lib/components/background/Background.svelte'
</script>

<svelte:head>
	<title>HolaSoyAsiel</title>
</svelte:head>

<!--
	Estructura de la pagina:
	- <Background/>: componente fijo que queda detras del contenido
	- .page-content: contenedor del contenido principal con z-index mayor
	Las clases y estilos aqui aseguran que solo el fondo se difumine y no el contenido.
-->
<Background />

<!-- contenedor del contenido, con posicion relativa y z-index para estar sobre el fondo -->
<div class="page-content">
	<Welcome />
</div>

<style>
/*
	A nivel local definimos el z-index del contenido para que quede encima del fondo.
	position: relative crea un contexto de posicionamiento para elementos hijos si los hay.
*/
.page-content {
	position: relative; /* permite usar z-index y empujar contenido sobre el fondo */
	z-index: 1; /* mayor que el z-index del fondo (0) para que el contenido sea visible y no difuminado */
}
</style>



