import * as ts from "typescript";
import * as Lint from "../index";
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: Lint.IRuleMetadata;
    static FAILURE_STRING_FACTORY: (lineLimit: number) => string;
    isEnabled(): boolean;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
