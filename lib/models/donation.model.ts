import mongoose from 'mongoose'

const donationSchema = new mongoose.Schema({
	name: {
		type: String
	},
	comment: {
		type: String
	},
	amount: {
		type: Number
	},
	date: {
		type: String
	},
	stripeId:{
		type: String
	},
	paymentLinkId:{
		type: String
	},
	createdAt: {
		type: Date,
	}
})

const Donation = mongoose.models.Donation || mongoose.model('Donation', donationSchema)

export default Donation