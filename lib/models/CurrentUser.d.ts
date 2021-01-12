export declare class CurrentUser {
    username: string;
    userKind: string;
    displayName: string;
    roles: string[];
    constructor(username: string, userKind: string, displayName: string);
    addRole(roleName: string): CurrentUser;
    hasRole(roleNames: string[]): boolean;
}
