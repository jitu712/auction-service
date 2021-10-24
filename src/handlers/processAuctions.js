import { closeAuction } from "../lib/closeAuction";
import { getEndedAuctions } from "../lib/getEndedAuctions";
import createError from 'http-errors';


const processAuctions = async (event, context) => {
	console.log(`this task is scheduled`);
	try {
		const auctionsToClose = await getEndedAuctions();
		console.log(auctionsToClose);
		const closePromises = auctionsToClose.map(auction => {
			closeAuction(auction);
		});

		await Promise.all(closePromises);

		return { closed: closePromises.length };
	} catch (error) {
		console.log(error);
		throw new createError.InternalServerError(error);
	}
}

export const handler = processAuctions;