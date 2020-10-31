import { Request, Response } from 'express'
import RequestRepository from '../repositories/Request'

export class RequestController {

  public read (req: Request, res: Response) {
    RequestRepository.read()
      .then(request => {
        const results: any[] = []
        request.forEach(request => results.push({ id: request.id, data: request.data() }))
        if (results.length) {
          res.status(200).json(results)
        } else {
          res.status(404).json({detail: 'No records found'})
        }
      }).catch(err => {res.status(500).json(err)})
  }
  
  public delete (req: Request, res: Response) { 
    RequestRepository.delete(req.params.id) 
      .then(() => { res.status(200).json({detail: `Request id: ${req.params.id} deleted!`}) })
      .catch(err => {res.status(500).json(err)})
  }
  
  public find (req: Request, res: Response) {
    RequestRepository.find(req.params.id)
      .then(request => {
        if (request.exists) {   
          res.status(200).json(request.data())
        } else {
          res.status(404).json({detail: 'lol!'})
        }
      }).catch(err => {res.status(500).json(err)})
  }
}