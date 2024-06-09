interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yeasrsOfExperiacnce?: number,
    location: string,
    [key: string]: any,
}
