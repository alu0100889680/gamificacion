<template>
  <div>
    <Header/>
    <div class="row">
      <div class="col-lg-12 center">
        <div class="row no-gutters bg-dark">
          <div class="col-md-6 mb-md-0 p-md-4">
            <img src="/img/activity.png" class="w-50">
          </div>
          <div class="col-md-6 position-static p-8 pl-md-0">
            <h5 class="mt-0">Actividades</h5>
            <p>Las actividades son ejercicios que cuentan con una descripción para guiarte blablablablablalalbalbaalblabbabl</p>
            <a href="/menu" class="stretched-link"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
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

