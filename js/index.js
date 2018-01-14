var rot13 = require('rot-thirteen')

document.addEventListener('DOMContentLoaded', function() {
  var i = document.getElementById('in')
  var o = document.getElementById('out')
  
  i.addEventListener('keyup', function(e) {
    o.innerHTML = e.target.value 
      ? rot13(e.target.value) 
      : '...and comes out here!'
  })
})
