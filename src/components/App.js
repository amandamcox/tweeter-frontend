import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'

import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

const App = () => {
	const [currentUser, setCurrentUser] = useState(null)

	const handleUserSelection = userObject => {
		setCurrentUser(userObject)
	}

	return (
		<Grid container direction='column' justify='center' spacing={1}>
			<header>
				<nav>
					<Grid item xs={12}>
						<Navigation onUserSelect={handleUserSelection} />
					</Grid>
				</nav>
			</header>
			<main>
				<Grid item xs={12}>
					<Container maxWidth='lg'>
						<Content currentUser={currentUser} />
					</Container>
				</Grid>
			</main>
			<footer>
				<Grid item xs={12}>
					<Footer />
				</Grid>
			</footer>
		</Grid>
	)
}

export default App
