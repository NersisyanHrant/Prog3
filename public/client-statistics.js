var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");

//Ամեն 5000 մլվրկ֊ը մեկ
setTimeout(function () {
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 5000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats", function (statistics) {

    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    //console.log(statistics); //այստեղ null է տալիսս 
    table.innerHTML = "";
    tableHTML = "<tr><td>խոտակերի քանակ</td><td>խոտի քանակ</td><td>գիշատիչի քանակ</td><td>արջի քանակ</td><td>վիշապի քանակ</td><td>մահի քանակ</td></tr>";
    for (var st of statistics) {
        //   console.log(st.xotakeriqanak);
        for (var i in statistics) {

            tableHTML += "<tr>";
            tableHTML += "<td>" + st.xotakeriqanak + "</td>";
            tableHTML += "<td>" + st.xotiqanaky + "</td>";
            tableHTML += "<td>" + st.gishatichiqanak + "</td>";
            tableHTML += "<td>" + st.arjqanak + "</td>";
            tableHTML += "<td>" + st.vishapqanak + "</td>";
            tableHTML += "<td>" + st.mahqanak + "</td>";
            //   console.log(tableHTML);
            tableHTML += "</tr>";
        }
    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})

