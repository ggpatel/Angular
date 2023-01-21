export interface ScienceTechnology {
    Id: Number;
    Name: String;
    Price: Number;
    Details: String;
    StartDate: Date;
    Email: String;
}

export const ScienceTechnologies = [
    {
        Id: 1,
        Name: "Robotics",
        Price: 100000,
        Details: "MindGame",
        StartDate: new Date("01/19/2023"),
        Email: "Robotics@gmail.com"
    },
    {
        Id: 2,
        Name: "Environmental",
        Price: 150000,
        Details: "breatheLiveEat",
        StartDate: new Date("01/20/2023"),
        Email: "Environmentalproject@gmail.com"
    },
    {
        Id: 3,
        Name: "Medical",
        Price: 200000,
        Details: "HumanBody",
        StartDate: new Date("01/21/2023"),
        Email: "medical@gamil.com"
    }


];

