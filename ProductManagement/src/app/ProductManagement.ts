export interface ProductManagement {
    Id: number;
    Name: string;
    Quntity: number;
    Price: number;
    Email: string;
    StartDate: Date;
}

export const ProductManagementS = [
    {
        Id: 1,
        Name: "Laptop",
        Quntity: 2,
        Price: 1000,
        Email: "Laptop@gmail.com",
        StartDate: new Date()
    },
    {
        Id: 2,
        Name: "Ipad",
        Quntity: 3,
        Price: 1500,
        Email: "Ipad@gamil.com",
        StartDate: new Date()
    },
    {
        Id: 3,
        Name: "Tv",
        Quntity: 4,
        Price: 2000,
        Email: "tv@gmail.com",
        StartDate: new Date()
    }
]