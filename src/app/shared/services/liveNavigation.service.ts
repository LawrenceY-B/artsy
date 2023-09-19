import { Injectable } from "@angular/core";
import { IAuctionData } from "../model/auction.model";

@Injectable({
    providedIn: "root"
})
export class NavigationService{
    private sharedData!: IAuctionData ;

    setSharedData(data: IAuctionData){
        this.sharedData = data;

    }
    getSharedData(){
        console.log('Shared Data:', this.sharedData);

        return this.sharedData;
    }
}