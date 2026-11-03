import { repositoryCurtidas } from "../repositories/curtidas.repository.js";

class ServicesCurtidas {
    async getAll (){
        const curtidas = await repositoryCurtidas.getAll()
        return curtidas
    }

     async getById (id){
        const curtidas = await repositoryCurtidas.getById(id)
        return curtidas
    }

    async create (data){
        const curtidasCriado = await repositoryCurtidas.create(data)
        return curtidasCriado
    }
    async delete (id){
        const curtidasDeletar = await repositoryCurtidas.delete(id)
        return curtidasDeletar
    }
    
    async updatePut (id,data){
        const curtidasDeletar = await repositoryCurtidas.updatePut(id,data)
        return curtidasDeletar
    }

}
export const servicesCurtidas = new ServicesCurtidas()