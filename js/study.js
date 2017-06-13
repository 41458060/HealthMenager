$('button[id=log]').on('click', function() {
    var d = dialog({
        title: '医院详细信息',
        content: '<label>医院名称：' + name + '</label><br/>' + '<label>医院地址：' + location + '</label><br/>' + '<label>医院性质：' + property + '</label><br/>' + '<label>医院等级：' + level + '</label><br/>' + '<label>联系电话：' + phone + '</label><br/>',
        quickClose: true,
        follow: this,
    });
    d.show();
});