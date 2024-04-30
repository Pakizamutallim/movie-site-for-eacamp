const moviePlace = document.querySelector(".films");

const getData = async () => {
    try{
        const response = await fetch("http://www.omdbapi.com/?t=${move_name}&apikey=7f267504");
        const res = await response.json();
        console.log(res);
        const dataToCard = res.results
        .map((data) => {
            return `<div class="item">
            <div class="bg"
                style="background-image: url('${data.countryName}');">
                <div class="bg2"></div>
            </div>
            <div class="names">
                <p>${data.original_title}</p>
                <span>lorem ipsum</span>
            </div>
            <div class="star">${data.vote_average}</div>
        </div>`
        }).join("");
        moviePlace.innerHTML = dataToCard

    } catch (error){
        console.log(error);
    }
}

getData()


// curl --request GET \
//      --url https://api.themoviedb.org/3/authentication
//      --header 'accept: application/json'


// curl --request GET \
//      --url https://api.themoviedb.org/3/authentication \
//      --header 'Authorization: Bearer 8410ea6a' \
//      --header 'accept: application/json'



//      https://api.themoviedb.org/3/account/{}

// http://api.timezonedb.com/v2.1/get-time-zone?key=UGH5GTXTH0AH&format=json&by=zone&zone=America/New_York

// https://api.themoviedb.org/3/search/movie?api_key=7e3d70e2d0fc85df0bfb0113024f1a15&query=titanic