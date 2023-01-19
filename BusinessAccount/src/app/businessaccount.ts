export interface BusinessAccount {
    Id: number;
    Name: string;
    RentPrice: number;
    Description: string;
    StartDate: Date;
}
export const BusinessAccounts = [
    {
        Id: 1,
        Name: "Subway",
        RentPrice: 50000,
        Description: "sandwitchShop",
        StartDate: new Date("01/15/2023")
    },
    {
        Id: 2,
        Name: "Dunkin",
        RentPrice: 100000,
        Description: "CoffeeShop",
        StartDate: new Date("02/15/2023")
    },
    {
        Id: 3,
        Name: "Motel",
        RentPrice: 150000,
        Description: "Hotel",
        StartDate: new Date("03/15/2023")
    }
]

