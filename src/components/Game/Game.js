import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every page load.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
	const [guesses, setGuesses] = React.useState([])

	function handleAddGuess(newGuess) {
		const nextGuesses = [...guesses, newGuess]
		setGuesses(nextGuesses)
	}

	return (
		<>
			<GuessResults guesses={guesses} numOfGuesses={NUM_OF_GUESSES_ALLOWED} />
			<GuessInput handleAddGuess={handleAddGuess} />
		</>
	)
}

export default Game
