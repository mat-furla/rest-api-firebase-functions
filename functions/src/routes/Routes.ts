import { Auth } from '../Middleware/Auth'
import { GeneralRoutes } from './General'
import { RequestRoutes } from './Request';
import { KeyHistoryRoutes } from './KeyHistory';

export class Routes {
  public auth: Auth = new Auth()
  public generalRouter: GeneralRoutes = new GeneralRoutes()
  public requestRouter: RequestRoutes = new RequestRoutes()
  public keyHistoryRouter: KeyHistoryRoutes = new KeyHistoryRoutes()

  constructor (api: any) {
    //this.routeMiddleware(api)
    this.routerSetup(api)
  }

  //public routeMiddleware(api: any) {
  //  api.use(this.auth.firebaseAuth)
  //}

  public routerSetup(api: any):void {
    this.keyHistoryRouter.routes(api)
    this.requestRouter.routes(api)
    this.generalRouter.routes(api)
  }
}