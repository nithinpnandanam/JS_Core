let d = 12
function outest() {
    let b = 45
    function outer(x) {
      function inner() {
        let c = 43
        console.log(a, x,b);
      }
      let a = 10;
      return inner;
    }
    return outer
  let a = 101;
  }
  outest()("Hello")();