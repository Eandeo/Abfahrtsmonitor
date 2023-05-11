function APIrequest() {
	const stopId = document.getElementById("haltepunkt").value;
	console.log(stopId);

	getHaltepunkt(stopId)


}

async function getHaltepunkt(stopId) {
	const requestURL = `https://www.wienerlinien.at/ogd_realtime/monitor?stopID=${stopId}`;
	const requestHeaders = {
	  'Accept': 'application/json',
	  'Content-Type': 'application/json'
	};
	const response = await fetch(requestURL, { method: 'GET', headers: requestHeaders });
	const stop = await response.json();
	console.log(stop);
  }
 
  
  const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
  async function getISS(){
	const response = await fetch(api_url);
	const data = await response.json();
	console.log(data.name);
  }

  getISS();


