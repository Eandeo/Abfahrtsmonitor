function APIrequest() {
	const stopId = document.getElementById("haltepunkt").value;
	console.log(stopId);

	getHaltepunkt(stopId);


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
 
  
  const api_url = "https://api.openweathermap.org/data/2.5/weather?q=London";
  const api_key = "{d0e988e639ad087e7062b998e667f77d}"
  async function getweather(){
	const response = await fetch(api_url + `&appid=${api_key}`);
	const data = await response.json();
	console.log(data);
  }

  getweather();


