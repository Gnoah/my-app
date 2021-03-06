import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
        
			<label>Nom : </label>
			<input type="text" name="name" className="marg" value={user.name} onChange={handleInputChange} />
			<label className="marger">Prenom : </label>
			<input type="text" name="username" className="marg"value={user.username} onChange={handleInputChange} />
			<button className="btn btn-primary">Ajouter</button>
		</form>
	)
}

export default AddUserForm