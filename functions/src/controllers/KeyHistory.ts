import { Request, Response } from 'express'
import keyHistoryRepository from '../repositories/KeyHistory'

export class KeyHistoryControler {

  public read (req: Request, res: Response) {
    keyHistoryRepository.read()
      .then(keyhistory => {
        const results: any = []
        console.log(keyhistory)
        keyhistory.forEach(keyhistory => results.push({ id: keyhistory.id, data: keyhistory.data() }))
        if (results.length) {
          res.status(200).json(results)
        } else {
          res.status(404).json({detail: 'No records found'})
        }
      }).catch(err => {res.status(500).json(err)})
  }

  public find (req: Request, res: Response) {
    keyHistoryRepository.find(req.params.id)
      .then(keyhistory => {
        if (keyhistory.exists) {   
          res.status(200).json(keyhistory.data())
        } else {
          res.status(404).json({detail: 'lol!'})
        }
      }).catch(err => {res.status(500).json(err)})
  }

  public update (req: Request, res: Response) {
    keyHistoryRepository.update(req.params.id, req.body)
      .then(keyhistory => { res.status(201).json(keyhistory) })
      .catch(err => {res.status(500).json(err)})
  }
}