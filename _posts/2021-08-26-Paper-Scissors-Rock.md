---
layout: post
title: Paper Scissors Rock
---

A silly childs game can pose an interesting challenge for software development.
Programming the game rules can be approached in many different ways, obviously you could hard code a bunch of "if statements" however this would be very messy and unsustainable if you needed to add complexity to the game later on, (such as adding new rules)
```
if (player1 == 'paper' && player2 == 'rock') {
  return 'player1 wins'
}
```
> Don't do this ^

The better way to solve this would be to implement a data structure built around the game rules.

### Javascript -- Data structure approach


```
var gamerules = {
  scissors: { label: 'scissors' },
  paper:{ label: 'paper' },
  rock: { label: 'rock' }
}
gamerules.scissors.beats = gamerules.paper
gamerules.paper.beats = gamerules.rock
gamerules.rock.beats = gamerules.scissors


function play(player1, player2) {
  console.log(`playing ${player1.label} vs ${player2.label}`)
  if (player1.beats === player2) {
    console.log('player 1 wins ')
  }
  else if (player2.beats === player1){
    console.log('player 2 wins')
  }
  else{
    console.log('draw')
  }
}

```

The In the first section we define a 'Gamerules' data structure.
This allows us to easily define the rules of the game by setting the 'beats' property on each option
```
gamerules.scissors.beats = gamerules.paper
gamerules.paper.beats = gamerules.rock
gamerules.rock.beats = gamerules.scissors
```


In the second half we create a "Play" function which will evaluate player1 and player2 to determine which choice wins.
```
function play(player1, player2) {
  console.log(`playing ${player1.label} vs ${player2.label}`)
  if (player1.beats === player2) {
    console.log('player 1 wins ')
  }
  else if (player2.beats === player1){
    console.log('player 2 wins')
  }
  else{
    console.log('draw')
  }
}
```

See below for an example of how to "Play" the game using this function

```
console.log('starting game')
var scissors = gamerules.scissors
var paper = gamerules.paper
var rock = gamerules.rock

play(scissors, scissors)
play(scissors, paper)
play(scissors, rock)

play(paper, scissors)
play(paper, paper)
play(paper, rock)

play(rock, scissors)
play(rock, paper)
play(rock, rock)
```




<details>
<summary>View Full Code</summary>

<pre class="highlight">
<code>

var gamerules = {
  scissors: { label: 'scissors' },
  paper:{ label: 'paper' },
  rock: { label: 'rock' }
}
gamerules.scissors.beats = gamerules.paper
gamerules.paper.beats = gamerules.rock
gamerules.rock.beats = gamerules.scissors


function play(player1, player2) {
  console.log(`playing ${player1.label} vs ${player2.label}`)
  if (player1.beats === player2) {
    console.log('player 1 wins ')
  }
  else if (player2.beats === player1){
    console.log('player 2 wins')
  }
  else{
    console.log('draw')
  }
}


console.log('starting game')
var scissors = gamerules.scissors
var paper = gamerules.paper
var rock = gamerules.rock

play(scissors, scissors)
play(scissors, paper)
play(scissors, rock)

play(paper, scissors)
play(paper, paper)
play(paper, rock)

play(rock, scissors)
play(rock, paper)
play(rock, rock)

</code>
</pre>

</details>
