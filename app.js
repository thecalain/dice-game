const dice1Image = document.querySelector('.img1');
const dice2Image = document.querySelector('.img2');
const refreshMe = document.querySelector('h1');
const result = document.querySelector('h2');

refreshMe.addEventListener('click', () => {
	const randomDice1 = Math.floor(Math.random() * 6 + 1);
	const randomDice2 = Math.floor(Math.random() * 6 + 1);

	function dice1() {
		let randomDiceImage = 'images/dice' + randomDice1 + '.png';
		return randomDiceImage;
	}

	function dice2() {
		let randomDiceImage = 'images/dice' + randomDice2 + '.png';
		return randomDiceImage;
	}

	dice1Image.setAttribute('src', dice1());
	dice2Image.setAttribute('src', dice2());

	if (randomDice1 > randomDice2) {
		result.textContent = 'Result: Player 1 Wins';
	} else if (randomDice1 < randomDice2) {
        result.textContent = 'Result: Player 2 Wins'
    } else {
        result.textContent = "Result: It's a tie."
    }
});
