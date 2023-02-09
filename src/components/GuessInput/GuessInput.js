import React from 'react'

function GuessInput({ handleAddGuess }) {
	const [newGuess, setNewGuess] = React.useState('')

	function handleSubmit(event) {
		event.preventDefault()

		if (newGuess.length !== 5) {
			window.alert('You must enter 5 characters')
			return
		}

		handleAddGuess(newGuess)
		setNewGuess('')
	}

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				type='text'
				required
				pattern='[a-zA-Z]{5}'
				title='5 letter word'
				size={5}
				onChange={(event) => setNewGuess(event.target.value.toUpperCase())}
				value={newGuess}
			/>
		</form>
	)
}

export default GuessInput
