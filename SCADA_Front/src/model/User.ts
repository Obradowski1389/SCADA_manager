export interface User{
    Username: string,
    Password: string,
    Email: string,
    Role: number
}

export interface LoginDTO{
    Username: string,
    Password: string
}