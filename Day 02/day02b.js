// ======================= TIMERS MODULE ==================================================================== //

// var timers = require('timers')

// timers.setTimeout(() => console.log('timeout'), 2000)

// timers.setInterval(() => console.log('interval'), 1000)

// ======================= ASSERT MODULE =================================================================== //

const assert = require ('assert')
var minum = {kopi:['luwak','hitam','susu']}
assert.equal(minum.kopi.length , 4)
assert.strictEqual(minum.kopi.length , 4 )
assert.notEqual(minum.kopi.length , 3)
assert.notStrictEqual(minum.kopi.length , 3)

// ======================= LATIHAN 1 ======================================================================= //

var object = {
    obj_a: () => {
        return ['', '', {
            obj_b: ['', '', {
                obj_c: () => {
                    return {
                        obj_d: ['', () => {
                            return {
                                obj_e: (a) => {
                                    return ['', '', '', 'success' + a]
                                }
                            }
                        }]
                    }
                }
            }]
        }]
    }
}

console.log(object.obj_a()[2].obj_b[2].obj_c().obj_d[1]().obj_e(' test')[3]);