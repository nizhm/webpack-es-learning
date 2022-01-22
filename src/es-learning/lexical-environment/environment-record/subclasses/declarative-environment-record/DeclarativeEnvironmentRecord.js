/**
 * Each declarative Environment Record is associated with an ECMAScript program scope
 * A declarative Environment Record binds the set of identifiers defined by the declarations contained within its scope
 * @member [variable,constant,let,class,module,import,function declarations] - scope containing
 * @since 20220122
 * @author nizhm
 * */
class DeclarativeEnvironmentRecord extends EnvironmentRecord{
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
}