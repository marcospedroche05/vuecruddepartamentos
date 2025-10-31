import Global from "../Global";
import axios from "axios";

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function(resolve){
            var request = "api/Departamentos";
            var url = Global.urlDepartamentos + request;
            axios.get(url).then(response => {
                resolve(response.data)
            })
        })
    }
    insertDepartamento(departamento) {
        return new Promise(function(resolve){
            let request = "api/Departamentos";
            let url = Global.urlDepartamentos +request;
            axios.post(url, departamento).then(response => {
                resolve(response);
            })
        })
    }
}