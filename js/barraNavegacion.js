<nav class="navbar navbar-dark bg-dark fixed-bottom">
        <div class="container">
            <div class="barra">
                <a class="navbar-brand">
                    <img src="img/LITP.png" alt="ITP" class="imagen">
                    Instituto Tecnológico de Pachuca
                    </img>
                    <button id="b1" class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </a>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Instituto Tecnológico de Pachuca</a>
                    </li>
                    <li class="nav-item active">
                        <a id="myLink" class="nav-link" href="" onclick="AbrirLateral();return false;"
                            data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            Edificios
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#trabajos">Rutas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#acerca-de">Organigrama</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#piepagina">Equipo de Desarrollo</a>
                    </li>
                </ul>

            </div>

        </div>
        <div id="menu" class="radioboton">
            <p>Estilos De Mapa</p>
            <input id='streets-v11' type='radio' name='rtoggle' value='streets' checked='checked'>
            <label for='streets'>Calles</label>
            <input id='dark-v10' type='radio' name='rtoggle' value='dark'>
            <label for='dark'>Oscuro</label>
            <input id='satellite-v9' type='radio' name='rtoggle' value='satellite'>
            <label for='satellite'>Satelite</label>
        </div>
    </nav>