import axios from 'axios'

export const getAllTweets = async () => {
	try {
		const res = await axios.get('/api/tweets/')
		return res.data
	} catch (error) {
		throw Error(error)
	}
}

export const saveTweet = async (tweetContent, userId) => {
	try {
		const res = await axios.post('/api/tweets/', { tweetContent, userId })
		return res.data
	} catch (error) {
		throw Error(error)
	}
}
