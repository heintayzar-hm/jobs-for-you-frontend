
export interface UserLoginDetails {
    readonly email: string
    readonly password: string
}

export interface UserRegisterDetails {
    readonly name: string
    readonly email: string
    readonly password: string
    readonly confirmPassword: string
}



export type ValidateionError = {
    email: string;
    password: string;
    confirmPassword?: string;
    name?: string;
}

export type Header = {
    'access-token': string;
    'token-type': string;
    client: string;
    expiry: string;
    uid: string;
}

export type UserLoginResponse = {
    attributes: {
        id: number;
        email: string;
    },
    header: Header;
}


export interface UserState {
     isSignedIn: boolean;
     loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    attributes: UserLoginResponse['attributes'];
    errors: string[];
     header: Header;
}

export interface UserData {
    id: number;
    email: string;
    name: string;
}

export interface UsersResponseType {
    attributes: UserData[];
    status: number;
}

export interface UsersState {
    users: UserData[];
    errors: string[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    user: UserData;
}


