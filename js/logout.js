 $('button[id=log]').on('click', function() {
     var d = dialog({
         content: '是否登出?',
         okValue: '是',
         ok: function() {},
         quickClose: true,
         cancelValue: '否',
         cancel: function() {},
     });
     d.show();
 });