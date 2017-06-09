const assert = require('assert')

assert.ok('hello', 'world')

// EeepEqual
let a = "Hello"
let b = "World"
assert.deepEqual(Error(a), Error(b), "DeepEqual:")
b = a;
assert.deepEqual(a, b, "DeepEqual string:")

assert.doesNotThrow( ()=> {
    throw new TypeError('Wrong value');
}, TypeError, 'Whoops')



