import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../shared/interfaces";

@Injectable()
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  get token(): string {
    const accessExpData = new Date(<string>localStorage.getItem('access-api-token-exp'))
    if (new Date() > accessExpData) {
        this.logout()
        return ''
      }
    return <string>localStorage.getItem('access-api-token')
  }

  isAuthenticated() {
    return this.token
  }
  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post('http://localhost:8000/api/v1/auth/token/', user, this.httpOptions)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    this.setToken(null)
  }

  private setToken(response: any) {
    if (response) {
      let token_parts = response.access.split(/\./);
      let token_decoded = JSON.parse(window.atob(token_parts[1]));
      localStorage.setItem('access-api-token', response.access)
      localStorage.setItem('access-api-token-exp', (new Date(token_decoded.exp * 1000)).toString())
    } else {
      localStorage.clear()
    }
  }
}
