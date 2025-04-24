export interface UserData {
    userName:string;
    password:string;
}

export interface RegisterUser extends UserData{
    confirmPassword:string;
}