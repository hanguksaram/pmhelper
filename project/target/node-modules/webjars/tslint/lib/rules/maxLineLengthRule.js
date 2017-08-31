/**
 * @license
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tsutils_1 = require("tsutils");
var Lint = require("../index");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.isEnabled = function () {
        return _super.prototype.isEnabled.call(this) && this.ruleArguments[0] > 0;
    };
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.ruleArguments[0]);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "max-line-length",
    description: "Requires lines to be under a certain max length.",
    rationale: (_a = ["\n            Limiting the length of a line of code improves code readability.\n            It also makes comparing code side-by-side easier and improves compatibility with\n            various editors, IDEs, and diff viewers."], _a.raw = ["\n            Limiting the length of a line of code improves code readability.\n            It also makes comparing code side-by-side easier and improves compatibility with\n            various editors, IDEs, and diff viewers."], Lint.Utils.dedent(_a)),
    optionsDescription: "An integer indicating the max length of lines.",
    options: {
        type: "number",
        minimum: "1",
    },
    optionExamples: ["[true, 120]"],
    type: "maintainability",
    typescriptOnly: false,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING_FACTORY = function (lineLimit) {
    return "Exceeds maximum line length of " + lineLimit;
};
exports.Rule = Rule;
function walk(ctx) {
    var limit = ctx.options;
    for (var _i = 0, _a = tsutils_1.getLineRanges(ctx.sourceFile); _i < _a.length; _i++) {
        var line = _a[_i];
        if (line.contentLength > limit) {
            ctx.addFailureAt(line.pos, line.contentLength, Rule.FAILURE_STRING_FACTORY(limit));
        }
    }
}
var _a;
