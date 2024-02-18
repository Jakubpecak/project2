import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, map, of, switchMap } from 'rxjs';

interface User {
  id?: string;
  name?: string;
  photo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }
  
  login(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  signUp(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  addUser(user: { name: string, photo: string }) {
    return this.firestore.collection('users').add(user);
  }

  getUsers(): Observable<User[]> {
    return this.firestore.collection<User>('users').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUser(): Observable<any> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.collection('users').doc(user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  updateUserData(userUid: string, newData: User): Observable<void> {
    return new Observable((observer) => {
      this.firestore.collection('users').doc(userUid).update(newData)
      .then(() => {
        observer.next();
        observer.complete();
      })
      .catch(error => {
        console.error("Błąd aktualizacji danych: ", error);
        observer.error(error);
      });
    });
  }


}
