import React from 'react'

import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
	const guessArray = [...guess]
	const lettersStatus = checkGuess(guess, answer)

	return (
		<p className='guess'>
			{guessArray.map((letter, index) => (
				<span
					className={`cell ${
						letter === ' ' ? '' : lettersStatus[index].status
					}`}
					key={index}
				>
					{letter}
				</span>
			))}
		</p>
	)
}

export default Guess
