const moment = require('moment')

/**
 * Converts a value in cents to a value in such format: 10.00
 * @param {number} valueInCents - The value in cents to be converted.
 * @returns {string} - The converted value in the 10.00 format
 */
export function centsToValue({valueInCents}:{valueInCents: number}){
	const input = valueInCents;

	const convertedValue = (input / 100).toFixed(2);

	return convertedValue
}

/**
 * Calculates the fundraising percentage based on the raised amount and the total goal.
 * @param {number} fundraisedAmount - The amount raised.
 * @param {number} totalGoal - The total fundraising goal.
 * @returns {number} - The fundraising percentage.
 */
export function countPercentage(fundraisedAmount, totalGoal){
	if (totalGoal <= 0) {
		return 0; // Avoid division by zero
	}

	const percentage = (fundraisedAmount / totalGoal) * 100;

	if(percentage > 100) return 100

	return Math.round(percentage)
}

/**
 * Counts the number of balloons to display based on a value.
 * @param {number} value - The value to determine the number of balloons.
 * @returns {number} - The number of balloons to display.
 */
export function countBaloons(value){
	if(value >= 50 && value < 100) return 2
	if(value >= 100) return 3

	return 1
}

export function convertUnixTimeFormatToDDMMYYYY(rawDate: string){
	const convertedDate = moment.unix(rawDate)

	const DDMMYYYY = moment(convertedDate).format('L')
	const HOURMINUTESECONDS = moment(convertedDate).format('HH:mm:ss')

	const date = `${DDMMYYYY}, ${HOURMINUTESECONDS}`

	return date
}