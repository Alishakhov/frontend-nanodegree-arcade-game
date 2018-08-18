// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
   
    // starting position
    if(this.x >= 505) {
        this.x = -101;
      }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Hero = function () {
    this.x = 202;
    this.y = 392; //83*4+60
    this.blockHeight = 83;
    this.blockWidth = 101;
    this.sprite = 'images/char-boy.png';
   // this.win = false;
};

// This class requires an render() 
Hero.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This class requires an update()

Hero.prototype.update = function() {
    //loop over each enemy bugs 
   for(let enemy of allEnemies) {
       if(this.y === enemy.y && (enemy.x + 41 > this.x && enemy.x < this.x + 41)){
            this.x = 202;
            this.y = 392;
         }   
      //enemy.width = 101 - 60 = 41 the 60 from the top this.y = 392; //83*4+60
   }

  //i got the -23 from the console this.y
     if(this.y === -23) {
       //  this.win = true;
        showModal(); //if I showModal() below the  win.cancelAnimation(main); the Modal box didnot show/
        win.cancelAnimation(main);
     }
  // console.log(this.y);
};

// a handleInput() method.
Hero.prototype.handleInput = function(keyPress) {
    if(keyPress === "left" && this.x > 0) {
        this.x -= this.blockWidth;
        //404 = 505 - 101
    }else if(keyPress === "right" && this.x < 404) {
        this.x += this.blockWidth;

        //0 is the original point
    }else if(keyPress === "up" && this.y > 0) {
        this.y -= this.blockHeight;
    }else if(keyPress === "down" && this.y < 392) {
        this.y += this.blockHeight;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//instantiate Enemy object
const enemy1 = new Enemy(-101, 60, 200);
const enemy2 = new Enemy(-201, 226, 250);
const enemy3 = new Enemy(-101, 143, 320);
allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

const player = new Hero();

//https://github.com/SSQ/Udacity-FEND-P7-Classic-Arcade-Game-Clone/blob/master/js/app.js
//https://matthewcranford.com/arcade-game-walkthrough-part-5-adding-enemies
//https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection




let btn = document.querySelector('#btn');
let modal = document.querySelector('#modal');


function showModal() {
    modal.style.display = "block";
    
}

btn.addEventListener('click', function() {
    modal.style.display = "none";
    player.x = 202;
    player.y = 392;
    //player.win = false;
    win.requestAnimationFrame(main);
});

//to do list

//the showModal function working
// got the bug and the hero on the same y but havent compare them yet
//sstop the animation when modal pop up.