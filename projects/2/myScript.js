
$(function () {
     console.log("asdsdasd");
     $(document).ajax({
          url: "https://data.cityofchicago.org/resource/7as2-ds3y.json?$group=community_area&$order=community_area%20asc&$where=status=%22open%22&$select=community_area,%20count(*)",
          type: "GET",
          data: {
          }
          }).done(function(data) {
               alert("Retrieved " + data.length + " records from the dataset!");
               alert(test);
               console.log(data);
          });
});