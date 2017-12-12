function getFirstSelector(s){
  return document.querySelector(s)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}



function deepestChild(){
  let nd = document.getElementById('grand-node')
  let nextnd = nd.children[0]

  while (nextnd) {
    nd = nextnd
    nextnd =  nd.children[0]
  }

  return nd
}

function increaseRankBy(n){
  const rl = document.querySelectorAll('.ranked-list')

  for (var i = 0; i < rl.length; i++) {
    var children = rl[i].children

    for (var j = 0; j < child.length; j++) {
      children[j].innerHTML = parseInt(child[j].innerHTML) + n

    }

  }

}
