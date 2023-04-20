import { Dispatch } from "react"

export type SIGNIN_REQUEST_SENT = 'redux-token-auth/SIGNIN_REQUEST_SENT'
export const SIGNIN_REQUEST_SENT: SIGNIN_REQUEST_SENT = 'redux-token-auth/SIGNIN_REQUEST_SENT'




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

export interface MyKnownError {
    errorMessage: string
    // ...
  }

export interface SignInRequestSentAction {
    readonly type: SIGNIN_REQUEST_SENT
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
    errors: MyKnownError[] | [];
     header: Header;
}


