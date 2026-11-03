import { servicesCurtidas } from "../services/curtidas.services.js";

class ControllerCurtidas {
    async getAll (req,res) {
        try {
        const curtidas = await servicesCurtidas.getAll()
        return res.status(200).json(curtidas)
        } catch (error){
            console.error(error)
            res.status(500).json({error: "Erro ao pegar curtidas"});
        }
    }

    async getById (req,res) {
        const id = req.params.id
        try {
        const curtidas = await servicesCurtidas.getById(id)
        return res.status(200).json(curtidas)
        } catch (error){
            console.error(error)
            res.status(500).json({error: "Erro ao pegar curtidas"});
        }
    }

    async create (req,res) {
        try {
        const curtidas = await servicesCurtidas.create(req.body)
        return res.status(201).json(curtidas)
        } catch (error){
            console.error(error)
            res.status(500).json({error: "Erro ao criar curtidas"});
        }
    }

    async delete (req,res) {
        const id = req.params.id
        try {
        const curtidas = await servicesCurtidas.delete(id)
        return res.status(200).json(curtidas)
        } catch (error) {
            console.error(error)
            res.status(500).json({error: "Erro ao apagar curtidas"});
        }
    }

    async updatePut (req,res) {
        const id = req.params.id
        try {
        const curtidas = await servicesCurtidas.updatePut(id, req.body)
        return res.status(200).json(curtidas)
        } catch (error) {
            console.error(error)
            res.status(500).json({error: "Erro ao pegar curtidas"});
        }
    }
}

export const controllerCurtidas = new ControllerCurtidas()