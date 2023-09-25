export interface IAuctionData {
  Date: string;
  Description: string;
  Status: 'live now' | 'upcoming' | 'ended';
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
export interface IShop {
  id: number;
  product: {
    name: string;
    price: string;
    creator: {
      name: string;
      socials: {
        instagram: string;
        twitter: string;
        linkedin: string;
      };
    };
    madeIn: string;
    totalViews: string;
    productstatus: string;
    imgUrl: string;
    category: string;
  };
  description: string;
  listings: {
    medium: string;
    dimensions: string;
    year: string;
    style: string;
    framing: string;
  };
  status: "In Stock" | "Out of Stock";
}
export interface IAuctionModel {
  auctiondata: IAuctionData[];
  creators: ICreator[];
  shop: IShop[];
}
