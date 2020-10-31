import * as express from 'express'
import { RequestController } from './../controllers/Request';

export class RequestRoutes {
  public requestController: RequestController = new RequestController()
  public router: express.Router = express.Router()

  public routes(api: any):any {
    this.router.get('/', this.requestController.read)
    this.router.get('/:id', this.requestController.find)
    this.router.delete('/:id',this.requestController.delete)

    api.use('/request', this.router)
  }
}