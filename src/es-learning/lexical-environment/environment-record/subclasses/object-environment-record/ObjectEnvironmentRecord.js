/**
 * Each object Environment Record is associated with an object called its binding object
 * An object Environment Record binds the set of string identifier names that directly correspond to the property names of its binding object
 * Immutable bindings do not exist for object Environment Records
 * @member [with] - statement provides binding object
 * @since 20220122
 * @author nizhm
 * */
class ObjectEnvironmentRecord extends EnvironmentRecord{
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