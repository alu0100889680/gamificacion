<template>
  <div>
    <Header/>
    <div class="col-lg-12">
      <div class="card" style="width: 25rem;">
      <h2>Perfil</h2>
        <img class="card-img-top" src="oveja.png" title="Foto de perfil" alt="Foto de perfil">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Nombre:</li>
            <li class="list-group-item">Edad:</li>
            <li class="list-group-item">Nivel:</li>
            <li class="list-group-item">Puntuación:
            <div class="progress">
              <div class="progress-bar w-75" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
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
.titulo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin: 40px 0px 0px 50px;
}
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  text-align: center;
  margin-top: 50px;
  padding: 25px 20px 25px 20px;
}

.card-body{
  text-align: justify;
}

img{
  margin-top: 15px;
  width: 100px;
  height: 300px;
  background-color: lightgrey;
  border: 1px solid #ddd;
}

</style>
