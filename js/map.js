
var data = [
	{ lat: 22.152014594233318, lng: 70.79879119265937, time: new Date(Date.now()), cause: "JZu Ja pi0", deaths: 4, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.276607852272416, lng: 70.63674285281562, time: new Date(Date.now()), cause: "AcKzsZ1WYX", deaths: 5, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.388393031644398, lng: 70.79055144656562, time: new Date(Date.now()), cause: "orPIRb6v6y", deaths: 2, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.368075120226052, lng: 70.98006560672187, time: new Date(Date.now()), cause: "L 4 yF grv", deaths: 9, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.268982875423298, lng: 70.95534636844062, time: new Date(Date.now()), cause: "4BHzJD0vJ9", deaths: 4, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.238478813592007, lng: 71.10915496219062, time: new Date(Date.now()), cause: "5 JVoLuQbM", deaths: 5, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.03240303626586, lng: 70.97731902469062, time: new Date(Date.now()), cause: "W S1vAz7TF", deaths: 6, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.03240303626586, lng: 70.53786589969062, time: new Date(Date.now()), cause: "DFoeLMq9AR", deaths: 2, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.187623954775567, lng: 70.39779021609687, time: new Date(Date.now()), cause: "nJ mB9bzOn", deaths: 1, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.41886433394167, lng: 70.38131072390937, time: new Date(Date.now()), cause: "mZi7IOfE 1", deaths: 8, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.53814584290329, lng: 70.74660613406562, time: new Date(Date.now()), cause: "4 igmCyQNV", deaths: 4, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.368075120226052, lng: 70.64223601687812, time: new Date(Date.now()), cause: "C K9nIMKFp", deaths: 8, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 22.36299517893945, lng: 70.91964080203437, time: new Date(Date.now()), cause: "eSzVDuALMC", deaths: 7, country: "india", state: "gujrat", city: "rajkot" },
	{ lat: 23.239039667218233, lng: 69.65346648562812, time: new Date(Date.now()), cause: "9 Pg9 NPjn", deaths: 8, country: "india", state: "gujrat", city: "bhuj" },
	{ lat: 23.264274707624867, lng: 69.37880828250312, time: new Date(Date.now()), cause: " FtxXNr J", deaths: 1, country: "india", state: "gujrat", city: "bhuj" },
	{ lat: 23.430705968400716, lng: 69.15908172000312, time: new Date(Date.now()), cause: "RdyxbS BEK", deaths: 5, country: "india", state: "gujrat", city: "bhuj" },
	{ lat: 23.47102147166259, lng: 69.57656218875312, time: new Date(Date.now()), cause: " S p AVyYH", deaths: 1, country: "india", state: "gujrat", city: "bhuj" },
	{ lat: 23.430705968400716, lng: 69.84572722781562, time: new Date(Date.now()), cause: "tRp zsOTfg", deaths: 6, country: "india", state: "gujrat", city: "bhuj" },
	{ lat: 23.10268806430477, lng: 70.08467986453437, time: new Date(Date.now()), cause: "h7yU BdpK6", deaths: 4, country: "india", state: "gujrat", city: "bhuj" },
	{ lat: 22.92320019425087, lng: 69.67269255984687, time: new Date(Date.now()), cause: "hG4BwK26if", deaths: 9, country: "india", state: "gujrat", city: "bhuj" },
	{ lat: 23.37525207516704, lng: 68.70314910281562, time: new Date(Date.now()), cause: "3MMBKsvZ ", deaths: 4, country: "india", state: "gujrat", city: "bhuj" },
	{ lat: 19.369901892219765, lng: 72.82851531375312, time: new Date(Date.now()), cause: "0wHdMrxLz ", deaths: 7, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.483871109234826, lng: 73.14162566531562, time: new Date(Date.now()), cause: " KHf8JhXzM", deaths: 0, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.240294629213043, lng: 73.30642058719062, time: new Date(Date.now()), cause: "mUuJ0z0zL ", deaths: 6, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.120965486280532, lng: 73.16359832156562, time: new Date(Date.now()), cause: "IVEUbBT6Ed", deaths: 7, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.126155506113644, lng: 72.88894011844062, time: new Date(Date.now()), cause: "CO b6X Z 9", deaths: 0, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.31288735056118, lng: 73.02077605594062, time: new Date(Date.now()), cause: "qEZCXyz1xF", deaths: 7, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.193610914457143, lng: 72.99880339969062, time: new Date(Date.now()), cause: "nAZ 58 PBk", deaths: 9, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 18.934016509907895, lng: 73.02626922000312, time: new Date(Date.now()), cause: "sHXEevey R", deaths: 9, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.037903027270445, lng: 73.39980437625312, time: new Date(Date.now()), cause: " FpuVQgYf6", deaths: 1, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.43207683201265, lng: 73.39980437625312, time: new Date(Date.now()), cause: "EMV ER5FIq", deaths: 2, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.26103868829634, lng: 73.68544890750312, time: new Date(Date.now()), cause: "CFprcg IF9", deaths: 6, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 18.928820484305742, lng: 73.59755828250312, time: new Date(Date.now()), cause: "h7s VzB4cp", deaths: 7, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 18.720847348315107, lng: 73.32839324344062, time: new Date(Date.now()), cause: "qJhv XX8jU", deaths: 4, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 19.644327964997487, lng: 72.90541961062812, time: new Date(Date.now()), cause: "vx GR yzpx", deaths: 5, country: "india", state: "maharashtra", city: "mumbai" },
	{ lat: 22.545756064896963, lng: 75.80031707156562, time: new Date(Date.now()), cause: "o2HeRm6qSD", deaths: 3, country: "india", state: "madhyapradesh", city: "indore" },
	{ lat: 22.96114005302663, lng: 75.56960418094062, time: new Date(Date.now()), cause: "v7 hd MT2 ", deaths: 2, country: "india", state: "madhyapradesh", city: "indore" },
	{ lat: 23.011709976487253, lng: 76.07497527469062, time: new Date(Date.now()), cause: "gxC 4 8 ar", deaths: 3, country: "india", state: "madhyapradesh", city: "indore" },
	{ lat: 22.85994348688919, lng: 75.30593230594062, time: new Date(Date.now()), cause: "4P1WghDsX4", deaths: 3, country: "india", state: "madhyapradesh", city: "indore" },
	{ lat: 22.576192755595738, lng: 75.07521941531562, time: new Date(Date.now()), cause: "cJR0oax t2", deaths: 1, country: "india", state: "madhyapradesh", city: "indore" },
	{ lat: 22.71814166476486, lng: 76.28371550906562, time: new Date(Date.now()), cause: "UWTcMbgLOJ", deaths: 4, country: "india", state: "madhyapradesh", city: "indore" },
	{ lat: 23.56672141106305, lng: 76.12990691531562, time: new Date(Date.now()), cause: " VUWv Su8N", deaths: 5, country: "india", state: "madhyapradesh", city: "indore" },
	{ lat: 23.677444809387428, lng: 75.27297332156562, time: new Date(Date.now()), cause: "xs pKe 8mQ", deaths: 3, country: "india", state: "madhyapradesh", city: "indore" },
	{ lat: 22.97056785417232, lng: 72.55152810464357, time: new Date(Date.now()), cause: "FNJMm6vBgM", deaths: 3, country: "india", state: "gujrat", city: "ahmedabad" },
	{ lat: 23.005966318603615, lng: 72.67787087808107, time: new Date(Date.now()), cause: "D z9vTqHbR", deaths: 1, country: "india", state: "gujrat", city: "ahmedabad" },
	{ lat: 23.081788896130057, lng: 72.22193826089357, time: new Date(Date.now()), cause: "Gp ysCtJ7I", deaths: 5, country: "india", state: "gujrat", city: "ahmedabad" },
	{ lat: 23.43002063003915, lng: 72.60096658120607, time: new Date(Date.now()), cause: "qg YtbtFaz", deaths: 7, country: "india", state: "gujrat", city: "ahmedabad" },
	{ lat: 22.95539424457092, lng: 73.01295388589357, time: new Date(Date.now()), cause: "5Feae4O0Rn", deaths: 4, country: "india", state: "gujrat", city: "ahmedabad" },
	{ lat: 22.763048147844334, lng: 72.53504861245607, time: new Date(Date.now()), cause: " SX3 KpvsW", deaths: 5, country: "india", state: "gujrat", city: "ahmedabad" },
	{ lat: 23.324133418767712, lng: 73.00746072183107, time: new Date(Date.now()), cause: "Xa cH7QsKf", deaths: 6, country: "india", state: "gujrat", city: "ahmedabad" },
	{ lat: 23.44514046415039, lng: 72.12855447183107, time: new Date(Date.now()), cause: "bC6pGTuOAg", deaths: 8, country: "india", state: "gujrat", city: "ahmedabad" },

]



