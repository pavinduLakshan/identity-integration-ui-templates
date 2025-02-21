/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const APPLICATION = "application";
const CONNECTION = "connection";

const ALLOWED_INTEGRATION_TYPES = [
    APPLICATION,
    CONNECTION
];

const INTEGRATION_PLURAL = {
    "application": "applications",
    "connection": "connections"
}

const MAJOR = "major";
const MINOR = "minor";
const PATCH = "patch";

const RELEASE_TYPES = [ MAJOR, MINOR, PATCH ];

module.exports = { 
    APPLICATION,
    CONNECTION,
    ALLOWED_INTEGRATION_TYPES,
    INTEGRATION_PLURAL,
    MAJOR,
    MINOR,
    PATCH,
    RELEASE_TYPES
}
