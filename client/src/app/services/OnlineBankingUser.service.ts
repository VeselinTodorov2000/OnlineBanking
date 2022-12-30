import {Injectable} from "@angular/core";
import {environment} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";

@Injectable({providedIn: 'root'})
export class OnlineBankingUserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<OnlinebankinguserModel[]> {
    return this.http.get<OnlinebankinguserModel[]>(`${this.apiServerUrl}/user/all`);
  }

  public getAdminUser(): Observable<OnlinebankinguserModel> {
    return this.http.get<OnlinebankinguserModel>(`${this.apiServerUrl}/user/all/1`);
  }

  public addUser(newUser: OnlinebankinguserModel): Observable<OnlinebankinguserModel> {
    return this.http.post<OnlinebankinguserModel>(`${this.apiServerUrl}/employee/add`, newUser);
  }
}
