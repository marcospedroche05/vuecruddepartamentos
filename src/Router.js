import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from "./components/DepartamentosComponent.vue";
import CreateDepartamento from "./components/CreateDepartamento.vue";
import DetailsDepartamento from "./components/DetailsDepartamento.vue";
import UpdateDepartamento from "./components/UpdateDepartamento.vue";


const myRoutes = [
    {path: "/", component: DepartamentosComponent},
    {path: "/create", component: CreateDepartamento},
    {path: "/details/:numero/:nombre/:localidad", component: DetailsDepartamento},
    {path: "/update/:id", component: UpdateDepartamento}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;