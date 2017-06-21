var img = document.getElementById('mainbody-top-imgone-img');

img.onclick = function exchange() {
    // body...
    var fromCity = document.getElementById('mainbody-top-from-input1').value;
    var toCity = document.getElementById('mainbody-top-from-input2').value;
    document.getElementById('mainbody-top-from-input1').value = toCity;
    document.getElementById('mainbody-top-from-input2').value = fromCity;

}

var setOutData = document.getElementById('set-out-data');
setOutData.onfocus = function showOutData() {
    document.getElementById("toublecalender").style.display = "block";
}

var toublecalenderCloseImg = document.getElementById("toublecalender-close-img");
toublecalenderCloseImg.onclick = function closeOutData() {
        document.getElementById("toublecalender").style.display = "none";
    }
    // toublecalenderCloseImg.addEventListener('click',closeOutData,false);
    // var gradient = document.getElementById("gradient");
    // var gradient = $('#gradient');
    // console.log(gradient);
    // function ajax() {
    //     var xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState == 4) {
    //             if (xhr.status == 200 || xhr.status == 304) {
    //                 alert(xhr.responseText); //responseText这个属性用来获取文本
    //             } else {
    //                 alert(xhr.status);
    //             }
    //         }
    //     };
    //     xhr.open("get", "http://www.yunwii.com:5000/ticketFilter", true); //此时请求还没有发送
    //     // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //     xhr.send("null");
    // }

$('#gradient').on('click', function() {
    // console.log("$('#gradient')");
    $.get('http://www.yunwii.com:5000/ticketFilter', function(data) {
        // var one = $('table');
        // var $tbody = $('<tbody></tbody>');
        // var tr1 = document.createElement('tr');
        // var tbody = document.getElementsByTagName('tbody')[0];
        // tbody.appendChild(tr1);
        // $('#table').append('$tbody');
        var data1 = JSON.parse(data);//将string类型json转化为Object
        for (var i = 0; i < 6; i++) {
            var row = data1[i];
            // console.log(row['trainID']);
            var $tr = $('<tr class="table_tr"></tr>');//将tr添加到dom树中
            $('#tbody').append($tr);
            var trainID = $('<td>' + row['trainID'] + '</td>');
            var fromCity = $('<td>' + row['fromCity'] + '</td>');
            var toCity = $('<td>' + row['toCity'] + '</td>');
            var setOutDate = $('<td>' + row['setOutDate'] + '</td>');
            var returnDate = $('<td>' + row['returnDate'] + '</td>');
            var business = $('<td>' + row['business'] + '</td>');
            var special = $('<td>' + row['special'] + '</td>');
            var first = $('<td>' + row['first'] + '</td>');
            var second = $('<td>' + row['second'] + '</td>');
            var price = $('<td>' + row['price'] + '</td>');
            var isSameDay = $('<td>' + row['isSameDay'] + '</td>');
            var wholeTime = $('<td>' + row['wholeTime'] + '</td>');
            
            $tr.append(trainID).append(fromCity).append(toCity).append(setOutDate).append(returnDate).append(business).append(special).append(first).append(second).append(price).append(isSameDay).append(wholeTime).append('<td></td>');
            
        }
    })
});
