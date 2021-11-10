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
	}
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