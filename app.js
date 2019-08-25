let container=document.querySelector('.row');
let form=document.querySelector('form');
let search=0;
function getMovie() {
    let name=document.querySelector('.search').value;

    let a='https://www.omdbapi.com/?s='+name+'&apikey=81855d4c&';


    let fs=fetch(a);
    if(search!==0){
        container.innerHTML='';
    }
    fs.then(function (data) {
        data.json().then(function (response) {
             // console.log(response);
             let movie=response.Search;
               console.log(movie);

             movie.forEach(function (data) {

                 // console.log(data);






                 let img=document.createElement("img");
                 img.setAttribute('src',data.Poster);
                 img.classList.add("col-lg-3");
                 img.classList.add("col-md-3");
                 img.classList.add("col-sm-3");
                 img.style.color = "white";
                 img.style.width = "100px";
                 img.style.height = "200px";
                 img.style.margin = "2px";
                 // img.style.backgroundColor='#b58900';
                 document.querySelector(".row").appendChild(img);
                 // div.innerHTML = data.Title;

                 img.onclick=function () {
                    movieslec(data.imdbID);

                 }


             });


        });
        form.t.value='';


    });
    search++;

    function movieslec(id) {
sessionStorage.setItem('movieid',id);
window.location='movie.html';



    }


}















































