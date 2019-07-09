function getCripto(){
  var resposta;
  //var url = new URL("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest"), params = {'id': '1'}
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
   var myHeaders = new Headers({
     "content-type": "application/json",
     'X-CMC_PRO_API_KEY': '7886dfa9-6b70-4fb9-8e7d-97faa500ff3c'
     "Access-Control-Allow-Origin": '*'
   });

   fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin,nano,tron", {
     method: 'GET',
     headers: myHeaders
   })
     .then(response => response.json())
     .then(function(response){
       resposta = JSON.stringify(response);
       document.getElementById('info').innerHTML= response;
     })
   }
/*
  $.ajax({
         url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin,nano,tron",
         headers: {
           "content-type": "application/x-www-form-urlencoded",
           "x-cmc_pro_api_key": "7886dfa9-6b70-4fb9-8e7d-97faa500ff3c",
           "Access-Control-Allow-Origin": '*'
         },
         type: "GET",
         success: function(response) {
           console.log(response);
         }
      });


}*/

/*

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(function(response){
    resposta = JSON.stringify(response);
    document.getElementById('info').innerHTML= response['userId'];
  })

  */
