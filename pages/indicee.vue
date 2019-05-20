<template>
  <div>
    <Header/>
    <div>
      <div class="bigbox">
        <div class="col-lg-12 title-content">
          <h1 class="title text-white">Bienvenid@</h1>
        </div>
        <div class="row half bg-light">
          <div class="col-md-12 p-5 bg-info text-white">
            <h2>Iniciar sesión</h2>
            <a href="/login" class="stretched-link"></a>
          </div>
        </div>
        <div class="row half bg-light">
          <div class="col-md-12 p-5 bg-info text-white">
            <h2>Registrarse</h2>
            <a href="/registro" class="stretched-link"></a>
          </div>
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
      title: "Inicio - Gamificación"
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
.half {
  width: 40%;
  margin: auto;
  border-radius: 20px;
  margin-top: 20px;
}

/* .ppal-bottom {
  background-color: rgb(106, 180, 209);
  color: white;
} */

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  /* font-weight: 300; */
  font-size: 6em;
  letter-spacing: 1px;
  padding-top: 90px;
  padding-bottom: 60px;
  font-family: "Pacifico";
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.bigbox {
  width: 100%;
  margin: 0 auto;
  background-size: cover;
  background-image: url("/img/back2.jpg");
  /* background-color: aquamarine; */
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 1077px) {
  .half {
    width: 60%;
  }
}
@media only screen and (max-width: 540px) {
  .title {
    font-size: 4.5em;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  h2 {
    font-size: 1.5em;
  }
  .half {
    width: 80%;
    margin-top: 5px;
  }
}

@media only screen and (max-width: 540px) {
  .title {
    font-size: 3.5em;
  }
  h2 {
    font-size: 1.2em;
  }
}
</style>
