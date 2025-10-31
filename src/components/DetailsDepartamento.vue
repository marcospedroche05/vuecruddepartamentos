<template>
  <div class="p-5">
    <h1>Detalles</h1>
    <hr/>
    <ul class="list-group">
            <li class="list-group-item">
            ID: {{ $route.params.numero }}
        </li>
        <li class="list-group-item">
            Nombre: {{ $route.params.nombre }}
        </li>
        <li class="list-group-item">
            Localidad: {{ $route.params.localidad }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailsDepartamento",
  
};
</script>

<style>
</style>