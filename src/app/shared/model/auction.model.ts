export interface ILivecard {
    ImgUrl: string;
    Bid: number;
    Artist: string;
    ArtistUrl: string;
    countdownHours: number;
    Product: string;
    isSaved: boolean;
  }
  
export interface ICreator {
    ImgUrl: string;
    CreatorName: string;
    HighestBids: number;
    countdownHours: number;
    CreatorUrl: string;
    ProductName: string;
    isFollowing: boolean;
  }
  
export interface IAuctionModel {
    livecards: ILivecard[];
    creators: ICreator[];
  }
  