import { Component, Input } from '@angular/core';
export class UserProfileComponent {
    constructor() {
        this.userProfile = null;
    }
    ngOnInit() {
    }
}
UserProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-user-profile',
                template: "<div>\n  <div>Username: {{userProfile?.username}}</div>\n  <div>Display Name: {{userProfile?.displayName}}</div>\n  <div>Roles: {{userProfile?.roles?.join(', ')}}</div>\n</div>",
                styles: [""]
            },] }
];
UserProfileComponent.ctorParameters = () => [];
UserProfileComponent.propDecorators = {
    userProfile: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy91c2VyLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN6RCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CO1FBRk8sZ0JBQVcsR0FBdUIsSUFBSSxDQUFDO0lBRTlCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw0TEFBNEM7O2FBRTdDOzs7OzBCQUdFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvVXNlclByb2ZpbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdXNlci1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXNlclByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB1c2VyUHJvZmlsZTogVXNlclByb2ZpbGUgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==