export interface ReserchDepartment {
    id: number;
    name: string;
    Place: string;
    Price: number;
    StartDate: Date;
}
export const ReserchDepartments = [
    {
        Id: 1,
        name: "Fizervaccine",
        Place: "USA",
        Price: 100000,
        StartDate: new Date("8/12/22")
    },
    {
        Id: 2,
        name: "covaccine",
        Place: "India",
        Price: 50000,
        StartDate: new Date("2/10/22")
    },
    {
        Id: 3,
        name: "MordenaVaccine",
        Place: "USA",
        Price: 150000,
        StartDate: new Date("2/10/22")
    }
]