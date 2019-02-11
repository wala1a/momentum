    function imageSuccess(response) {
       
          
          console.log(response.data.urls.regular);
          var body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = 'url(' + response.data.urls.regular + ')';
      
         
      }
      
      function imageFail(error) { console.log(error); }
      
      
      
      axios({
      
        method: 'get',
        url: 'https://api.unsplash.com/photos/random/?client_id=211f51979f71311b162ccc85775e714ad06363c8e3116490633a2f067dd594ba',
      }).then(imageSuccess)
        .catch(imageFail);



