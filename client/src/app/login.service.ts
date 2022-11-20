import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OnlineBankingUser} from "./OnlineBankingUser";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverApiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getOnlineBankingUsers(): Observable<OnlineBankingUser[]> {
    return this.http.get<OnlineBankingUser[]>(`${this.serverApiUrl}/user/all`)
  }
}
