'use strict';

import { TenantOwner } from "@cafienne/typescript-client";
import PlatformService from "@cafienne/typescript-client/service/platform/platformservice";
import Tenant from "@cafienne/typescript-client/tenant/tenant";
import TenantUser from "@cafienne/typescript-client/tenant/tenantuser";
import User from "@cafienne/typescript-client/user";

const rolePartner = 'Partner';
const roleEmployee = 'Employee';
 
export default class TestTenant {
    partner = new TenantOwner('partner-pete', [rolePartner], 'Pete', 'pete@all.com');
    employee = new TenantUser('employee-eddy', [roleEmployee], 'Eddy', 'no email address');

    tenant: Tenant = new Tenant(this.name, [this.partner, this.employee]);

    constructor(
        public readonly name: string = 'Test-Tenant', 
        public platformAdmin: User = new User('admin')) {
    }

    /**
     * Creates the tenant, and logs in for sender user and receiver user.
     */
    async create() {
        await this.platformAdmin.login();
        await PlatformService.createTenant(this.platformAdmin, this.tenant);
        await this.partner.login();
        await this.employee.login();
    }
}