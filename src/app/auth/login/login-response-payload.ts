export interface LoginResponsePayload {
    authenticationToken: string;
    expiresAt: string;
    refreshToken: string;
    userName: string
}