var hospital = [
	{ lat: 22.224495565154104, lng: 70.87157561648749, name: "uc p rg", address: "b0gtj7hi6 daa 97qqctpa6gxrr35q", number: 6151280258 },
	{ lat: 22.27025373375924, lng: 70.66970183719062, name: "j 5xeze", address: "hq74 s71zzs82y4co qmvpssx6oywg", number: 7124691343 },
	{ lat: 22.446790489377836, lng: 70.83175017703437, name: " m4gki5", address: "q9m o60ipzd r1zo4w71gx3pnqp vh", number: 6054948304 },
	{ lat: 22.32870072999621, lng: 70.51177337039374, name: "8aivg8b", address: "e nucgmpsy32 xxg0hk o4n2 owzs", number: 1133750730 },
	{ lat: 22.31345604525125, lng: 71.24785735476874, name: "1z6ev9b", address: "wj9r s8smk3mts5z 9jsyja 5oegtz", number: 5102482079 },
	{ lat: 22.003120961226017, lng: 70.79741790164374, name: "2qa3j1r", address: "b1ruhste1kbxjyvqtpyxptgkhhrenu", number: 1497548981 },
	{ lat: 22.27025373375924, lng: 70.21514251101874, name: "54vcjee", address: " u8aprtapb0 hry ryike6xunxj3b6", number: 5514765777 },
	{ lat: 22.514044039549457, lng: 70.25084807742499, name: "aatv6nm", address: "5zsuhjumy3f k7j p8orxsxrza4r w", number: 4037765620 },
	{ lat: 21.558058811508566, lng: 70.10939910281562, name: "dy060bv", address: "dui22i 53cqnhp4d2wq5 18957u 68", number: 7238466338 },
	{ lat: 21.169265636339098, lng: 71.14211394656562, name: "yg21cd6", address: "ohe 4edxhgca54wf23ihrdp2ku2 j", number: 5708253295 },
	{ lat: 22.21051092219253, lng: 72.63625457156562, name: "hs7g m ", address: "wu67qsy d9nudd7 jvmspcoh105 sh", number: 7964349612 },
	{ lat: 22.068042606758965, lng: 73.66896941531562, name: "of htm ", address: "jr z7ojm9xgcxo1ajwifad3fg8 c47", number: 2691101728 },
	{ lat: 21.005255904574163, lng: 73.36135222781562, name: "8pxch7x", address: "wzj984oux2k52ycneq5vz3vtormpb0", number: 2032960033 },
	{ lat: 23.586859895900606, lng: 74.37209441531562, name: "y4c06 o", address: "29kb7ymy352ju53fwrvbf22hr5gqjj", number: 5146627878 },
	{ lat: 24.20961035130656, lng: 72.24074675906562, name: "gkekn2d", address: "rxjif0x8 ocx3aux8zzms5dzfzubtg", number: 5912936127 },
	{ lat: 24.28974588078237, lng: 69.42824675906562, name: "hfx2f77", address: "a sfa6p 703iz ij4s vdu1e qrg c", number: 1683810271 },
	{ lat: 25.048494768587187, lng: 71.80129363406562, name: "v1kceh3", address: "is8tw292jy 6tqjwh rwa1i8phpvn", number: 4890918366 },
	{ lat: 25.0285870301781, lng: 74.37209441531562, name: "qtk53om", address: "mr6u z4x zew w7rhc1nb6jz1urq0k", number: 761899528 },

]

