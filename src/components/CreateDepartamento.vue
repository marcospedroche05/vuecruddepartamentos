<template>
  <div class="p-5">
    <h1>Crear departamento</h1>
    <hr/>
    <form v-on:submit.prevent="crearDepartamento()">
        <label>Introduce un ID: </label><br/>
        <input type="number" class="form-control" v-model="departamento.numero"/><br/>
        <label>Introduce el nombre: </label><br/>
        <input type="text" class="form-control" v-model="departamento.nombre"/><br/>
        <label>Introduce la localidad: </label><br/>
        <input type="text" class="form-control" v-model="departamento.localidad"/><br/>
        <button class="btn btn-success text-white w-50">Crear departamento</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos();
export default {
    name: "CreateDepartamento",
    methods: {
        crearDepartamento(){
            service.insertDepartamento(this.departamento).then(result => {
                console.log(result);
                window.location.href = "/"
            })
        }
    }, data(){
        return {
            departamento: {
                numero: 0,
                nombre: "",
                localidad: ""
            },
        }
    }
}
</script>

<style>

</style>