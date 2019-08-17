const Benchmark = require('benchmark')
const { Profiler } = require('../build')

const profiler = new Profiler({ enabled: false })
const row = profiler.create('http:request')

const suite = new (Benchmark.Suite)()

function invokeFoo () {}

suite
  .add('Profiler actions', function() {
    const action = row.profile('foo')
    invokeFoo()
    action.end()
  })
  .add('Profiler actions | wrap', function() {
    row.profile('foo', {}, () => {
      invokeFoo()
    })
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ 'async': true })
