import React from 'react'
import Guess from '../Guess/Guess'
import { range } from '../../utils'

function GuessResults({ guesses, numOfGuesses, answer }) {
	const emptyGuesses = range(numOfGuesses - guesses.length)
	const guessesGrid = [...guesses, ...emptyGuesses]
	const blankCharacters = '     '

	return (
		<div className='guess-results'>
			{guessesGrid.map((guess, index) => (
				<Guess
					guess={typeof guess === 'string' ? guess : blankCharacters}
					answer={answer}
					key={index}
				/>
			))}
		</div>
	)
}

export default GuessResults
