import { EventRuleConfig } from "./interfaces"

function createEventRule( environmentName: string, subEnv: string, rule: EventRuleConfig) {
  console.log(`Created event rule in ${environmentName} - ${subEnv}: ${rule.ruleName}`)
  // You can perform further actions here, such as setting up your event rules.
  if (rule.eventPattern && rule.eventPattern.source && rule.eventPattern.detailType) {
    console.log(`Rule Event Pattern - Source: ${rule.eventPattern.source.toString()}`)
    console.log(`Rule Event Pattern - DetailType: ${rule.eventPattern.detailType.toString()}`)
  }
}

export { createEventRule }
