function getFirstSelector(s){
  return document.querySelector(s)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function inscreaseRankBy(n){
  const rl = document.querySelector('.ranked-list')
  for (var i = 0; i < rl.length; i++) {
    let child = rl[i].children  

    for (var j = 0; j < child.length; j++) {
      child[j].innerHTML = parseInt(child[j].innerHTML) + n 
      
    }
    
  }
}

function deepestChild(){
  let nd = document.getElementById('grand-node')
  let nextnd = nd.children[0]

  while (nextnd) {
    nd = nextnd
    nextnd =  nd.children[0]
    
  }
}
