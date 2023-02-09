import React from 'react'

function GuessInput({ handleAddGuess }) {
	const [newGuess, setNewGuess] = React.useState('')

	function handleSubmit(event) {
		event.preventDefault()

		if (newGuess.length < 5) {
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
				minLength='5'
				maxLength='5'
				size='5'
				onChange={(event) => setNewGuess(event.target.value.toUpperCase())}
				value={newGuess}
			/>
		</form>
	)
}

export default GuessInput
