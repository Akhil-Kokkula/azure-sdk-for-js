// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Constants } from "./constants.js";

/**
 * @hidden
 */
export function getUserAgent(suffix?: string, hostFramework?: string): string {
  let ua = `${userAgentDetails()} ${Constants.SDKName}/${Constants.SDKVersion}`;
  if (hostFramework) {
    ua = ua + " " + hostFramework;
  }
  if (suffix) {
    ua = ua + " " + suffix;
  }

  return ua;
}

// TODO: Standardize across other platforms from @azure/core-util
function userAgentDetails(): string {
  let userAgentDetail = "<environment undetectable>";

  if (globalThis.navigator && globalThis.navigator.userAgent) {
    userAgentDetail = globalThis.navigator.userAgent;
  }

  if (globalThis.process && globalThis.process.version) {
    userAgentDetail = `Node.js/${process.version.slice(1)} (${process.platform}; ${process.arch})`;
  }

  return userAgentDetail;
}
