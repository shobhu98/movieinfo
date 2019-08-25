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

// return false;


    }


}















































// movie.forEach(function (data) {
//     // console.log(data);
//     var div = document.createElement("div");
//     div.style.width = "200px";
//     div.style.height = "200px";
//     div.style.margin = "2px";
//     div.style.backgroundColor='#b58900';
//
//     var btn = document.createElement('button');
//     btn.style.width='80px';
//     btn.style.height='40px';
//     btn.innerHTML = "Details";
//     btn.style.backgroundColor='white';
//     btn.onclick=function () {
//         movieslec(data.imdbID);
//
//     };
//
//
//
//     div.classList.add("col-lg-3");
//     div.classList.add("col-md-3");
//     div.classList.add("col-sm-3");
//     div.style.color = "white";
//     div.innerHTML = data.Title;
//     document.querySelector(".row").appendChild(div);
//     div.appendChild(btn);
//
//
// })
