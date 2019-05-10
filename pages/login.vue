<template>
  <div>
    <Header/>
    <div class="div-centrado">
      <Form/>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Header from "~/components/Header.vue";
import Form from "~/components/Form.vue";
export default {
  layout: "default",
  data() {
    return {
      title: "Inicio de sesión"
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  components: {
    Logo,
    Header,
    Form
  }
};
</script>
<style>
div-centrado {
  margin: auto;
  width: 100px;
  height: 100px;
}
</style>
