import { Injectable } from "@angular/core";
import { ILivecard } from "../model/auction.model";

@Injectable({
    providedIn: "root"
})
export class NavigationService{
    private sharedData!: ILivecard ;

    setSharedData(data: ILivecard){
        this.sharedData = data;

    }
    getSharedData(){
        console.log('Shared Data:', this.sharedData);

        return this.sharedData;
    }
}