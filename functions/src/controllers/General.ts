import { Request, Response } from 'express'

export class GeneralController {
  
  public getRoutes (req: Request, res: Response) {                
    res.status(200).json({ 
      routes: {
        '/': ['get'],
        '/request': ['get'],
        '/request/:id': ['get', 'delete'],
        '/keyhistory': ['get'],
        '/keyhistory/:id': ['get', 'put']
      }
    })
  }
  
  public notFound (req: Request, res: Response) {
    res.status(404).json({ error: 'Not Found!'})
  }
}