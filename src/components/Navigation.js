import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	navbar: {
		backgroundColor: '#009688'
	},
	title: {
		flexGrow: 1
	}
}))

const Navigation = ({ onUserSelect }) => {
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleUserMenuOpen = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleUserMenuClose = () => {
		setAnchorEl(null)
	}

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.navbar}>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Tweeter
					</Typography>
					<IconButton
						aria-label='account of current user'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={handleUserMenuOpen}
						color='inherit'
					>
						<AccountCircle />
					</IconButton>
					<Menu
						id='menu-appbar'
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						open={open}
						onClose={handleUserMenuClose}
					>
						<MenuItem
							onClick={() =>
								onUserSelect({
									username: 'amandarox',
									userId: '5ef13e815ef5f18db0a93ab3'
								})
							}
						>
							amandarox
						</MenuItem>
						<MenuItem
							onClick={() =>
								onUserSelect({
									username: 'TerrificTuzag',
									userId: '5ef13e935ef5f18db0a93ab4'
								})
							}
						>
							TerrificTuzag
						</MenuItem>
						<MenuItem
							onClick={() =>
								onUserSelect({
									username: 'HollaForHealthcare',
									userId: '5ef13eb55ef5f18db0a93ab5'
								})
							}
						>
							HollaForHealthcare
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navigation
