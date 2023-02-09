import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import Banner from '../Banner/Banner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every page load.
// To make debugging easier, we'll log the solution in the console.

function Game() {
	const [answer, setAnswer] = React.useState(sample(WORDS))
	const [guesses, setGuesses] = React.useState([])
	console.info({ answer })

	let gameWon = guesses.includes(answer)
	let maxNumOfAttempts = guesses.length === NUM_OF_GUESSES_ALLOWED
	let gameLost = maxNumOfAttempts && gameWon === false

	function resetGame() {
		setAnswer(sample(WORDS))
		setGuesses([])
	}

	function handleAddGuess(newGuess) {
		const nextGuesses = [...guesses, newGuess]
		setGuesses(nextGuesses)
	}

	return (
		<>
			<GuessResults
				guesses={guesses}
				numOfGuesses={NUM_OF_GUESSES_ALLOWED}
				answer={answer}
			/>
			{!gameWon && !gameLost ? (
				<GuessInput
					handleAddGuess={handleAddGuess}
					answer={answer}
					guesses={guesses}
					numOfGuesses={NUM_OF_GUESSES_ALLOWED}
				/>
			) : (
				<Banner
					status={gameWon}
					answer={answer}
					numOfAttempts={guesses.length}
					resetGame={resetGame}
				/>
			)}
			{}
		</>
	)
}

export default Game
