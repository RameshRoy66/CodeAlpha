<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <title>Ramesh_PortFolio</title>
    <title>Document</title>
</head>

<body>
    <nav class="navbar navbar-expand-sm bg-info fixed-top">
        <brand class="navbar-brand"> RAMESH-PORTFOLIO </brand>
        <button aria-label="Ramesh_PortFolio" class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ram id="themeIcon" class="bi bi-toggle-off" onclick="toggleTheme()" style="font-size: 20px;"></ram>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" onclick="closeNavbar()" href="#home">Home</a></li>
                <li class="nav-item"><a class="nav-link" onclick="closeNavbar()" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" onclick="closeNavbar()" href="#skills">Skills</a></li>
                <li class="nav-item"><a class="nav-link" onclick="closeNavbar()" href="#orojects">Projects</a></li>
                <li class="nav-item"><a class="nav-link" onclick="closeNavbar()" href="#achivements">Achivements</a>
                </li>
                <li class="nav-item"><a class="nav-link" onclick="closeNavbar()" href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
<!--                                               centered image background-image                                       -->
    <div class="bg-image container-fluid">
        <br /><br /><br />
        <div class="row">
            <div class="col-sm-6">
                <br><br><br><br><br>
                <h1 class="ramesh mx-auto text-center animate__animated animate__zoomIn animate__delay-0.8s">VENKATA
                    RAMESH <br>GARAGA</h1>
            </div>
            <div class="col-sm-6">
                <div class="container image-center mt-5"><br>
                    <img alt="fhf" src="https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg "
                        class=" rounded mx-auto roun d-block animate__animated animate__bounce animate__backInRight animate__delay-0.9s"
                        width="40%">
                    <br><br><br>
                </div>
            </div>
        </div>
    </div>
<!--                                               centered image background-image                                       -->



<!--                                               centered image background-image                                       -->



<!--                                               centered image background-image                                       -->



<!--                                               centered image background-image                                       -->



<!--                                               centered image background-image                                       -->


















</body>

</html>
<script>
    function closeNavbar() {
        if (window.innerWidth < 576) {
            var navbar = document.querySelector('.navbar-collapse');
            var bsCollapse = new bootstrap.Collapse(navbar);
            bsCollapse.hide();
        }
    }
    function toggleTheme() {
        var themeIcon = document.getElementById('themeIcon');
        // Toggle icon between bi-toggle-on and bi-toggle-off
        themeIcon.classList.toggle('bi-toggle-on');
        // Toggle the 'dark-mode' class on the body
        document.body.classList.toggle('dark-mode');
    }


</script>