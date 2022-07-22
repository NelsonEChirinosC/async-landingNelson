const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCy5znSnfMsDwaLlROnZ7Qbg&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5e84d4ef3msh55581d360140060p1c11adjsnfd5a0ffbb3d3',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();

    return data
}

// Funciones autoinvocables
(async ()=>{
    try{
        const videos = await fetchData(API);
        console.log(videos)
        let view = `
        ${videos.items.map(video => {
            
            return `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>    
            `
        }).slice(0,4).join('')}
        `;

        content.innerHTML = view;
    }catch(err){
        console.error(new Error(err))
    }
})();

