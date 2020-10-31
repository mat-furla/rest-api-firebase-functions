import * as admin from 'firebase-admin'

class RequestRepository {
  read() {
    return admin.firestore().collection('requisicao').get()
  }
  delete(id: string) {
    return admin.firestore().collection('requisicao').doc(id).delete()
  }
  find(id: string) {
    return admin.firestore().collection('requisicao').doc(id).get()
  }
}

export default new RequestRepository()