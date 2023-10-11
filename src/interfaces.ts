interface EventRuleConfig {
  ruleName: string;
  event_bus?: string;
  eventPattern?: {
    source?: string[];
    detailType?: string[];
  };
}

interface Environment {
  [subEnv: string]: EventRuleConfig[];
}

interface Environments {
  [environment: string]: Environment;
}

export { EventRuleConfig, Environment, Environments };
