<template>
  <div>
    <Header/>
    <Actividad/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Actividad from "~/components/Actividad.vue";

export default {
  components: {
    Header,
    Actividad
  }
};
</script>

<style>
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




