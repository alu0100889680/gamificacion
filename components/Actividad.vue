<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>

<template>
  <div>
    <!-- <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/actividades">Actividades</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Actividad</li>
      </ol>
    </nav>-->
    <ul class="list-group list-group-flush">
      <li v-for="actividad in actividades" class>
        <div class="row mx-auto mt-3">
          <div class="col-lg-12">
            <div class="card bg-info text-white mb-3 text">
              <div class="card-header success-color white-text">
                <h3>{{actividad.titulo}}</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-3 col-mg-3 col-xs-3">
                    <img
                      class="card-img-top"
                      src="/img/actividad.png"
                      title="Foto de perfil"
                      alt="Foto de perfil"
                    >
                    <div class="col-lg-12 text-center">
                      <a href="/" class="btn btn-danger btn-md">Realizar actividad</a>
                    </div>
                  </div>
                  <div id="este" class="col-lg-8">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item bg-info pb-lg-1">
                        <div class="d-inline float-left">
                          <b>Categoría:</b>
                        </div>
                        <div class="float-right d-inline">{{actividad.categoria}}</div>
                      </li>
                      <li class="list-group-item bg-info pb-lg-1">
                        <div class="d-inline float-left">
                          <b>Dificultad:</b>
                        </div>
                        <div class="float-right d-inline">{{actividad.dificultad}}</div>
                      </li>
                      <li class="list-group-item bg-info pb-lg-1">
                        <div class="d-inline float-left">
                          <b>Creado por:</b>
                        </div>
                        <div class="float-right d-inline">{{actividad.creadopor}}</div>
                      </li>
                      <li class="list-group-item bg-info pb-lg-1">
                        <div class="d-inline float-left">
                          <b>Descripción:</b>
                        </div>
                        <div class="float-right d-inline">{{actividad.descripcion}}</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.card {
  margin: 0 auto;
  width: 900px;
}

.card-header {
  padding: 0.4rem 1rem 0rem;
}
@media only screen and (max-width: 1000px) {
  .card {
    width: 35rem !important;
  }
  img {
    max-width: 50%;
    max-height: 50%;
  }
  .card-img-top {
    width: 50%;
  }
}
@media only screen and (max-width: 620px) {
  .card {
    width: 27rem !important;
  }
}
@media only screen and (max-width: 470px) {
  .card {
    width: 20rem !important;
  }
}
@media only screen and (max-width: 360px) {
  .card {
    width: 15rem !important;
  }
  h2 {
    font-size: 1.5em;
  }
}
</style>

<script>
// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyAtGV1ggJO-8AHfXGaSyvhg2SJmON2_rTg",
//   authDomain: "gami-314da.firebaseapp.com",
//   databaseURL: "https://gami-314da.firebaseio.com",
//   projectId: "gami-314da",
//   storageBucket: "gami-314da.appspot.com",
//   messagingSenderId: "626672250699",
//   appId: "1:626672250699:web:a1f7047d2a72eb2d"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default {
  data() {
    return {
      title: "Actividad",
      // actividades: []
      actividades: [
        {
          titulo: "Algoritmos de ordenación de números",
          categoria: "Ordenación, Algoritmos",
          descripcion:
            "Escribe números del 1 al 10 desordenados en una hoja de papel, a continuación sigue el siguiente algoritmo...",
          dificultad: "Media",
          creadopor: "Aranza C",
          completado: false
        },
        {
          titulo: "Ordena tu cuarto computacionalmente ",
          categoria: "Algoritmos, Secuencias",
          descripcion:
            "En primer lugar, escribe en un papel los pasos necesarios para ordenar tu cuarto, después...",
          dificultad: "Fácil",
          creadopor: "Aranza C",
          completado: false
        }
      ]
    };
  },
  methods: {},
  head() {
    return {
      title: this.title
    };
  }
};
</script>



