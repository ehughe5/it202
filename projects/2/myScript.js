
$(function () {
     $.ajax({
          url: "https://data.cityofchicago.org/resource/7as2-ds3y.json?$group=community_area&$order=community_area%20asc&$where=status=%22open%22&$select=community_area,%20count(*)",
          type: "GET",
          data: { },
          success: function(data){
               AppendDataToTable(data);
               AppendDataToPieChart(data);
               AppendDataToHeat(data);
          }
     });
     
     //===========================================
     function AppendDataToTable(data){
          for(var i = 0; i < data.length; i++){
               var area = data[i].community_area;
               var count = data[i].count;
               var row = "<tr><th>" + area + "</th><th>" + count + "</th></tr>";
               $("#myTable").append(row);
          }
          console.log("end of Append To Table");
     };
     
     //===========================================
     function AppendDataToPieChart(ajaxData){
          
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(function(){
               var myArray=[
                    ['Community Area', 'Count']
               ];
               for(var i = 0; i < ajaxData.length; i++){
                    var area = ajaxData[i].community_area;
                    var count = ajaxData[i].count;
                    //console.log(area + " " + count);
                    var row = [String(area), parseInt(count, 10)];
                    myArray.push(row);
               }
               
               var data = google.visualization.arrayToDataTable(myArray);
     
               var options = {
                    title: 'Open Potholes by Area'
               };
     
               var chart = new google.visualization.PieChart(document.getElementById('piechart'));
          
               chart.draw(data, options);
          });
          
          console.log("end of Append To Pie Chart");
     };
     
     //===========================================
     function AppendDataToHeat(data){
          
     };
});