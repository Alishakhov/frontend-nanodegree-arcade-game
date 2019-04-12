var Enemy = function(x, y, speed) {
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
   
    // this condition is for bugs after go off the screen and 
    //and come back at the position -101 at least to look like
    //they are naturally heads come out slowly. starting position
    if(this.x >= 505) {
        this.x = -101;
      }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
class Hero {
    constructor() {
        this.x = 202;
        this.y = 392; //83*4+60
        this.blockHeight = 83;
        this.blockWidth = 101;
        this.sprite = 'images/char-boy.png';
     
      
    }

    // Draw the hero the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // Check if the enemy and the hero hit each other and update the hero
    update () {
    //loop over each enemy bugs 
        for(let enemy of allEnemies) {
            if(this.y === enemy.y && (enemy.x + 41 > this.x && enemy.x < this.x + 41)){
                this.x = 202;
                this.y = 392;
            }   
      //enemy's length = 101 - 60 = 41 the 60 from the top this.y = 392; //83*4+60
        }
    }

    // Reset hero the original position
    reset() {
        this.x = 202;
        this.y = 392;
    }

    // a handleInput() method.
    handleInput (keyPress) {
        if(keyPress === "left" && this.x > 0) {
            this.x -= this.blockWidth;
        //404 = 505 - 101
        }else if(keyPress === "right" && this.x < 404) {
        this.x += this.blockWidth;
 
        //0 is the original point
        //actually keyup no need this.y > 0
        }else if(keyPress === "up") {
            this.y -= this.blockHeight;
        }else if(keyPress === "down" && this.y < 392) {
            this.y += this.blockHeight;
        }
    }
}
   
// Now instantiate your objects.
// Place the player object in a variable called player
const player = new Hero();

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

//instantiate Enemy objects
const enemy1 = new Enemy(-101, 60, 200);
const enemy2 = new Enemy(-201, 226, 250);
const enemy3 = new Enemy(-101, 143, 320);
const enemy4 = new Enemy(-101, 226, 200);
const enemy5 = new Enemy(-101, 60, 400);

// Place all enemy objects in an array called allEnemies
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];




