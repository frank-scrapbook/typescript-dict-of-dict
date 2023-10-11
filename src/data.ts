import { Environments } from "./interfaces"

const environments: Environments = {
  dev: {
    env1: [
      {
        ruleName: "DevEnv1Rule1",
        event_bus: "arn:event_bus_example",
      },
      {
        ruleName: "DevEnv1Rule2",
        event_bus: "arn:event_bus_example",
        eventPattern: {
          source: ["example.source"],
          detailType: ["example.detailType"],
        },
        // Add more rules as needed
      },
    ],
    env2: [
      {
        ruleName: "DevEnv2Rule1",
        event_bus: "arn:event_bus_example",
        eventPattern: {
          source: ["example.source"],
          detailType: ["example.detailType"],
        },
        // Add more rules as needed
      },
    ],
  },
  staging: {
    env1: [
      {
        ruleName: "StagingEnv1Rule1",
        event_bus: "arn:event_bus_example",
      },
      // Add more rules as needed
    ],
    env2: [
      {
        ruleName: "StagingEnv2Rule1",
        event_bus: "arn:event_bus_example",
        eventPattern: {
          source: ["staging.source"],
          detailType: ["staging.detailType"],
        },
        // Add more rules as needed
      },
    ],
  },
}

export { environments }
