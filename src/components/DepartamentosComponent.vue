<template>
    <div>
    <div v-if="!status"><img src="../assets/images/gta.jpg" class=" top-0 start-0 w-100 h-100"/></div>
    <div v-else>
    <h1>Departamentos</h1>
    <table class="table table-dark">
        <thead>
            <tr>
                <th>Numero</th>
                <th>Nombre</th>
                <th>Localidad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dept in departamentos" :key="dept">
                <td>{{ dept.numero }}</td>
                <td>{{ dept.nombre }}</td>
                <td>{{ dept.localidad }}</td>
            </tr>
        </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos();
export default {
    name: "DepartamentosComponent",
    data(){
        return {
            departamentos: [],
            status: false
        }
    },
    mounted() {
        service.getDepartamentos().then(result => {
            this.departamentos = result;
            this.status = true;
        })
    }
}
</script>

<style>

</style>