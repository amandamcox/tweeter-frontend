import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
	container: {
		width: '80%'
	},
	card: {
		minWidth: 275,
		marginBottom: 20,
		backgroundColor: '#fafafa',
		boxShadow: '2px 2px 8px #e0e0e0'
	},
	cardMetadata: {
		display: 'flex',
		alignItems: 'center',
		marginTop: 15
	},
	username: {
		color: '#5635b2',
		fontWeight: 600,
		marginLeft: 10
	},
	bullet: {
		margin: '0 20px'
	},
	avatar: {
		backgroundColor: '#5635b2',
		color: '#ffffff',
		fontWeight: 400
	}
})

const TweetWall = ({ tweets }) => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			{tweets.map(tweet => (
				<Card
					className={classes.card}
					variant='outlined'
					key={tweet.id}
				>
					<CardContent>
						<Typography variant='body1'>
							{tweet.tweetContent}
						</Typography>
						<span className={classes.cardMetadata}>
							<Avatar className={classes.avatar}>
								{tweet.user.username.charAt(0).toUpperCase()}
							</Avatar>
							<Typography className={classes.username}>
								{tweet.user.username}
							</Typography>
							<Typography color='textSecondary'>
								<span className={classes.bullet}>•</span>
								{new Date(tweet.created).toLocaleDateString(
									'en-US',
									{
										month: 'long',
										day: 'numeric',
										year: 'numeric'
									}
								)}
							</Typography>
						</span>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

export default TweetWall
