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
   var file_data = $("#file_path").prop("files")[0];   // Getting the properties of file from file field
	 var form_data = new FormData();                  // Creating object of FormData class
	 form_data.append("file", file_data)

  //  var apigClient = apigClientFactory.newClient({
  //                    apiKey: "swsfM8p6i71jP3kgUEwyB3DzE8xOQSjR6YCRsCXo"
  //       });

   var data = document.getElementById('file_path').value;
   var x = data.split("\\")
   var filename = x[x.length-1]
   console.log(filename)

   var body = {};
   var params = {"key" : filename , "bucket" : "b2-store-images" , "Content-Type" : "image/jpg"};
   var additionalParams = {};
  
   sdk.bucketKeyPut(params, body , additionalParams).then(function(res){
     console.log(res)
   }).catch( function(result){

   });
return false;

}
