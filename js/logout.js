 $('a[id=log]').on('click', function() {
     var d = dialog({
         content: '是否登出',
         okValue: '是',
         quickClose: true,
         cancelValue: '否',
     });
     d.show();
 });