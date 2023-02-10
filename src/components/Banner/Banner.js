import React from 'react'

function Banner({ status, numOfAttempts, answer, resetGame }) {
	const mood = status ? 'happy' : 'sad'
	console.log(answer)

	return (
		<div className={`${mood} banner`}>
			{status ? (
				<p>
					<strong>Congratulations!</strong> Got it in
					<strong>
						{numOfAttempts === 1 ? '1 guess' : `${numOfAttempts} guesses`}
					</strong>
					.
				</p>
			) : (
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			)}
			<button onClick={resetGame} className='restart-button'>
				Restart Game
			</button>
		</div>
	)
}

export default Banner
