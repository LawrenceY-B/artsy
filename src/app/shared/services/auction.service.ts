import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAuctionModel } from "../model/auction.model";
@Injectable({
    providedIn: "root"
})
export class AuctionService {
    constructor(private http: HttpClient) {}
    getAuctionData() {
        return this.http.get<IAuctionModel>("assets/database/auction.json");
    }
}