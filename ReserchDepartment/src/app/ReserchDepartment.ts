export interface ReserchDepartment {
    id: number;
    Project: string;
    Place: string;
    Price: number;
    StartDate: Date;
}
export const ReserchDepartments = [
    {
        Id: 1,
        Project: "Fizervaccine",
        Place: "USA",
        Price: 100000,
        StartDate: new Date("8/12/22")
    },
    {
        Id: 2,
        Project: "covaccine",
        Place: "India",
        Price: 50000,
        StartDate: new Date("2/10/22")
    },
    {
        Id: 3,
        Project: "MordenaVaccine",
        Place: "USA",
        Price: 150000,
        StartDate: new Date("2/10/22")
    }
]