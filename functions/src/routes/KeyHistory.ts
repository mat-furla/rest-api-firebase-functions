import * as express from 'express'
import { KeyHistoryControler } from './../controllers/KeyHistory';

export class KeyHistoryRoutes {
  public keyHistoryControler: KeyHistoryControler = new KeyHistoryControler()
  public router: express.Router = express.Router()

  public routes(api: any):any {
    this.router.get('/', this.keyHistoryControler.read)
    this.router.get('/:id', this.keyHistoryControler.find)
    this.router.put('/:id', this.keyHistoryControler.update)

    api.use('/keyhistory', this.router)
  }
}