/**
 * thought of an object-oriented hierarchy for EnvironmentRecord
 * @abstract
 * @class EnvironmentRecord
 * @typedef {Object} Binding - an Object-like ES Specification type
 * @since 20220122
 * @author nizhm
 * */

class EnvironmentRecord {
  /**
   * Determine if an Environment Record has a binding for the String value N
   * @param {String} N string value
   * @return {Boolean} true if it does and false if it does not
   * */
  HasBinding(N) {}

  /**
   * Create a new but uninitialized mutable binding in an Environment Record
   * @param {String} N bound name
   * @param {Boolean} [D] if the binding is may be subsequently deleted
   * @return {Binding} a new but uninitialized mutable binding
   * */
  CreateMutableBinding(N, D) {}

  /**
   * Create a new but uninitialized immutable binding in an Environment Record
   * @param {String} N bound name
   * @param {Boolean} [S = false] if true then attempts to access the value of the binding before it is initialized,
   * or set it after it has been initialized will always throw an exception,
   * regardless of the strict mode setting of operations that reference that binding
   * @return {Binding} a new but uninitialized immutable binding
   * */
  CreateImmutableBinding(N, S) {}

  /**
   * Set the value of an already existing but uninitialized binding in an Environment Record
   * @param {String} N bound name
   * @param {*} V the value for the binding and is a value of any ES language type
   * @return {Binding} the initialized binding
   * */
  InitializeBinding(N, V) {}

  /**
   * Set the value of an already existing mutable binding in an Environment Record
   * @param {String} N bound name
   * @param {*} V the value for the binding and is a value of any ES language type
   * @param {Boolean} S if true and the binding cannot be set throw a TypeError exception
   * @return {Binding} the mutated binding
   * */
  SetMutableBingding(N, V, S) {}

  /**
   * Returns the value of an already existing binding from an Environment Record
   * @param {String} N bound name
   * @param {Boolean} S S is used to identify references originating in strict mode code,
   * or that otherwise require strict mode reference semantics.
   * If S is true and the binding does not exist throw a ReferenceError exception.
   * If the binding exists but is uninitialized a ReferenceError is thrown, regardless of the value of S
   * @return {*} the binding value
   * */
  GetBindingValue(N, S) {}

  /**
   * Delete a binding from an Environment Record
   * @param {String} N bound name
   * @return {Boolean} If a binding for N exists, remove the binding and return true.
   * If the binding exists but cannot be removed return false.
   * If the binding does not exist return true.
   * */
  DeleteBinding(N) {}

  /**
   * Determine if an Environment Record establishes a this binding
   * @return {Boolean} return true if it does and false if it does not
   * */
  HasThisBinding() {}

  /**
   * Determine if an Environment Record establishes a super method binding
   * @return {Boolean} return true if it does and false if it does not
   * */
  HasSuperBinding() {}

  /**
   * If this Environment Record is associated with a with statement
   * @return {(Object|undefined)} return the with object. Otherwise, return undefined
   * */
  WithBaseObject() {}
}