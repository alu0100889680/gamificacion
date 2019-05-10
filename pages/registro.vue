<template>
  <div>
    <Header/>
    <div class="div-centrado">
      <Form/>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Form from "~/components/Form.vue";
export default {
  layout: "default",
  data() {
    return {
      title: "Registro"
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  components: {
    Header,
    Form
  }
};
</script>