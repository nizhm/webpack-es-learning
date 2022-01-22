/**
 * abstract operations are used in the ES specification to operate lexical environments
 * @class LexicalEnvironmentOperation
 * @since 20220122
 * @author nizhm
 * */
class LexicalEnvironmentOperation {
  GetIdentifierReference(lex, name, strict) {}

  NewDeclarativeEnvironment(E) {}

  NewObjectEnvironment(O, E) {}

  NewFunctionEnvironment(F, newTarget) {}

  NewGlobalEnvironment(G) {}

  NewModuleEnvironment(E) {}
}