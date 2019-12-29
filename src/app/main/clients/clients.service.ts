import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import CONFIG from "../../config/config.json";

@Injectable({
  providedIn: "root"
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get(`${CONFIG.API_URL}/clients`);
  }
}
