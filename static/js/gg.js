$.ajax({
    type: "get",
    url: "server/gg.json", // 公告接口
    dataType: "json",
    success: function (response) {
    var html = '';
        html += '<p>' + response["msg"] + '</p>';
        $('.gg').html(html);
    },
});
