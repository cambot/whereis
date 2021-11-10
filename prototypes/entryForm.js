const app = Vue.createApp({
  data() {
	const offlineList = loadDirectory();
	const userData = getUserData();
	return {
		searchTerm: '',
		offline: true,
		offlineLocations: offlineList,
		pendingCheckins: mockData(),
		checkinHistory: userData.checkinHistory,
	};
  },
  methods: {
	searchMatch(place) {
		if (this.searchTerm == '') {
			return false;
		}
		return true;
	},
	selectLocation(location) {
		let checkin = {
			geoNameID: location.geoNameID,
			name: location.name,
			country: location.country,
			latitude: location.latitude,
			longitude: location.longitude,
			entryDateTime: '2021-11-11T11:11:11 CST',
		}
		this.pendingCheckins.push(checkin);
		this.searchTerm = '';
	},
	submitCheckins() {
		// mocking API call save to system.
		const submitList = this.pendingCheckins;
		this.checkinHistory.push(...submitList);
		this.pendingCheckins = [];
	},
  }
});

function loadDirectory() {
	return [
	{
		geoNameID: 3040051,
		name: 'Les Escaldes',
		alternateNames: "Ehskal'des-Ehndzhordani,Escaldes,Escaldes-Engordany,Les Escaldes,esukarudesu=engorudani jiao qu,lai sai si ka er de-en ge er da,Эскальдес-Энджордани,エスカルデス＝エンゴルダニ教区,萊塞斯卡爾德-恩戈爾達,萊塞斯卡爾德－恩戈爾達".split(','),
		country: 'AD',
		latitude: '42.50729',
		longitude: '1.53414',
	},
	{
		geoNameID: 292968,
		name: 'Abu Dhabi',
		alternateNames: "A-pu-that-pi,AEbu Saby,AUH,Aboe Dhabi,Abou Dabi,Abu Dabi,Abu Dabis,Abu Daby,Abu Daibi,Abu Dhabi,Abu Dhabi Island and Internal Islands City,Abu Dhabi emiraat,Abu Zabi,Abu Zaby,Abu Zabye,Abu Zabyo,Abu Ḍabi,Abu Ḑabi,Abu-Dabi,Abu-Dabi khot,Abu-Dabio,Abu-Dzabi,Abú Dabí,Abú Daibí,Abú Zabí,Abû Daby,Abū Dabī,Abū Z̧aby,Abū Z̧abye,Abū Z̧abyo,Abū Z̧abī,Ampou Ntampi,Ebu Dabi,Ebu Dhabi,a bu zha bi,abu dhabi,abu-dabi,abudabi,abudhabi,abw zby,abwzby,aputapi,jzyrt abwzby wjzr dakhlyt akhry,xa bud abi,Â-pu-tha̍t-pí,Äbu Saby,Əbu-Dabi,Άμπου Ντάμπι,Αμπου Νταμπι,Αμπού Ντάμπι,Абу Даби,Абу-Даби,Абу-Даби хот,Абу-Дабі,Әбу-Даби,Աբու Դաբի,אבו דאבי,أبوظبي,ئەبووزەبی,ابو ظبى,ابوظبی,ابوظہبی,جزيرة أبوظبي وجزر داخلية اخرى,अबु धाबी,अबू धाबी,আবুধাবি,ਅਬੂ ਧਾਬੀ,ଆବୁଧାବି,அபுதாபி,ಅಬು ಧಾಬಿ,അബുദാബി,අබුඩාබි,อาบูดาบี,ཨ་པོའུ་དྷ་པེ།,အဘူဒါဘီမြို့,აბუ-დაბი,አቡ ዳቢ,アブダビ,阿布扎比,아부다비".split(','),
		country: 'AE',
		latitude: '24.45118',
		longitude: '54.39696',
	},
	{
		geoNameID: 5037649,
		name: 'Minneapolis',
		alternateNames: "City of Minneapolis,Gakaabikaang,MSP,Min-ni-a-po-li-su,Mineapalis,Mineapoli,Mineapolis,Mineapolisa,Mineápolis,Minneapolis,Minneapòlis,Minnéapolis,Minyapolis,Mìn-nì-â-pô-li-sṳ̂,mineaporisu,minepolisa,ming ni a bo li si,ming ni ya bo li si,miniaepolliseu,miniyapolisa,miniyappolis,minniyapolis,mnyapwls,mynyabwls,mynyapwlys,Μινεάπολη,Минеаполис,Миннеаполис,Мінеапаліс,Міннеаполіс,Մինեապոլիս,מיניאפוליס,منیاپولس,مينيابولس,مینیاپولیس,मिनियापोलिस,मिनीयापोलिस,মিনিয়াপোলিস,મિનેપોલિસ,மினியாப்பொலிஸ்,మిన్నియాపోలిస్,ಮಿನ್ನಿಯಾಪೋಲಿಸ್,มินนีแอโพลิส,მინეაპოლისი,ミネアポリス,明尼亞波利斯,明尼阿波利斯,미니애폴리스".split(','),
		country: 'US',
		latitude: '42.50729',
		longitude: '1.53414',
	},
	];
}

function mockData() {
	return [
	{
		geoNameID: 2048,
		name: 'Minneapolis',
		country: 'US',
		latitude: '44.98091981429454',
		longitude: '-93.25336928755515',
		entryDateTime: '2021-11-10T10:43:22 CST',
	}
	];
}

function getUserData() {
	return {
		userName: "Don Quixote",
		email: "lamancha@example.com",
		checkinHistory: [
		{
			geoNameID: 112358,
			name: 'Plymouth',
			country: 'US',
			latitude: '41.95837240768071',
			longitude: '-70.66119558144052',
			entryDateTime: '2021-11-09T09:11:22 CST',
		}
		],
	}
}

app.mount('#entry-form');