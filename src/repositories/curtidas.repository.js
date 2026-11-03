import { knex } from "../database/knex.js"

class RepositoryCurtidas {
    async getAll (){
        const curtidasPegar = await knex('curtidas').select("*").returning('*')
        return curtidasPegar
    }

    async getById(id) {
        const curtidasPegarId = await knex('curtidas').select("*").where({id}).returning('*')
        return curtidasPegarId
    }

    async create(data) {
        const [curtidasCriado] = await knex('curtidas').insert(data).returning('*')
        return curtidasCriado
    }

    async delete(id) {
        const [curtidasDeletar] = await knex('curtidas').where({id}).del().returning("*")
        return curtidasDeletar
    }

    async updatePut(id,data) {
        const [curtidasAtualizado] = await knex('curtidas').where({id: id}).update(data).returning("*")
        return curtidasAtualizado
    }
}
export const repositoryCurtidas = new RepositoryCurtidas()