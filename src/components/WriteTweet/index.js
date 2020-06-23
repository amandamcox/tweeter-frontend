import React, { useState, useEffect, useRef } from 'react'

import { saveTweet } from '../serviceCalls'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	container: {
		marginBottom: 30
	},
	tweetBox: {
		marginBottom: '15px 0'
	},
	tweetButton: {
		margin: '10px 0'
	},
	charCount: {
		color: '#8a8a8a'
	}
})

const WriteTweet = ({ currentUser, onFormSubmit }) => {
	const classes = useStyles()
	const [tweetContent, setTweetContent] = useState('')
	const [characterCount, setCharacterCount] = useState(0)

	const tweetCharCount = useRef()

	useEffect(() => {
		if (characterCount >= 240) {
			tweetCharCount.current.style.color = 'red'
		} else {
			tweetCharCount.current.style.color = '#8a8a8a'
		}
	}, [characterCount])

	const handleTweetChange = event => {
		setTweetContent(event.target.value)
		setCharacterCount(event.target.value.length)
	}

	const handleFormSubmit = async event => {
		event.preventDefault()
		try {
			if (characterCount <= 240) {
				const res = await saveTweet(tweetContent, currentUser.userId)
				onFormSubmit(res)
				setTweetContent('')
				setCharacterCount(0)
			}
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<form
			noValidate
			autoComplete='off'
			className={classes.container}
			onSubmit={handleFormSubmit}
		>
			<TextField
				label='Share your thoughts'
				multiline
				rows={4}
				variant='outlined'
				className={classes.tweetBox}
				onChange={handleTweetChange}
				value={tweetContent}
				autoFocus
				fullWidth
				inputProps={{ maxLength: '240' }}
			/>
			<Typography
				variant='body1'
				className={classes.charCount}
				ref={tweetCharCount}
			>
				{`${characterCount}/240`}
			</Typography>
			<Button
				variant='contained'
				className={classes.tweetButton}
				onClick={handleFormSubmit}
			>
				Tweet It!
			</Button>
		</form>
	)
}

export default WriteTweet
