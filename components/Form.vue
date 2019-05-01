<template>
  <section id="loginform" class="outer-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center">Inicio de sesión</h2>
          <form role="form" class="col-lg-12">
            <div class="form-group">
              <label for="exampleInputEmail1">Correo electrónico</label>
              <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary text-center">Enviar</button>
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
