<template>
  <div>
    <Header/>
    <div class="titulo">
      <h2>Perfil</h2>
    </div>
    <div class="col-lg-12">
      <div class="card" style="width: 25rem;">
        <img class="card-img-top" src="/oveja.png" alt="Foto de perfil">
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Nombre:</li>
            <li class="list-group-item">Edad:</li>
            <li class="list-group-item">Nivel:</li>
            <li class="list-group-item">Puntuación:</li>
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
}
</style>
