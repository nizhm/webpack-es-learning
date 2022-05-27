/**
 * Reference ECMA-262/ECMA-262_6th_edition_june_2015.pdf @ page 296
 *
 * `*` indicates all exported bindings(that the module namespace object)
 *
 * Principle in `export * from AnotherModule`
 * 1.`default` within other modules will always be ignored.
 * 2.conflict keys between other modules will always be ignored.
 * 3.conflict keys between self and other modules in which self key-value has priority.
 */
