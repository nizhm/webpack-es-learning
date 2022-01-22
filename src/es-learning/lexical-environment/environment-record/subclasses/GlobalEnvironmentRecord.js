/**
 * A global Environment Record is used to represent the outer most scope
 * that is shared by all of the ECMAScript Script elements that are processed in a common Realm
 * @class GlobalEnvironmentRecord
 * @since 20220122
 * @author nizhm
 * */
class GlobalEnvironmentRecord extends EnvironmentRecord{
  // additional fields
  /**
   * Binding object is the global object
   * @property {ObjectEnvironmentRecord} ObjectRecord [[ObjectRecord]]
   * */
  ObjectRecord;

  /**
   * Contains bindings for all declarations in global code for the associated Realm code
   * except for FunctionDeclaration, GeneratorDeclaration, and VariableDeclaration bindings
   * @property {DeclarativeEnvironmentRecord} DeclarativeRecord [[DeclarativeRecord]]
   * */
  DeclarativeRecord;

  /**
   * The string names bound by FunctionDeclaration, GeneratorDeclaration,
   * and VariableDeclaration declarations in global code for the associated Realm
   * @property {<<String>>} VarNames [[VarNames]]
   * */
  VarNames;

  HasBinding(N) {}

  CreateMutableBinding(N, D) {}

  CreateImmutableBinding(N, S) {}

  InitializeBinding(N, V) {}

  SetMutableBingding(N, V, S) {}

  GetBindingValue(N, S) {}

  DeleteBinding(N) {}

  HasThisBinding() {}

  HasSuperBinding() {}

  WithBaseObject() {}

  // additional methods
  GetThisBinding() {}

  HasVarDeclaration(N) {}

  HasLexicalDeclaration(N) {}

  HasRestrictedGlobalProperty(N) {}

  CanDeclareGlobalVar(N) {}

  CanDeclareGlobalFunction(N) {}

  CreateGlobalVarBinding(N, D) {}

  CreateGlobalFunctionBinding(N, V, D) {}
}