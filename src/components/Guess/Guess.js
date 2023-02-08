import React from 'react'

function Guess({ guess }) {
	console.log('Guess component guess: ', guess)
	const guessArray = [...guess]
	console.log({ guessArray })

	return (
		<p className='guess'>
			{guessArray.map((letter, index) => (
				<span className='cell' key={index}>
					{letter}
				</span>
			))}
		</p>
	)
}

export default Guess
