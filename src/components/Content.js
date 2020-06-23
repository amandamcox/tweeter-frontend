import React, { useState, useEffect } from 'react'

import { getAllTweets } from './serviceCalls'
import TweetWall from './TweetWall'
import WriteTweet from './WriteTweet'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	userSelectionText: {
		margin: '15px 0'
	},
	fullWidth: {
		width: '90%'
	}
})

const sortResults = array => {
	return array.sort((a, b) => new Date(b.created) - new Date(a.created))
}

const Content = ({ currentUser }) => {
	const classes = useStyles()
	const [allTweets, setAllTweets] = useState([])

	useEffect(() => {
		const getInitialTweets = async () => {
			try {
				const tweets = await getAllTweets()
				setAllTweets(sortResults(tweets))
			} catch (error) {
				alert(error.message)
			}
		}
		getInitialTweets()
	}, [])

	const handleNewTweet = newTweet => {
		const newTweets = [...allTweets, newTweet]
		setAllTweets(sortResults(newTweets))
	}

	return (
		<Grid container direction='column' justify='center' alignItems='center'>
			{currentUser ? (
				<div className={classes.fullWidth}>
					<Typography
						variant='body1'
						color='secondary'
						className={classes.userSelectionText}
					>
						Logged in as: {currentUser.username}
					</Typography>
					<WriteTweet
						currentUser={currentUser}
						onFormSubmit={handleNewTweet}
					/>
				</div>
			) : (
				<Typography
					variant='body1'
					color='secondary'
					className={classes.userSelectionText}
				>
					Select a user from the icon in the navbar to tweet.
				</Typography>
			)}
			<TweetWall tweets={allTweets} />
		</Grid>
	)
}

export default Content
