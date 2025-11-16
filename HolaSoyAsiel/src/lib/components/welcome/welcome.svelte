<script lang="ts">
    import './welcome.css'
</script>

<div class="contenedor-general">
    <div class="presentacion">
        <!-- imagen eliminada porque no habia src valido; asi evitamos solicitudes vacias y warnings -->
        <h1>Hola bienvenido a mi portafolio</h1>
        <p>Hola mucho gusto, mi nombre es Brandon Asiel Guevara Reyes, que deseas hacer, puedes ir a mi red social que es instagram, puedes visitar mi pagina de github, tambien puedes continuar en el portafolio y ver algunos proyectos o directamente ir a mi curriculum</p>

    </div>
    <div class="nav-principal">
        <p class="quess">Que deseas hacer?</p>
        <nav class="btns-nav">
            <!--
                Reemplazo del boton con enlace vacio por un enlace con texto y atributos
                accesibles. Un anchor con texto proporciona el label visible y ademas
                tiene aria-label y title para lectores de pantalla.
                href apunta a instagram como ejemplo; cambia a tu perfil real si quieres.
            -->
            <a class="btn-instagram"
               href="https://instagram.com/"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Instagram"
               title="Instagram">
               Instagram
            </a>
        </nav>
    </div>
</div>