<template>
  <div>
    <Header/>
    <div class="col-lg-12">
      <div class="card shadow-sm" style="width: 30rem;">
        <h2>Perfil</h2>
        <div class="col-lg-12 col-xs-12 col-md-12">
          <img
            class="card-img-top col-lg-6 rounded-sm"
            src="/conejito.png"
            title="Foto de perfil"
            alt="Foto de perfil"
          >
          <h2 class="sub">
            <b>Nivel:</b> 1. Conejito
          </h2>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Nombre:</li>
            <li class="list-group-item">Edad:</li>
            <li class="list-group-item">Nivel:</li>
            <li class="list-group-item">
              Puntuación: {{hora}}
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Header from "~/components/Header.vue";
import Gamificacion from "~/components/Gamificacion.vue";

export default {
  data() {
    return {
      title: "Perfil de usuario"
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
.card {
  float: none; /* Added */
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px 15px 20px 15px;
}

.card-body {
  font-size: 1.2em;
}
.sub {
  font-size: 1em;
}

.progress {
  margin-top: 10px;
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
