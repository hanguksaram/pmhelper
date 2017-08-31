import * as ts from 'typescript';
export declare function isAccessorDeclaration(node: ts.Node): node is ts.AccessorDeclaration;
export declare function isArrayBindingPattern(node: ts.Node): node is ts.ArrayBindingPattern;
export declare function isArrayLiteralExpression(node: ts.Node): node is ts.ArrayLiteralExpression;
export declare function isArrayTypeNode(node: ts.Node): node is ts.ArrayTypeNode;
export declare function isArrowFunction(node: ts.Node): node is ts.ArrowFunction;
export declare function isAsExpression(node: ts.Node): node is ts.AsExpression;
export declare function isAssertionExpression(node: ts.Node): node is ts.AssertionExpression;
export declare function isAwaitExpression(node: ts.Node): node is ts.AwaitExpression;
export declare function isBinaryExpression(node: ts.Node): node is ts.BinaryExpression;
export declare function isBindingElement(node: ts.Node): node is ts.BindingElement;
export declare function isBindingPattern(node: ts.Node): node is ts.BindingPattern;
export declare function isBlock(node: ts.Node): node is ts.Block;
export declare function isBlockLike(node: ts.Node): node is ts.BlockLike;
export declare function isBreakOrContinueStatement(node: ts.Node): node is ts.BreakOrContinueStatement;
export declare function isBreakStatement(node: ts.Node): node is ts.BreakStatement;
export declare function isCallExpression(node: ts.Node): node is ts.CallExpression;
export declare function isCallSignatureDeclaration(node: ts.Node): node is ts.CallSignatureDeclaration;
export declare function isCaseBlock(node: ts.Node): node is ts.CaseBlock;
export declare function isCaseClause(node: ts.Node): node is ts.CaseClause;
export declare function isCaseOrDefaultClause(node: ts.Node): node is ts.CaseOrDefaultClause;
export declare function isCatchClause(node: ts.Node): node is ts.CatchClause;
export declare function isClassDeclaration(node: ts.Node): node is ts.ClassDeclaration;
export declare function isClassExpression(node: ts.Node): node is ts.ClassExpression;
export declare function isClassLikeDeclaration(node: ts.Node): node is ts.ClassLikeDeclaration;
export declare function isConditionalExpression(node: ts.Node): node is ts.ConditionalExpression;
export declare function isConstructorDeclaration(node: ts.Node): node is ts.ConstructorDeclaration;
export declare function isConstructorTypeNode(node: ts.Node): node is ts.ConstructorTypeNode;
export declare function isConstructSignatureDeclaration(node: ts.Node): node is ts.ConstructSignatureDeclaration;
export declare function isContinueStatement(node: ts.Node): node is ts.ContinueStatement;
export declare function isComputedPropertyName(node: ts.Node): node is ts.ComputedPropertyName;
export declare function isDebuggerStatement(node: ts.Node): node is ts.DebuggerStatement;
export declare function isDefaultClause(node: ts.Node): node is ts.DefaultClause;
export declare function isDoStatement(node: ts.Node): node is ts.DoStatement;
export declare function isElementAccessExpression(node: ts.Node): node is ts.ElementAccessExpression;
export declare function isEmptyStatement(node: ts.Node): node is ts.EmptyStatement;
export declare function isEntityName(node: ts.Node): node is ts.EntityName;
export declare function isEntityNameExpression(node: ts.Node): node is ts.EntityNameExpression;
export declare function isEnumDeclaration(node: ts.Node): node is ts.EnumDeclaration;
export declare function isEnumMember(node: ts.Node): node is ts.EnumMember;
export declare function isExportAssignment(node: ts.Node): node is ts.ExportAssignment;
export declare function isExportDeclaration(node: ts.Node): node is ts.ExportDeclaration;
export declare function isExportSpecifier(node: ts.Node): node is ts.ExportSpecifier;
export declare function isExpressionStatement(node: ts.Node): node is ts.ExpressionStatement;
export declare function isExpressionWithTypeArguments(node: ts.Node): node is ts.ExpressionWithTypeArguments;
export declare function isExternalModuleReference(node: ts.Node): node is ts.ExternalModuleReference;
export declare function isForInStatement(node: ts.Node): node is ts.ForInStatement;
export declare function isForOfStatement(node: ts.Node): node is ts.ForOfStatement;
export declare function isForStatement(node: ts.Node): node is ts.ForStatement;
export declare function isFunctionDeclaration(node: ts.Node): node is ts.FunctionDeclaration;
export declare function isFunctionExpression(node: ts.Node): node is ts.FunctionExpression;
export declare function isFunctionTypeNode(node: ts.Node): node is ts.FunctionTypeNode;
export declare function isGetAccessorDeclaration(node: ts.Node): node is ts.GetAccessorDeclaration;
export declare function isIdentifier(node: ts.Node): node is ts.Identifier;
export declare function isIfStatement(node: ts.Node): node is ts.IfStatement;
export declare function isImportClause(node: ts.Node): node is ts.ImportClause;
export declare function isImportDeclaration(node: ts.Node): node is ts.ImportDeclaration;
export declare function isImportEqualsDeclaration(node: ts.Node): node is ts.ImportEqualsDeclaration;
export declare function isImportSpecifier(node: ts.Node): node is ts.ImportSpecifier;
export declare function isIndexSignatureDeclaration(node: ts.Node): node is ts.IndexSignatureDeclaration;
export declare function isInterfaceDeclaration(node: ts.Node): node is ts.InterfaceDeclaration;
export declare function isIterationStatement(node: ts.Node): node is ts.IterationStatement;
export declare function isJsxAttribute(node: ts.Node): node is ts.JsxAttribute;
export declare function isJsxAttributeLike(node: ts.Node): node is ts.JsxAttributeLike;
export declare function isJsxClosingElement(node: ts.Node): node is ts.JsxClosingElement;
export declare function isJsxElement(node: ts.Node): node is ts.JsxElement;
export declare function isJsxExpression(node: ts.Node): node is ts.JsxExpression;
export declare function isJsxOpeningElement(node: ts.Node): node is ts.JsxOpeningElement;
export declare function isJsxOpeningLikeElement(node: ts.Node): node is ts.JsxOpeningLikeElement;
export declare function isJsxSelfClosingElement(node: ts.Node): node is ts.JsxSelfClosingElement;
export declare function isJsxSpreadAttribute(node: ts.Node): node is ts.JsxSpreadAttribute;
export declare function isJsxText(node: ts.Node): node is ts.JsxText;
export declare function isLabeledStatement(node: ts.Node): node is ts.LabeledStatement;
export declare function isLiteralExpression(node: ts.Node): node is ts.LiteralExpression;
export declare function isMethodDeclaration(node: ts.Node): node is ts.MethodDeclaration;
export declare function isMethodSignature(node: ts.Node): node is ts.MethodSignature;
export declare function isModuleBlock(node: ts.Node): node is ts.ModuleBlock;
export declare function isModuleDeclaration(node: ts.Node): node is ts.ModuleDeclaration;
export declare function isNamedExports(node: ts.Node): node is ts.NamedExports;
export declare function isNamedImports(node: ts.Node): node is ts.NamedImports;
export declare function isNamespaceDeclaration(node: ts.Node): node is ts.NamespaceDeclaration;
export declare function isNamespaceImport(node: ts.Node): node is ts.NamespaceImport;
export declare function isNamespaceExportDeclaration(node: ts.Node): node is ts.NamespaceExportDeclaration;
export declare function isNewExpression(node: ts.Node): node is ts.NewExpression;
export declare function isNonNullExpression(node: ts.Node): node is ts.NonNullExpression;
export declare function isNoSubstitutionTemplateLiteral(node: ts.Node): node is ts.NoSubstitutionTemplateLiteral;
export declare function isNumericLiteral(node: ts.Node): node is ts.NumericLiteral;
export declare function isNumericliteral(node: ts.Node): node is ts.NumericLiteral;
export declare function isObjectBindingPattern(node: ts.Node): node is ts.ObjectBindingPattern;
export declare function isObjectLiteralExpression(node: ts.Node): node is ts.ObjectLiteralExpression;
export declare function isOmittedExpression(node: ts.Node): node is ts.OmittedExpression;
export declare function isParameterDeclaration(node: ts.Node): node is ts.ParameterDeclaration;
export declare function isParenthesizedExpression(node: ts.Node): node is ts.ParenthesizedExpression;
export declare function isPostfixUnaryExpression(node: ts.Node): node is ts.PostfixUnaryExpression;
export declare function isPrefixUnaryExpression(node: ts.Node): node is ts.PrefixUnaryExpression;
export declare function isPropertyAccessExpression(node: ts.Node): node is ts.PropertyAccessExpression;
export declare function isPropertyAssignment(node: ts.Node): node is ts.PropertyAssignment;
export declare function isPropertyDeclaration(node: ts.Node): node is ts.PropertyDeclaration;
export declare function isPropertySignature(node: ts.Node): node is ts.PropertySignature;
export declare function isQualifiedName(node: ts.Node): node is ts.QualifiedName;
export declare function isRegularExpressionLiteral(node: ts.Node): node is ts.RegularExpressionLiteral;
export declare function isReturnStatement(node: ts.Node): node is ts.ReturnStatement;
export declare function isSetAccessorDeclaration(node: ts.Node): node is ts.SetAccessorDeclaration;
export declare function isShorthandPropertyAssignment(node: ts.Node): node is ts.ShorthandPropertyAssignment;
export declare function isSignatureDeclaration(node: ts.Node): node is ts.SignatureDeclaration;
export declare function isSourceFile(node: ts.Node): node is ts.SourceFile;
export declare function isSpreadAssignment(node: ts.Node): node is ts.SpreadAssignment;
export declare function isSpreadElement(node: ts.Node): node is ts.SpreadElement;
export declare function isStringLiteral(node: ts.Node): node is ts.StringLiteral;
export declare function isSwitchStatement(node: ts.Node): node is ts.SwitchStatement;
export declare function isSyntaxList(node: ts.Node): node is ts.SyntaxList;
export declare function isTaggedTemplateExpression(node: ts.Node): node is ts.TaggedTemplateExpression;
export declare function isTemplateExpression(node: ts.Node): node is ts.TemplateExpression;
export declare function isTemplateLiteral(node: ts.Node): node is ts.TemplateLiteral;
export declare function isTextualLiteral(node: ts.Node): node is ts.LiteralExpression;
export declare function isThrowStatement(node: ts.Node): node is ts.ThrowStatement;
export declare function isTryStatement(node: ts.Node): node is ts.TryStatement;
export declare function isTupleTypeNode(node: ts.Node): node is ts.TupleTypeNode;
export declare function isTypeAliasDeclaration(node: ts.Node): node is ts.TypeAliasDeclaration;
export declare function isTypeAssertion(node: ts.Node): node is ts.TypeAssertion;
export declare function isTypeLiteralNode(node: ts.Node): node is ts.TypeLiteralNode;
export declare function isTypeOfExpression(node: ts.Node): node is ts.TypeOfExpression;
export declare function isTypeParameterDeclaration(node: ts.Node): node is ts.TypeParameterDeclaration;
export declare function isTypeReferenceNode(node: ts.Node): node is ts.TypeReferenceNode;
export declare function isVariableDeclaration(node: ts.Node): node is ts.VariableDeclaration;
export declare function isVariableStatement(node: ts.Node): node is ts.VariableStatement;
export declare function isVariableDeclarationList(node: ts.Node): node is ts.VariableDeclarationList;
export declare function isVoidExpression(node: ts.Node): node is ts.VoidExpression;
export declare function isWhileStatement(node: ts.Node): node is ts.WhileStatement;
export declare function isWithStatement(node: ts.Node): node is ts.WithStatement;