var helpline = [
	{ lat: 22.312185579694248, lng: 73.77883269656562, number: 7164443861 },
	{ lat: 24.00905119279093, lng: 85.02883269656562, number: 7242897824 },
	{ lat: 11.56906623386055, lng: 77.99758269656562, number: 5297364192 },
	{ lat: 31.017835515328628, lng: 76.50344207156562, number: 2991920285 },
	{ lat: 33.90937128786718, lng: 90.21437957156562, number: 3160494598 },
	{ lat: 32.80825199241377, lng: 59.18898894656562, number: 8673583347 },
	{ lat: 32.363923033476595, lng: 47.67531707156562, number: 5198971225 },
	{ lat: 39.81082755120919, lng: 83.88625457156562, number: 7159899678 },
	{ lat: 34.127916936024235, lng: 97.86086394656562, number: 4754747841 },

]

var pumps = [
	{ lat: 21.920758660484623, lng: 70.1733336442647, name: "h e g1x", address: "w njim6nttc4dwfdh mr 6sy497d4 " },
	{ lat: 22.233817287956906, lng: 70.2557311052022, name: "jnr79 7", address: "j8yuk0q4zidpomer4raymkwewcyzx " },
	{ lat: 22.15752555829954, lng: 70.4644713395772, name: "d2zv9tf", address: "827jk9 3irma4utjj8vkq12qr9wb46" },
	{ lat: 22.020096215730486, lng: 70.8874449723897, name: "u578z8z", address: "c8959z1wkiihyjwpsjm4zqqkx vri1" },
	{ lat: 22.530957429287497, lng: 71.1071715348897, name: "r vvy a", address: "0gmjsb05ak6knnp 3vian 3k8zt zj" },
	{ lat: 22.612115712371423, lng: 70.8380064958272, name: "jpc9o m", address: "gt985bmcimjpzxfk6426ui3 nqqs1f" },
	{ lat: 22.256696718754856, lng: 71.67022085129595, name: "j048k o", address: "pucecrdm2a8e kmgbrhvq3fm1zs u " },
	{ lat: 21.777998889876265, lng: 71.3543639177022, name: "iau0pp8", address: "a19heaz5ht5 jg97 epxug31btm w7" },
	{ lat: 21.416464866758457, lng: 71.02752065598345, name: "pefz40s", address: "5hqjrpivqi2gxbka 7s7s06fb fh90" },
	{ lat: 21.09393746447844, lng: 70.74736928879595, name: "hojx7q3", address: "po qe5q oiwfwz74 m40m8 drbmgwf" },
	{ lat: 21.544255485786536, lng: 69.84649038254595, name: "2by4yrf", address: "6354nipku 5oe9aa4atice tc847 u" },
	{ lat: 22.059379482287024, lng: 69.23125600754595, name: "m95a3o ", address: "a65o7ieqm eaxyc57 z26x5vj om j" },
	{ lat: 21.646407058761884, lng: 72.14263296067095, name: "9jm 4f6", address: "z69abid0ak2u8m6ti9q2zy8babr271" },
	{ lat: 23.023329813819227, lng: 71.91741323410845, name: "0t8vs7f", address: "uj3i gs7pt46z5t5e5c84em1xiuip1" },
	{ lat: 22.856391663309456, lng: 72.91716909348345, name: "ccet v0", address: "nzayga90hger x9vgcjkujdait7yiv" },
	{ lat: 22.542196084085727, lng: 72.64800405442095, name: "saavh2n", address: "ze i qxyrrcv7rh umb bki4yboe7i" },
	{ lat: 21.952427322270392, lng: 72.81829214035845, name: "izdm3c ", address: "u 214wm7 am8m p qh9rjaeq6jvjw9" },
	{ lat: 21.396007970282824, lng: 72.97759389817095, name: "b dguh ", address: "ufmyi7wbv2 91vt7tze5qw90usu1 4" },
	{ lat: 23.565780466144577, lng: 70.80055203626773, name: "k2x1k ", address: "5yv 82q7b2a2is a o7ro dar2osjv" },
	{ lat: 23.626187081758683, lng: 71.99806180189273, name: " 41qx y", address: " z 6vde0fmo3 86in37u4reywrruwn" },
	{ lat: 23.505346059154153, lng: 72.95387234876773, name: "aj0047j", address: "f 7d929gvxopo169by t4 4ihr56 " },
	{ lat: 23.162362109602867, lng: 73.54713406751773, name: "mpccq04", address: " jza 4d6 74gc9ugk8n256nk 4beco" },
	{ lat: 24.218693845768183, lng: 73.77784695814273, name: "nifrw69", address: "gztv870vshi991 k13gxtvo8o29 9v" },
]



