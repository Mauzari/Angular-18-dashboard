import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { map } from 'rxjs';


interface State{
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

private http = inject(HttpClient);

  // el # hace privado el valor en el ECM de javascript
  #state = signal<State>({
    loading: true,
    users: []
  })

  public users = computed( () => this.#state().users);
  public loading = computed( () => this.#state().loading);

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .subscribe(res => {
      this.#state.set({
        loading: false,
        users: res.data
      })
    });
   }

   getUserById(id: string){
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
    .pipe(
      map(resp => resp.data)
    );
   }
}


