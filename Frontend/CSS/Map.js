//URL to custom endpoint to fetch Access token.
var url = 'https://adtokens.azurewebsites.net/api/HttpTrigger1?code=dv9Xz4tZQthdufbocOV9RLaaUhQoegXQJSeQQckm6DZyG/1ymppSoQ==';

//Initialize a map instance.
var map = new atlas.Map('map', {
   
   view: "Auto",
  
   //Add your Azure Maps subscription client ID to the map SDK. Get an Azure Maps client ID at https://azure.com/maps
    authOptions: {
        authType: "anonymous",
        clientId: "35267128-0f1e-41de-aa97-f7a7ec8c2dbd",
        getToken: function(resolve, reject, map) {
            fetch(url).then(function(response) {
                return response.text();
            }).then(function(token) {
                resolve(token);
            });
        }
    }
});

//Wait until the map resources are ready.
map.events.add('ready', function () {

  //Create a HTML marker and add it to the map.
  var marker = new atlas.HtmlMarker({
    color: 'DodgerBlue',
    text: '10',
    position: [0, 0],
    popup: new atlas.Popup({
      content: '<div style="padding:10px">Hello World</div>',
      pixelOffset: [0, -30]
    })
  });
  
  map.markers.add(marker);
  
  //Add a click event to toggle the popup.
  map.events.add('click',marker, () => {
    marker.togglePopup();
  });
});