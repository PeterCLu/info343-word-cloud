// Project Word Cloud by Kevin Yan, Peter Lu, Hai Nguyen, Hamzah Aly
// An HTML5 video game that tests the user's vocabulary and typing ability.


var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

var GameState = {
    preload: preload, create: create, update: update
};

var dictionary = ['word', 'echo', 'halo', 'game', 'gun', 'assault', 'hill', 'chief', 'lock', 'spartan', 'thrust', 'slide'];
var textInput;
console.log(textInput);
var deleteKey;
var deleteKeyTxt;
var enterKey;
var enterKeyTxt;

function preload() {
    game.load.image('background', 'assets/img/background.jpg')
}

function create() {
    background = game.add.tileSprite(0, 0, 1000, 600, "background");
    textInput = game.make.bitmapData(800, 600);
    textInput.context.font = '18px Arial';
    textInput.context.fillStyle = '#FFF';
    textInput.addToWorld();

    game.input.keyboard.addCallbacks(this, null, null, keyPress);
    textInput = game.add.text(game.world.centerX, game.world.centerY, "", {
        font: "24px Arial",
        fill: "#000",
        align: "center"
    });
    textInput.setText(textInput.text);

    this.deleteKey = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    this.enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.BACKSPACE, Phaser.Keyboard.ENTER ]);

    this.deleteKeyTxt = game.add.text(20, 20, "Backspace is pressed? No");

    $(document).bind("keydown", function (e) {
        if (e.keyCode == 8) { //Backspace
            e.preventDefault();
            textInput.text = textInput.text.substring(0, textInput.text.length - 1);
        }
        if (e.keyCode = 13) { //Enter
            e.preventDefault();
            //Do what enter needs to do.
        }
    });

    textInput.setText(textInput.text);
}

function update() {
    if (this.deleteKey.isDown) {
        this.deleteKeyTxt.text = "Backspace is pressed? Yes"
    } else {
        this.deleteKeyTxt.text = "Backspace is pressed? No"
    }
    if (this.enterKey.isDown) {
        this.enterKeyTxt.text = "Enter is pressed? Yes"
    } else {
        this.enterKeyTxt.text = "Enter is pressed? No"
    }
}

function keyPress(char) {
    console.log(textInput.text);
    var x = 64;
    var idx;
    console.log(char);
    textInput.text += char;
    console.log(textInput.text);
    for (idx = 0; idx < dictionary.length; idx++) {
      if (textInput.text === dictionary[idx]) {
          console.log('Word Completed');
      } else {
          console.log('Word Incomplete');
      }
    }
}


game.state.add('GameState', GameState);
game.state.start('GameState');




