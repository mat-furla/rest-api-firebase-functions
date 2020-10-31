import * as admin from 'firebase-admin'

class keyHistoryRepository {
  read() { 
    return admin.firestore().collection('keyhistory').get()
  }
  find(id: string) {
    return admin.firestore().collection('keyhistory').doc(id).get()
  }
  update(id: string, key: any) {
    return admin.firestore().collection('keyhistory').doc(id).update(key)
  }
}

export default new keyHistoryRepository()