<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/actividades">Actividades</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Actividad</li>
      </ol>
    </nav>

    <div class="row mx-auto mt-5" style="width: 1100px;">
      <div class="col-lg-12 col-md-6">
        <div class="card text">
          <div class="card-header success-color white-text">
            <h2>Actividad de hace rnose que seasdaas</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="card-img-top col-lg-4 rounded-sm-lg-4">
                <img
                  class="card-img-top rounded-sm"
                  src="/img/actividad.png"
                  title="Foto de perfil"
                  alt="Foto de perfil"
                >
              </div>
              <div class="col-lg-8">
                <!-- <h4 class="card-title">Special title treatment</h4> -->
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pb-lg-1">
                    <b>Título:</b>
                  </li>
                  <li class="list-group-item pb-lg-1">
                    <b>Categoría:</b>
                  </li>
                  <li class="list-group-item pb-lg-1">
                    <b>Dificultad:</b>
                  </li>
                  <li class="list-group-item pb-lg-1">
                    <b>Creado por:</b>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <ul class="list-group list-group-flush">
                <li class="list-group-item pb-lg-1">
                  <b>Descripción:</b>
                </li>
              </ul>
            </div>
          </div>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >Launch demo modal</button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
// $(document).ready(function() {
//   $('[data-toggle="popover"]').popover();
// });

$("#myModal").on("shown.bs.modal", function() {
  $("#myInput").trigger("focus");
});
export default {
  data() {
    return {
      title: "Actividad"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>



