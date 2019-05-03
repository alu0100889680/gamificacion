<template>
  <section id="loginform" class="outer-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 v-if="loginPage" class="text-center">Inicio de sesión</h2>
          <h2 v-if="signupPage" class="text-center">Registro</h2>
          <form role="form" class="col-lg-12">
            <div v-if="signupPage" class="form-group">
              <label for="exampleInputEmail1">Nombre</label>
              <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div v-if="signupPage" class="form-group">
              <label for="exampleInputEmail1">Apellido</label>
              <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div v-if="signupPage" class="form-group">
              <label for="exampleFormControlSelect1">Edad</label>
              <select class="form-control" id="exampleFormControlSelect1" placeholder=" ">
                <option value disabled selected></option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>&gt16</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Correo electrónico</label>
              <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-md">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.outer-wrapper {
  display: table;
  width: 100%;
  height: 100%;
  margin-top: 50px;
}

.center {
  margin: auto;
}

.login-btn {
  position: fixed;
  top: 15px;
  /* right: 50px; */
}
</style>

<script>
export default {
  computed: {
    loginPage() {
      return this.$route.path == "/login" ? true : false;
    },
    signupPage() {
      return this.$route.path == "/registro" ? true : false;
    }
  }
};
</script>



