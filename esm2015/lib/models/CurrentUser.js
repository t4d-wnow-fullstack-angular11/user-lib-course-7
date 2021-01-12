import { intersection } from 'lodash-es';
export class CurrentUser {
    constructor(username, userKind, displayName) {
        this.username = username;
        this.userKind = userKind;
        this.displayName = displayName;
        this.roles = [];
    }
    addRole(roleName) {
        if (!roleName)
            throw new Error('role name cannot be empty');
        this.roles.push(roleName);
        return this;
    }
    hasRole(roleNames) {
        return intersection(this.roles, roleNames).length > 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VycmVudFVzZXIuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvdXNlci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9DdXJyZW50VXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXpDLE1BQU0sT0FBTyxXQUFXO0lBT3RCLFlBQVksUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFdBQW1CO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxPQUFPLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxDQUFDLFFBQVE7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sT0FBTyxDQUFDLFNBQW1CO1FBQ2hDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnRlcnNlY3Rpb24gfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgY2xhc3MgQ3VycmVudFVzZXIge1xuXG4gIHB1YmxpYyB1c2VybmFtZTogc3RyaW5nO1xuICBwdWJsaWMgdXNlcktpbmQ6IHN0cmluZztcbiAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyByb2xlczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IodXNlcm5hbWU6IHN0cmluZywgdXNlcktpbmQ6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZykge1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB0aGlzLnVzZXJLaW5kID0gdXNlcktpbmQ7XG4gICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIHRoaXMucm9sZXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRSb2xlKHJvbGVOYW1lOiBzdHJpbmcpOiBDdXJyZW50VXNlciB7XG4gICAgaWYgKCFyb2xlTmFtZSkgdGhyb3cgbmV3IEVycm9yKCdyb2xlIG5hbWUgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgdGhpcy5yb2xlcy5wdXNoKHJvbGVOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBoYXNSb2xlKHJvbGVOYW1lczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0aW9uKHRoaXMucm9sZXMsIHJvbGVOYW1lcykubGVuZ3RoID4gMDtcbiAgfVxuXG59Il19