import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CopyrightIcon from '@material-ui/icons/Copyright'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	footer: {
		height: '10vh',
		backgroundColor: '#009688',
		color: '#ffffff',
		padding: 30,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	copyrightIcon: {
		marginRight: 5
	}
})

const Footer = () => {
	const classes = useStyles()

	return (
		<div className={classes.footer}>
			<CopyrightIcon className={classes.copyrightIcon} />
			<Typography variant='body1'>
				{new Date().getFullYear()} - Made by Amanda Cox
			</Typography>
		</div>
	)
}

export default Footer
