<template>
  <div>
    <Header/>
    <div class="col-lg-12">
      <div class="card shadow-sm" style="width: 30rem;">
        <h2>Perfil</h2>
        <div class="col-lg-12 col-xs-12 col-md-12">
          <img
            class="card-img-top col-lg-6 rounded-sm"
            v-bind:src="image"
            title="Foto de perfil"
            alt="Foto de perfil"
          >
          <h2 class="sub">
            <b>Nivel:</b>
            <p>{{nivel}}. {{animal}}</p>
          </h2>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item pb-lg-5">
              <div class="row">
                <div class="col lg-6 inline">
                  <b>Puntuación:</b>
                </div>
                <div class="col lg-6 inline right">
                  <p>{{puntuaciacion_total}}</p>
                </div>
              </div>

              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  v-bind:style="width"
                  v-bind:aria-valuenow="puntuacion_actual"
                  v-bind:aria-valuemin="0"
                  v-bind:aria-valuemax="100"
                ></div>
              </div>
              <div class="row">
                <div class="col-lg-12 right">
                  <b>{{puntuacion_actual}} / {{puntuacion_final}}</b>
                </div>
              </div>
              <h6 class="text-success center">(Faltan {{restan}}xp para pasar al siguiente nivel)</h6>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col lg-6 inline">
                  <b>Nombre:</b>
                </div>
                <div class="col lg-6 inline right">
                  <p>{{nombre}}</p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col lg-6 inline">
                  <b>Edad:</b>
                </div>
                <div class="col lg-6 inline right">
                  <p>{{edad}}</p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col lg-6 inline">
                  <b>Periodo:</b>
                </div>
                <div class="col lg-6 inline right">
                  <p>{{periodo}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <ul>
        <!-- <li v-for="actividad in actividades">{{actividad.titulo}}</li> -->
      </ul>
    </div>
    <pre>{{ $data | json }}</pre>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Header from "~/components/Header.vue";

export default {
  data() {
    return {
      title: "Perfil de usuario",
      image: "img/conejito.png",
      mensaje: "holaaaaaa",
      nombre: "Aranza",
      hora: "jeje",
      edad: "22",
      periodo: "Infantil",
      nivel: "1",
      animal: "Conejito",
      puntuacion_actual: "25",
      puntuaciacion_total: "25",
      puntuacion_final: "50",
      width: "width:" + 50 + "%;",
      restan: "25",
      actividades: [
        { titulo: "Salir", descripcion: "Una tareita", completado: false },
        { titulo: "Comer", descripcion: "Otra tareita", completado: false }
      ]
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  components: {
    Logo,
    Header
  }
};
</script>

<style>
p {
  display: inline;
}

.inline {
  display: inline-block;
}

.right {
  text-align: right;
}

.card {
  float: none; /* Added */
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  padding: 15px 10px 0px 10px;
}

.card-body {
  font-size: 1.2em;
}
.sub {
  font-size: 1em;
}

.progress {
  margin-top: 15px;
}
h6 {
  margin-top: 20px;
}

@media only screen and (max-width: 992px) {
  .card {
    margin-bottom: 10px;
    text-align: center;
    padding: 5px 0px 0px 0px;
    width: 20rem !important;
    margin-top: 20px;
  }
  .card-body {
    font-size: 0.8em;
  }
  h2 {
    font-size: 1.6em;
  }
  .img {
    max-width: 50%;
    max-height: 50%;
  }
  .list-group-item {
    padding: 3px 0px 10px;
  }
}

@media only screen and (max-width: 400px) {
  .card {
    width: 15rem !important;
  }
}

.card-body {
  text-align: justify;
}

img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  border: 2px solid lightgrey;
  margin: 0px 0px 7px 0px;
  border-radius: 8px;
  padding: 20px 20px 20px 20px;
}
</style>
