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
var ts = require("typescript");
var Lint = require("../index");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "no-empty",
    description: "Disallows empty blocks.",
    descriptionDetails: "Blocks with a comment inside are not considered empty.",
    rationale: "Empty blocks are often indicators of missing code.",
    optionsDescription: "Not configurable.",
    options: null,
    optionExamples: ["true"],
    type: "functionality",
    typescriptOnly: false,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING = "block is empty";
exports.Rule = Rule;
function walk(ctx) {
    return ts.forEachChild(ctx.sourceFile, function cb(node) {
        if (node.kind === ts.SyntaxKind.Block &&
            node.statements.length === 0 &&
            !isExcludedConstructor(node.parent)) {
            var start = node.getStart(ctx.sourceFile);
            // Block always starts with open brace. Adding 1 to its start gives us the end of the brace,
            // which can be used to conveniently check for comments between braces
            if (Lint.hasCommentAfterPosition(ctx.sourceFile.text, start + 1)) {
                return;
            }
            return ctx.addFailure(start, node.end, Rule.FAILURE_STRING);
        }
        return ts.forEachChild(node, cb);
    });
}
function isExcludedConstructor(node) {
    return tsutils_1.isConstructorDeclaration(node) &&
        (
        /* If constructor is private or protected, the block is allowed to be empty.
           The constructor is there on purpose to disallow instantiation from outside the class */
        /* The public modifier does not serve a purpose here. It can only be used to allow instantiation of a base class where
           the super constructor is protected. But then the block would not be empty, because of the call to super() */
        tsutils_1.hasModifier(node.modifiers, ts.SyntaxKind.PrivateKeyword, ts.SyntaxKind.ProtectedKeyword) ||
            node.parameters.some(tsutils_1.isParameterProperty));
}
