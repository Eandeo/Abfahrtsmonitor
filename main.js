function APIrequest(){
	const stopId = document.getElementById("haltepunkt").value;
	console.log(stopId);
	
	populate(stopId)


}

async function populate(stopId) {
			const requestURL = 'https://www.wienerlinien.at/ogd_realtime/monitor?stopID=' + stopId;
async function getHaltepunkt(stopId) {
	const response = await fetch(requestURL);
	const stop = await response.json();
	console.log(stop);


	}