<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navbar1">
      <div id="logo">
        <a href="/" class="text-white">
          <i class="fa fa-th-large"></i>
        </a>
        <b-navbar-brand class="logo" href="/">Gami</b-navbar-brand>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Tutorial</b-nav-item>
          <b-nav-item href="#">Información</b-nav-item>
        </b-navbar-nav>
        <!-- <li class="divider"></li> -->
        <hr>

        <b-navbar-nav class="ml-auto" right>
          <b-nav-item href="/registro">Registro</b-nav-item>
          <b-nav-item href="/login">Iniciar sesión</b-nav-item>
          <b-nav-item href="/perfil">Perfil</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" hidden>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>Mi Cuenta</em>
            </template>
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item href="#">Salir</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<style>
.nav li {
  padding-right: 225px;
}

#logo {
  margin-left: 12px;
  margin-right: 12px;
  font-size: 27px;
  color: white !important;
}
</style>