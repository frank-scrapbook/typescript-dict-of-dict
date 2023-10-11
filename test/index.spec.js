"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../src/helper");
describe('Event Rules Tests', () => {
    const devEnv = [
        {
            ruleName: 'DevEnv1Rule1',
            event_bus: 'arn:example_event_bus',
        },
        {
            ruleName: 'DevEnv1Rule2',
            eventPattern: {
                source: ['example.source'],
                detailType: ['example.detailType'],
            },
        },
    ];
    const stagingEnv = [
        {
            ruleName: 'StagingEnv1Rule1',
            event_bus: 'arn:example_event_bus',
        },
        {
            ruleName: 'StagingEnv2Rule1',
            eventPattern: {
                source: ['staging.source'],
                detailType: ['staging.detailType'],
            },
        },
    ];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const testEnvironments = {
        dev: { env1: devEnv },
        staging: { env1: stagingEnv },
    };
    it('should create event rules for dev environment', () => {
        const environmentName = 'dev';
        const subEnv = 'env1';
        const rules = devEnv;
        for (const rule of rules) {
            (0, helper_1.createEventRule)(environmentName, subEnv, rule);
            // You can modify this to assert the creation of event rules in a more detailed way if needed
        }
    });
    it('should create event rules for staging environment', () => {
        const environmentName = 'staging';
        const subEnv = 'env1';
        const rules = stagingEnv;
        for (const rule of rules) {
            (0, helper_1.createEventRule)(environmentName, subEnv, rule);
            // You can modify this to assert the creation of event rules in a more detailed way if needed
        }
    });
});
