

function getdetails() {
  let movie=sessionStorage.getItem('movieid');
  console.log(movie);

    let a='https://www.omdbapi.com/?i='+movie+'&apikey=81855d4c&';
    let fs=fetch(a);
    fs.then(function (data) {
        data.json().then(function (response) {
             console.log(response);

            // console.log(movie);
            let img=document.createElement('img');
                img.classList.add("col-md-4");
                console.log(response.Poster);
                img.setAttribute('src',response.Poster);










                document.querySelector('.row').appendChild(img);



        });


    });


}
window.onload=getdetails();

