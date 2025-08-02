# Follow Me Game 🎮

"Follow Me" is a classic memory game, inspired by Simon Says, where you must replicate an increasingly long sequence of colors and sounds. Test your memory and see how far you can go\!

## Table of Contents

  * [How to Play](https://www.google.com/search?q=%23how-to-play)
  * [Features](https://www.google.com/search?q=%23features)
  * [Technologies Used](https://www.google.com/search?q=%23technologies-used)
  * [Setup](https://www.google.com/search?q=%23setup)
  * [Customization](https://www.google.com/search?q=%23customization)
  * [High Score](https://www.google.com/search?q=%23high-score)
  * [Contributing](https://www.google.com/search?q=%23contributing)

-----

## How to Play

1.  **Start the Game:** Press the "Start Game" button or any key on your keyboard to begin.
2.  **Watch the Sequence:** The game will flash a sequence of colored buttons. Pay close attention\!
3.  **Repeat the Sequence:** After the game's turn, click the colored buttons in the exact same order as they flashed.
4.  **Advance Levels:** If you successfully replicate the sequence, the game will add another color to the pattern, and the level will increase.
5.  **Game Over:** If you make a mistake, the game will flash red, and it's game over\! Your score (the level you reached) will be displayed, along with your all-time high score.
6.  **Restart:** Press "Start Game" or any key again to try and beat your high score\!

-----

## Features

  * **Classic Gameplay:** Simple yet addictive memory challenge.
  * **Visual Feedback:** Buttons flash to indicate the sequence and user input.
  * **Level Tracking:** Keep track of your current progress.
  * **High Score:** Your highest score is saved locally in your browser.
  * **Responsive Controls:** Play using keyboard input or touch on mobile devices.
  * **Game Over Visual:** Clear visual indication when the game ends.

-----

## Technologies Used

  * **HTML5:** For the basic structure of the game.
  * **CSS3:** For styling and animations, giving the game its look and feel.
  * **JavaScript (ES6+):** For the core game logic, sequence generation, user interaction, and score management.

-----

## Setup

To run this game locally, simply follow these steps:

1.  **Clone the repository (or download the files):** If you're getting this from a Git repository, use:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
    Otherwise, ensure you have `index.html`, `game.css`, and `app.js` in the same folder.
2.  **Open `index.html`:** Double-click the `index.html` file in your web browser. That's it\! The game should load and be ready to play.

-----

## Customization

You can easily customize various aspects of the game:

  * **Colors:** Modify the `background-color` properties for `.red`, `.yellow`, `.green`, and `.purple` classes in `game.css`.
  * **Button Size:** Adjust `height` and `width` of the `.btn` class in `game.css`.
  * **Animation Speed:** Change the `setTimeout` durations in `gameFlash`, `userFlash`, and `checkAns` functions in `app.js` for flash speed, and `animation` duration in `game.css` for the hover effect.
  * **Game Over Background:** Change the `background-color` within the `setTimeout` in the `checkAns` function in `app.js` for the game over flash.
  * **Start Button Style:** Adjust styles for `#startBtn` in `game.css`.

-----

## High Score

Your highest score is automatically saved in your browser's **Local Storage**. This means your high score will persist even if you close the browser tab or restart your computer. You can clear it manually through your browser's developer tools if desired.

-----

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. All contributions are welcome\!
