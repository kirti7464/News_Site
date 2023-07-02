async function fetchData() {
   
    fetch("https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=9e3a23f7da17323a58529418239555ff")
    .then(data=>data.json())
    .then (data=>{
        
        let x = Math.floor((Math.random() * 10) + 1);
        const newsRes= data.articles[x];
        if(!newsRes) return [];

         document.getElementById("title").innerHTML = newsRes.title
         document.getElementById("description").innerHTML = newsRes.description
         document.getElementById("link").href = newsRes.url
         document.getElementById("img").src = newsRes.image
})

}
fetchData();
