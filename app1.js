

function getdetails() {
  let movie=sessionStorage.getItem('movieid');
  console.log(movie);

    let a='https://www.omdbapi.com/?i='+movie+'&apikey=81855d4c&';
    let fs=fetch(a);
    fs.then(function (data) {
        data.json().then(function (response) {
             console.log(response);
             document.title=response.Title;

            // console.log(movie);
            let img=document.createElement('img');
                img.classList.add("col-md-4");
                console.log(response.Poster);
                img.setAttribute('src',response.Poster);


            let div1=document.createElement('div');
            div1.classList.add("col-md-8");

            let h3=document.createElement('h3');
            let strong=document.createElement('strong');
            strong.innerText="Title";
            // h2.appendChild(strong);
            // h2.appendChild(response.Title);
            h3.append(strong);
            h3.append(': '+response.Title);

            let ul=document.createElement('ul');
            let li1=document.createElement('li');
            let li2=document.createElement('li');
            let li3=document.createElement('li');
            let li4=document.createElement('li');
            let li5=document.createElement('li');
            let li6=document.createElement('li');
            let li7=document.createElement('li');
            let li8=document.createElement('li');

            li1.innerText=response.Genre;

            li2.innerText=response.Released;
            li3.innerText=response.Rated;
            li4.innerText=response.imdbRating;
            li5.innerText=response.Actors;
            li6.innerText=response.Director;
            li7.innerText=response.Writer;
            li8.innerText=response.Plot;
            ul.classList.add("list-group")
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            ul.appendChild(li8);
         let p=   document.createElement('p');




            div1.appendChild(h3);
            div1.appendChild(ul);
            div1.appendChild(p);
            div1.appendChild(p);
            div1.appendChild(p);











                document.querySelector('.row').appendChild(img);
                document.querySelector('.row').appendChild(div1);



        });


    });


}
window.onload=getdetails();

