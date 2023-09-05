'use strict'
/**
 * New Relic agent configuration.
 *
 * See lib/config/default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  newrelic_home: 'your_sec_home_path',
  /**
   * Array of application names.
   */
  // app_name: ['My Application'],
  /**
   * Your New Relic license key.
   */
  license_key: 'your_license_key',
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
    level: 'your_log_level'
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

  /**
   * Security Configurations
   */

  security: {
    /**
     * To completely disable security, set agent.enabled flag to false. If the flag is set to false,     the security module is not loaded. This property is read only once at application start.
     */
    agent: {
      enabled: agent_enabled_flag 
    },

    /**
     * enables/disables security agent functions and generation of events.
     */
    enabled: security_enabled_flag,

    /**
     *  NR security provides two modes IAST and RASP. Default is IAST
     */
    mode: 'RASP',

    /**
     * New Relic's SaaS connection URLs
     */
    validator_service_url: 'your_validator_system_ip',

    /**
     * Following category of security events can be disabled from generating.
     */
    detection: {
      rci: {
        enabled: true
      },
      rxss: {
        enabled: true
      },
      deserialization: {
        enabled: true
      }
    }
  }
}
