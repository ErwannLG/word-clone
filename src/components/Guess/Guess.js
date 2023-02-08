import React from 'react'

function Guess({ guess }) {
	const guessArray = [...guess]

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
