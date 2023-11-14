// open-platform.theguardian.com

const newsInput = document.querySelector('.news-input');
const form = document.querySelector('form');
const newsContainer = document.querySelector('.news-container');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    let searchQuery = newsInput.value;
    fetchNews(searchQuery);
})

async function fetchNews(searchQuery) {
    const apiKey = 'fd36d4ed-18aa-425c-b59a-fb22a61acc65';
    const response = await fetch(`https://content.guardianapis.com/search?q=${searchQuery}&api-key=${apiKey}`)
    const responseData = await response.json();
    //console.log(responseData.response.results);

    newsResults(responseData.response.results)
    
}

function newsResults(results){
    let fetchedNews = '';

    results.forEach((result) =>{
        let newsSection = result.sectionName;
        let newsData = result.webPublicationDate;
        let newsUrl = result.webUrl
        let newsTitle = result.webTitle

        fetchedNews += `
        <div class = "news">
        <p>${newsSection}</p>
        <p>${newsData}</p>
        <a href="${newsUrl}" target="_blank">${newsTitle}</a>
        </div>
        `

        newsContainer.innerHTML = fetchedNews;
    })
    console.log(results)
}