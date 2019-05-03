<template>
  <div>
    <Header/>
    <div>
      <div class="bigbox">
        <div class="col-lg-12 text-white">
          <h1>Bienvenid@</h1>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
  background-image: url("../assets/img/2.jpg");
  /* background-color: aquamarine; */
  height: 90vh;
  text-align: center;
}
</style>
