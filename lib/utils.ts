const moment = require('moment')

/**
 * Converts a value in cents to a value in such format: 10.00
 * @param {number} valueInCents - The value in cents to be converted.
 * @returns {number} - The converted value in the 10.00 format
 */
export function centsToValue(valueInCents: number){
	const input = valueInCents;

	const convertedValue = (input / 100);

	return Number(convertedValue).toFixed(2);
}

/**
 * Calculates the fundraising percentage based on the raised amount and the total goal.
 * @param {number} fundraisedAmount - The amount raised.
 * @param {number} totalGoal - The total fundraising goal.
 * @returns {number} - The fundraising percentage.
 */
export function countPercentage(fundraisedAmount: number, totalGoal: number){
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
export function countBaloons(value: number){
	if(value >= 50 && value < 100) return 2
	if(value >= 100) return 3

	return 1
}

export function convertUnixTimeFormatToDDMMYYYY(rawDate: number){
	const convertedDate = moment.unix(rawDate).utcOffset('+0100')

	const DDMMYYYY = moment(convertedDate).format('L')
	const HOURMINUTESECONDS = moment(convertedDate).format('HH:mm:ss')

	const date = `${DDMMYYYY}, ${HOURMINUTESECONDS}`

	return date
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	const expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname: string) {
	const name = cname + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}