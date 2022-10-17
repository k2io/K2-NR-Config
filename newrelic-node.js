'use strict'
/**
 * New Relic agent configuration.
 *
 * See lib/config/default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  host: "staging-collector.newrelic.com",
  /**
   * Array of application names.
   */
  app_name: ['My Application'],
  /**
   * Your New Relic license key.
   */
  license_key: 'license key here',
  /**
   * This setting controls distributed tracing.
   * Distributed tracing lets you see the path that a request takes through your
   * distributed system. Enabling distributed tracing changes the behavior of some
   * New Relic features, so carefully consult the transition guide before you enable
   * this feature: https://docs.newrelic.com/docs/transition-guide-distributed-tracing
   * Default is false.
   */
  distributed_tracing: {
    /**
     * Enables/disables distributed tracing.
     *
     * @env NEW_RELIC_DISTRIBUTED_TRACING_ENABLED
     */
    enabled: true
  },
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'trace'
  },
  /**
   * When true, all request headers except for those listed in attributes.exclude
   * will be captured for all traces, unless otherwise specified in a destination's
   * attributes include/exclude lists.
   */
  allow_all_headers: true,
  attributes: {
    /**
     * Prefix of attributes to exclude from all destinations. Allows * as wildcard
     * at end.
     *
     * NOTE: If excluding headers, they must be in camelCase form to be filtered.
     *
     * @env NEW_RELIC_ATTRIBUTES_EXCLUDE
     */
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*'
    ]
  },
  // specific to K2
  security: {
    enable: true,
    sec_home_path: require('path').join(process.cwd(), 'k2home'),
    sec_log_file_name: require('path').join(process.cwd(), 'k2home', 'logs', 'security_agent.log'),
    mode: 'RASP',
    log_level: 'INFO',
    validator_service_endpoint_url: 'ws://your_validator_system_ip:54321',
    resource_service_endpoint_url: 'http://your_validator_system_ip:54322',
    force_complete_disable: false,
    detection: {
      disable_rci: false,
      disable_rxss: false,
      disable_desearlization: false
    },
    policy: {
      enforce: false,
      vulnerabilityScan: {
        enabled: false,
        iastScan: {
          enabled: false,
          probing: {
            interval: 1,
            batchSize: 5
          }
        }
      },
      protectionMode: {
        enabled: false,
        ipBlocking: {
          enabled: false,
          attackerIpBlocking: false,
          ipDetectViaXFF: false
        },
        apiBlocking: {
          enabled: false,
          protectAllApis: false,
          protectKnownVulnerableApis: false,
          protectAttackedApis: false
        }
      }
    }
  }
}

