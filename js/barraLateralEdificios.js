function AbrirLateral() {
            var style = document.createElement('style');
            style.innerHTML = `
                #map {
                    transition-duration:1s;
                    left:25%;
                    width:75%;
                }
                #informacion{
                    display:block;
                    transition-duration:1s;
                }
                `;
            document.head.appendChild(style);
        }
        function CerrarLaterar() {
            var style = document.createElement('style');
            style.innerHTML = `
                #map {
                    transition-duration:1s;
                    left:0%;
                    width:100%;
                }
                #informacion{
                    display:none;
                    transition-duration:1s;
                }
                `;
            document.head.appendChild(style);
        }
        $(document).ready(function () {
            $("#b1").click(function () {
                $("#menu").toggle(1000);
            });
            $("#myLink").click(function () {
                $("#menu").toggle(1000);
            });
            $("#myLink1").click(function () {
                $("#menu").toggle(1000);
            });
            $("#myLink2").click(function () {
                $("#menu").toggle(1000);
            });
            $("#btn-abrir-popup").click(function () {
                $("#menu").toggle(1000);
            });
        });