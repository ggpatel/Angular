export interface ComputerManagement {
    Id: number;
    DiscSize: number;
    RamSize: number;
    CompanyName: string;
    PurchaseDate: Date;
}
export const ComputerManagements = [
    {
        Id: 1,
        DiscSize: 1000,
        RamSize: 16,
        CompanyName: "dell",
        PurchaseDate: new Date("01/12/2023")

    },
    {
        Id: 2,
        DiscSize: 2000,
        RamSize: 32,
        CompanyName: "hp",
        PurchaseDate: new Date("01/13/2023")
    },
    {
        Id: 3,
        DiscSize: 3000,
        RamSize: 64,
        CompanyName: "macbbok",
        PurchaseDate: new Date("01/14/2023")
    }
];