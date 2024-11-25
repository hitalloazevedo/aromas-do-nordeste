import { Cardapio } from "../model/Cardapio";
import { Request, Response } from "express";
import generateUniqueId from "../utils/IdGenerator";
import { handleError } from "../utils/ErrorHandler";

const cardapioRepository = new Cardapio();

export class CardapioController {

    async getPlates(_: Request, response: Response){
        try {
            const allPlates = await cardapioRepository.get()
            response.status(200).json({ plates: allPlates })
        } catch (err) {
            handleError(err, response); 
        }
    }

    async createPlate(request: Request, response: Response){
        try {
            const data = request.body;
            const id: number = await generateUniqueId();
            const createdPlate = await cardapioRepository.create({id, ...data})
            if (createdPlate){
                response.status(201).json({
                    message: "created",
                    plate: createdPlate
                })
            }
        } catch (err){
            handleError(err, response); 
        }
    }

    async deletePlate(request: Request, response: Response){
        try {
            const id: number = Number.parseInt(request.params.id);
            const data = await cardapioRepository.delete(id);
            response.status(200).json({ message: "deleted", plate: data[0]})
        } catch (err){
            handleError(err, response);     
        }
    }  
    
    async updatePlate(request: Request, response: Response) {
        try {
            const id: number = Number.parseInt(request.params.id);
            const data = request.body;
            const updatedPlate = await cardapioRepository.update(id, data);
            response.status(200).json({ message: "updated", plate: updatedPlate})
        } catch (err) {
            handleError(err, response);
        }
    }
}
