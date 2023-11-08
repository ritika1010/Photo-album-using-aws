var data = {
  "images": [{
    "bannerImg1": "https://b2-store-images.s3.amazonaws.com/birdpic"
  },
  {"bannerImg1" : "https://b2-store-images.s3.amazonaws.com/birdpic"
},
{"bannerImg1" : "https://b2-store-images.s3.amazonaws.com/birdpic"
}]
};


document.getElementById("displaytext").style.display = "none";

function searchPhoto()
{

  console.log("INSIDE SEARCH PHOTO ----");
  
  // var apigClient = apigClientFactory.newClient({
  //                    apiKey: "swsfM8p6i71jP3kgUEwyB3DzE8xOQSjR6YCRsCXo"
  //       });


    var user_message = document.getElementById('note-textarea').value;

    var body = { };
    var params = {q : user_message};
    var additionalParams = {};

    sdk.searchGet(params, body , additionalParams).then(function(res){
        console.log("INSIDE GETT ----");
        var data = {}
        var data_array = []
        resp_data  = res.data
        console.log("RESPONSE ----" + res.data);
        resp_data.results.forEach(function(obj) {var json = {};
                  json["bannerImg1"] = obj["url"];
                 data_array.push(json) }
                );

        data["images"] = data_array;
        console.log("CONVERTED RESPONSE --- " + data);

        data.images.forEach( function(obj) {
            var img = new Image();
            img.src = obj.bannerImg1;
            img.setAttribute("class", "banner-img");
            img.setAttribute("alt", "effy");
            document.getElementById("img-container").appendChild(img);
            document.getElementById("displaytext").style.display = "block";
          });
      }).catch( function(result){

      });



}

function uploadPhoto()
{
	var filePath = (document.getElementById('file_path').value).split("\\");
    var fileName = filePath[filePath.length - 1];
    var fileExt = fileName.split(".").pop();

    console.log(fileName);

    var file = document.getElementById("file_path").files[0];
    file.constructor = () => file;

    console.log(file.type);

    let myHeaders = new Headers()
    let requestOptions = {
            // crossDomain: true,
            method: 'PUT',
            headers: {
                "Content-Type": file.type,
                "x-api-key": "D6lHdlUSxTagnzPiqKgsF2UtmFEZIfKs19TSxNVJ"
            },
            // data: encode(file),
            body: file
        };
    
        fetch("https://x7e7p521wg.execute-api.us-east-1.amazonaws.com/cors3/b2-store-images/" + fileName.toString(), requestOptions)
            .then(response => response.text())
            .then(result => {
              console.log(result)

          })
          .catch(error => console.log('error', error));


  document.getElementById('file_path').value = "";

}