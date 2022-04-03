/**
 * @Date 20210711
 * 1.NaN是指9007199254740990 (that is, 2^53-2);
 * 2.NaN是一系列情况的集合，所以比较两个NaN应该返回false（implementation-dependent）；
 */



console.log(Number(undefined))
console.log(Number('&214'))
console.log(NaN == NaN)