var map
var res;
var res_hospitals;
var res_helpline
var range_1; 
var range_2;
var range_3;
var result_container = document.getElementsByClassName("result-container")[0];


var countrys = new Set();
var states = new Set();
var citys = new Set();

var co = document.getElementById("country-opt");
var so = document.getElementById("state-opt");
var cto = document.getElementById("city-opt");

data.forEach((val)=>{
	countrys.add(val.country);
})
countrys.forEach((val)=>{
	co.innerHTML+=`<option value="${val}">${val}</option>`
})

function filterData(){
	if(co.value !== ""){
		data.forEach((val)=>{
		
			if(val.country === co.value){
				
				states.add(val.state);
			}
		})
		console.log(states);
		states.forEach((val)=>{
			so.innerHTML+=`<option value="${val}">${val}</option>`
		})
	}
}




function myMap() {
	var location = { lat: 22.312185579694248, lng: 70.79055144656562 };

	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 7,
		center: location,
		mapTypeId: google.maps.MapTypeId.HYBRID,
	});

	var marker = new google.maps.Marker({ position: location });

	map.addListener('click', async function (event) {
		var latitude = event.latLng.lat();
		var longitude = event.latLng.lng();
		range_1 = 0.7;
		res = data.filter((a) => {
			if (a.lat >= latitude - range_1 && a.lat <= latitude + range_1 & a.lng >= longitude - range_1 && a.lng <= longitude + range_1) {
				return true;
			}
		})
		// dataGenratior(latitude, longitude);
		// hospitalGenratior(latitude, longitude);
		// helplineGenratior(latitude,longitude);
		// petrolpumpGenratior(latitude, longitude);
		if (res.length <= 1) {
			marker.setIcon({ url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' })
		} else if (res.length <= 5) {
			marker.setIcon({ url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png' })
		} else {
			marker.setIcon({ url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' })
		}
		range_1 = 1.2;
		res_hospitals = hospital.filter((a) => {
			if (a.lat >= latitude - range_1 && a.lat <= latitude + range_1 & a.lng >= longitude - range_1 && a.lng <= longitude + range_1) {
				return true;
			}
		})
		range_1 = 5;
		res_helpline = helpline.filter((a) => {
			if (a.lat >= latitude - range_1 && a.lat <= latitude + range_1 & a.lng >= longitude - range_1 && a.lng <= longitude + range_1) {
				return true;
			}
		})
		showData(result_container, res);

		marker.setPosition({ lat: latitude, lng: longitude });
		await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=887153d964bd41bc4c3cb1947d7083d3`)
			.then(data => { return data.json() }).then((data) => {
				console.log(data);
				var infowindow = new google.maps.InfoWindow({
					content: `temperature : ${data.main.temp} <br> weather : ${data.weather[0].description} <br> wind speed : ${data.wind.speed}`,
				});

				marker.addListener("click", function () {
					infowindow.open(map, marker);
				});
			})
	});
	marker.setMap(map);

}

// ===============================================================
function showAllLocation() {
	data.forEach(a => {
		var mar = new google.maps.Marker({ position: { lat: a.lat, lng: a.lng } })
		mar.setMap(map);
	})
}
function showAllHospitals() {
	hospital.forEach(a => {
		var mar = new google.maps.Marker({ position: { lat: a.lat, lng: a.lng } })
		mar.setIcon({ url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' })
		mar.setMap(map);
	})
}

function showAllPumps(){
	pumps.forEach(a => {
		var mar = new google.maps.Marker({ position: { lat: a.lat, lng: a.lng } })
		mar.setIcon({ url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png' })
		mar.setMap(map);
	})
}


function showData(el, arr) {
	el.innerHTML = `<tr>
	<td>Date</td>
	<td>Cause</td>
	<td>Deathes</td>
	<td>City</td>
	</tr>`;
	arr.forEach(a => {
		el.innerHTML += `<tr>
		<td>${a.time.getDate()}/${a.time.getMonth()}/${a.time.getFullYear()}</td>
		<td>${a.cause}</td>
		<td>${a.deaths}</td>
		<td>${a.city}</td>
	</tr>`
	})
}

function showHelpLine(el, arr) {
	el.innerHTML = `<tr><th>Helpline Number</th></tr>`;
	arr.forEach(a => {
		el.innerHTML += `<tr>
		<td>${a.number}</td>
	</tr>`
	})
}

function showHospitals(el, arr) {
	el.innerHTML = `<tr>
	<td>Name</td>
	<td>Address</td>
	<td>number</td>
	</tr>`;
	arr.forEach(a => {
		el.innerHTML += `<tr>
		<td>${a.name}</td>
		<td>${a.address}</td>
		<td>${a.number}</td>
	</tr>`
	})
}






// function getCurrentLocation() {
// 	if (navigator.geolocation) {
// 	  navigator.geolocation.getCurrentPosition((data)=>{
// 		google.maps.event.trigger(map, 'click');
// 	  });
// 	} else {
// 	  x.innerHTML = "Geolocation is not supported by this browser.";
// 	}
//   }







function makeid(length) {
	let result = '';
	const characters = 'abcdefghijk mnopqrs tuvwxyz0123456789 ';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}

var fack_data = document.getElementById('fackdata');

function dataGenratior(lat, lng) {
	fack_data.innerHTML += `{lat:${lat},lng:${lng},time:new Date(Date.now()),cause:"${makeid(10)}",deaths:${Math.floor(Math.random() * 10)},country:"india",state:"gujrat",city:"ahmedabad"},<br>`
}
function hospitalGenratior(lat, lng) {
	fack_data.innerHTML += `{lat:${lat},lng:${lng},name:"${makeid(7)}",address:"${makeid(30)}",number:${Math.floor(Math.random() * 10000000000)}},<br>`
}

function helplineGenratior(lat, lng) {
	fack_data.innerHTML += `{lat:${lat},lng:${lng},number:${Math.floor(Math.random() * 10000000000)}},<br>`
}

function petrolpumpGenratior(lat, lng) {
	fack_data.innerHTML += `{lat:${lat},lng:${lng},name:"${makeid(7)}",address:"${makeid(30)}"},<br>`
}




