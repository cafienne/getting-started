'use strict';

import { assertPlanItem } from "@cafienne/typescript-client";
import CaseTeam from "@cafienne/typescript-client/cmmn/team/caseteam";
import CaseTeamUser, { CaseOwner } from "@cafienne/typescript-client/cmmn/team/caseteamuser";
import CaseService from "@cafienne/typescript-client/service/case/caseservice";
import RepositoryService from "@cafienne/typescript-client/service/case/repositoryservice";
import State from '@cafienne/typescript-client/cmmn/state';
import TestTenant from "./testtenant";

// global setup
const helloWorldDefinition = 'HelloWorld.xml';
const testTenant = new TestTenant();
const tenant = testTenant.name;
const partner = testTenant.partner;
const employee = testTenant.employee;

describe('HelloWorldTest', async function () {
    const caseTeam = new CaseTeam([
        new CaseOwner(employee),
        new CaseTeamUser(partner),
    ]);

    this.beforeAll(async function () {
        await testTenant.create();
        await RepositoryService.validateAndDeploy(partner, helloWorldDefinition, tenant);
    });

    it('CreateAndCompleteCase', async function () {
        const startCase = { tenant, definition: helloWorldDefinition, inputs:{}, caseTeam, debug: true };

        var caseInstance = await CaseService.startCase(employee, startCase);
        console.log(caseInstance);

        await assertPlanItem(employee, caseInstance.id, "HelloWorld", 0, State.Completed);
     });
});