/**
 * A module Environment Record is used to represent the outer scope of an ECMAScript Module
 * In additional to normal mutable and immutable bindings,
 * module Environment Records also provide immutable import bindings which are bindings,
 * that provide indirect access to a target binding that exists in another Environment Record
 * @class ModuleEnvironmentRecord
 * @since 20220122
 * @author nizhm
 * */
class ModuleEnvironmentRecord extends DeclarativeEnvironmentRecord{
  GetBindingValue(N, S) {
    super.GetBindingValue(N, S);
  }

  DeleteBinding(N) {
    super.DeleteBinding(N);
  }

  HasThisBinding() {
    super.HasThisBinding();
  }

  // additional methods
  /**
   * Create an immutable indirect binding in a module Environment Record
   * @param {String} N bound name
   * @param {ModuleRecord} M module record
   * @param {binding} N2 a binding in M’s module Environment Record
   * @return {Object} an immutable indirect binding
   * */
  CreateImportBinding(N, M, N2) {}

  /**
   * Return the value of this Environment Record’s this binding
   * @return {Object} this
   * */
  GetThisBinding() {}
}