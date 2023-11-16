import mongoose from 'mongoose'

const zbiorkaSchema = new mongoose.Schema({
	photosCount: {
		type: Number
	},
	name: { 
		type: String
	},
	description: {
		type: String
	},
	city: {
		type: String
	},
	age: {
		type: Number
	},
	opisChoroby: {
		type: String
	},
	celZbiorki: {
		type: String
	},
	totalGoal: {
		type: Number
	},
	href: {
		type: String
	},
	paymentLinkId: {
		type: String
	},
	paymentLinkUrl: {
		type: String
	},
	isFinished: {
		type: Boolean
	},
	totalDonated: {
		type: Number
	},
	donationsCount: {
		type: Number
	},
	nazwaChoroby: {
		type: String
	},
	donations: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Donation',
		}
	]
})

const Zbiorka = mongoose.models.Zbiorka || mongoose.model('Zbiorka', zbiorkaSchema)

export default Zbiorka