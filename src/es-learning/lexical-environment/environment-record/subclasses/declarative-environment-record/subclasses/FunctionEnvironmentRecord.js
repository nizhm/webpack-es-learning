/**
 * A function Environment Record is used to represent the top-level scope of a function
 * if the function is not an ArrowFunction, provides a this binding
 * If a function is not an ArrowFunction function and references super,
 * its function Environment Record also contains the state that is used to perform super method invocations from within the function
 * @class FunctionEnvironmentRecord
 * @since 20220122
 * @author nizhm
 * */
class FunctionEnvironmentRecord extends DeclarativeEnvironmentRecord{
  // additional fields
  /**
   * This is the this value used for this invocation of the function
   * @property {*} thisValue [[thisValue]]
   * */
  thisValue;

  /**
   * If the value is "lexical", this is an ArrowFunction and does not have a local this value
   * @property {['lexical'|'initialized'|'unintitialized']} thisBindingStatus [[thisBindingStatus]]
   * */
  thisBindingStatus;

  /**
   * The function Object whose invocation caused this Environment Record to be created
   * @property {Object} FunctionObject [[FunctionObject]]
   * */
  FunctionObject;

  /**
   * If the associated function has super property accesses and is not an ArrowFunction,
   * [[HomeObject]] is the object that the function is bound to as a method.
   * The default value for [[HomeObject]] is undefined
   * @property {[Object|undefined]} HomeObject [[HomeObject]]
   * */
  HomeObject;

  /**
   * If this Environment Record was created by the [[Construct]] internal method,
   * [[NewTarget]] is the value of the [[Construct]] newTarget parameter.
   * Otherwise, its value is undefined
   * @property {[Object|undefined]} NewTarget [[NewTarget]]
   * */
  NewTarget;

  /**
   * Determine if a function Environment Record establishes a this binding
   * @return {Boolean} return false if [[thisBindingStatus]] is "lexical".otherwise, return true
   * */
  HasThisBinding() {
    super.HasThisBinding();
  }

  /**
   * Determine if a function Environment Record establishes a super method binding
   * @return {Boolean} If [[thisBindingStatus]] is "lexical", return false.
   * If [[HomeObject]] is undefined, return false, otherwise, return true.
   * */
  HasSuperBinding() {
    super.HasSuperBinding();
  }

  // additional methods
  /**
   * Set the [[thisValue]] and record that it has been initialized
   * @param {Object} V this value
   * @return {Object} V
   * */
  BindThisValue(V) {}

  /**
   * Return the value of this Environment Record’s this binding
   * @return {Object} this
   * */
  GetThisBinding() {}

  /**
   * Return the object that is the base for super property accesses bound in this Environment Record
   * @return {Object} super
   * */
  GetSuperBase() {}
}