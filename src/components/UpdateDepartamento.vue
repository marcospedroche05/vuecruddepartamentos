<template>
  <div class="p-5">
    <h1>Actualizar departamento</h1>
    <hr/>
    <form v-on:submit.prevent="actualizarDepartamento()">
        <label>ID</label><br/>
        <input type="number" :defaultValue="departamento.numero" class="form-control" readonly disabled v-model="departamento.numero"/><br/>
        <label>Nombre</label><br/>
        <input type="text" :defaultValue="departamento.nombre" class="form-control" v-model="departamento.nombre"/><br/>
        <label>Localidad</label><br/>
        <input type="text" :defaultValue="departamento.localidad" class="form-control" v-model="departamento.localidad"/><br/>
        <button class="btn btn-warning w-50 text-light">Actualizar</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos();
export default {
    name: "UpdateDepartamento",
    data(){
        return {
            departamento: {
                numero: 0,
                nombre: "",
                localidad: ""
            }
        }
    }, mounted(){
        service.getDepartamento(this.$route.params.id).then(result => {
            this.departamento = result;
        })
    }, methods: {
        actualizarDepartamento(){
            service.updateDepartamento(this.departamento).then(result => {
                console.log(result)
                this.$router.push("/");
            })
        }
    }
}
</script>

<style>

</style>