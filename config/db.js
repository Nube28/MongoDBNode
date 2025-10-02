import { MongoClient } from 'mongodb';

export default class Database {
    constructor(){
        this.uri = "mongodb://127.0.0.1:27017/usuarios";
        this.options = {};
        this.client = new MongoClient(this.uri, this.options);
    }

    async conectar(){
        try {
            await this.client.connect();
            console.log("Se conecto correctamente");
        } catch (error) {
            throw error;
        }
    }

    desconectar(){
        try {
            this.client.close();
            console.log("Se desconecto correctamente");
        } catch (error) {
            throw error;
        }
    }

    obtenerColeccion(nombre){
        return this.client.db().collection(nombre);
    }
}