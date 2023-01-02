import {Injectable} from "@angular/core";
import {environment} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OnlinebankinguserModel} from "../models/onlinebankinguser.model";
import {SafeModel} from "../models/safe.model";

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
    return this.http.post<OnlinebankinguserModel>(`${this.apiServerUrl}/user`, newUser);
  }

  public updateUser(updatedUser: OnlinebankinguserModel): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiServerUrl}/user`, updatedUser);
  }

  public getSafes(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiServerUrl}/safe/all`);
  }

  public getSafeById(id: number): Observable<SafeModel> {
    return this.http.get<SafeModel>(`${this.apiServerUrl}/safe/all/` + id);
  }

  public addSafe(newSafe: SafeModel): Observable<SafeModel> {
    return this.http.post<SafeModel>(`${this.apiServerUrl}/safe`, newSafe);
  }
}
