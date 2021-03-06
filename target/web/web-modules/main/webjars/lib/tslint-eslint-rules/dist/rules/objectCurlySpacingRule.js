"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts = require("typescript");
var Lint = require("tslint");
var OPTION_ALWAYS = 'always';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new ObjectCurlySpacingWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
Rule.FAILURE_STRING = {
    always: {
        start: "A space is required after '{'",
        end: "A space is required before '}'"
    },
    never: {
        start: "There should be no space after '{'",
        end: "There should be no space before '}'"
    }
};
exports.Rule = Rule;
var ObjectCurlySpacingWalker = (function (_super) {
    __extends(ObjectCurlySpacingWalker, _super);
    function ObjectCurlySpacingWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.always = _this.hasOption(OPTION_ALWAYS) || (_this.getOptions() && _this.getOptions().length === 0);
        return _this;
    }
    ObjectCurlySpacingWalker.prototype.visitNode = function (node) {
        var bracedKind = [
            ts.SyntaxKind.ObjectLiteralExpression,
            ts.SyntaxKind.ObjectBindingPattern,
            ts.SyntaxKind.NamedImports,
            ts.SyntaxKind.NamedExports
        ];
        if (bracedKind.indexOf(node.kind) > -1) {
            this.checkSpacingInsideBraces(node);
        }
        _super.prototype.visitNode.call(this, node);
    };
    ObjectCurlySpacingWalker.prototype.checkSpacingInsideBraces = function (node) {
        var text = node.getText();
        if (text.indexOf('\n') !== -1 || /^\{\s*\}$/.test(text)) {
            return;
        }
        var leadingSpace = text.match(/^\{(\s{0,2})/)[1].length;
        var trailingSpace = text.match(/(\s{0,2})}$/)[1].length;
        if (this.always) {
            if (leadingSpace === 0) {
                var fix = this.createFix(this.appendText(node.getStart() + 1, ' '));
                this.addFailure(this.createFailure(node.getStart(), 1, Rule.FAILURE_STRING.always.start, fix));
            }
            if (trailingSpace === 0) {
                var fix = this.createFix(this.appendText(node.getEnd() - 1, ' '));
                this.addFailure(this.createFailure(node.getEnd() - 1, 1, Rule.FAILURE_STRING.always.end, fix));
            }
        }
        else {
            if (leadingSpace > 0) {
                var fix = this.createFix(this.deleteText(node.getStart() + 1, leadingSpace));
                this.addFailure(this.createFailure(node.getStart(), 1, Rule.FAILURE_STRING.never.start, fix));
            }
            if (trailingSpace > 0) {
                var fix = this.createFix(this.deleteText(node.getEnd() - trailingSpace - 1, trailingSpace));
                this.addFailure(this.createFailure(node.getEnd() - 1, 1, Rule.FAILURE_STRING.never.end, fix));
            }
        }
    };
    return ObjectCurlySpacingWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL29iamVjdEN1cmx5U3BhY2luZ1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQixJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUM7QUFFL0I7SUFBMEIsd0JBQXVCO0lBQWpEOztJQWdCQSxDQUFDO0lBSlEsb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksd0JBQXdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FoQkEsQUFnQkMsQ0FoQnlCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtBQUNqQyxtQkFBYyxHQUFHO0lBQzdCLE1BQU0sRUFBRTtRQUNOLEtBQUssRUFBRSwrQkFBK0I7UUFDdEMsR0FBRyxFQUFFLGdDQUFnQztLQUN0QztJQUNELEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxvQ0FBb0M7UUFDM0MsR0FBRyxFQUFFLHFDQUFxQztLQUMzQztDQUNGLENBQUM7QUFWUyxvQkFBSTtBQWtCakI7SUFBdUMsNENBQWU7SUFJcEQsa0NBQVksVUFBeUIsRUFBRSxPQUFzQjtRQUE3RCxZQUNFLGtCQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FFM0I7UUFEQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQzs7SUFDdkcsQ0FBQztJQUVTLDRDQUFTLEdBQW5CLFVBQW9CLElBQWE7UUFDL0IsSUFBTSxVQUFVLEdBQUc7WUFDakIsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUI7WUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0I7WUFDbEMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZO1lBQzFCLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWTtTQUMzQixDQUFDO1FBQ0YsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsaUJBQU0sU0FBUyxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTywyREFBd0IsR0FBaEMsVUFBaUMsSUFBYTtRQUM1QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4RCxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDMUQsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDMUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEcsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGFBQWEsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDOUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FsREEsQUFrREMsQ0FsRHNDLElBQUksQ0FBQyxVQUFVLEdBa0RyRCIsImZpbGUiOiJydWxlcy9vYmplY3RDdXJseVNwYWNpbmdSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L1dvcmtzcGFjZS90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
