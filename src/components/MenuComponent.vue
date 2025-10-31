<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CRUD MORTAL VUE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/create">Crear departamento</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view></router-view>
</template>

<script>
export default {
    name: "MenuDepartamentos"
}
</script>

<style>

</style>