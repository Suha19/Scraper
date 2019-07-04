
// Grab the articles as a json
function getArticles(){
  $.getJSON("/articles", function(data) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
  });
}
$(document).on("click", "#scrapArticle", function() {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();  
  $.ajax({
    method: "GET",
    url: "/scrape",
    // data: newArticle
  }).then(
    function(data) {
      console.log(data);
      getArticles();
    }
  );
});

// function clearArticles(){
//   $.getJSON("/articles", function(data) {
//     console.log(data)
//     for (var i = 0; i < data.length; i++) {
//       $("#articles").empty;
//     }
//   });
// }

// $(document).on("click", "#clearArticle", function() {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();  
//   $.ajax({
//     method: "destroy",
//     url: "/clear",
//     // data: newArticle
//   }).then(
//     function(data) {
//       console.log(data);
//       clearArticles();
//     }
//   );
// });




