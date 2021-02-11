document.getElementById('btn').addEventListener('click' , getJokes);


function getJokes(e){
  const number = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET' , `https://v2.jokeapi.dev/joke/Any?type=single&amount=${number}` , true);



  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = ` `


      if(response.error === false){
        response.jokes.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      }else{
        output += '<li>Somthing Went Wrong</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }


  xhr.send();
  e.preventDefault(); 
}