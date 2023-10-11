import { environments } from "./data"
import { createEventRule } from "./helper"
import { Environment, Environments } from "./interfaces"

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const envs: Environments = environments

// Create event rules for all environments
for (const env in envs) {
  const environment: Environment = envs[env]
  for (const subEnv in environment) {
    for (const rule of environment[subEnv]) {
      createEventRule(env, subEnv, rule)
    }
  }
}
