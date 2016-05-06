// 获取模块数控
function getIdDate(md,mo,id,call){
    var query = 'list action=module module='+ mo +' id='+ id;
     getDataCom(md,query,function(data){
        call(data); 
    });

}

function getCatIdList(md,mo,catid,call){
    var query = 'list action=module module='+ mo +' catid='+ catid +' order=updatetime num=50';
    getDataCom(md,query,function(data){
        call(data);
    });
}

function getDataCom(md,query,call){
    
    var _url = siteUrl+'index.php?c=api&m=data2&format=jsonp&auth='+md+'&param='+ query;

    $.ajax(
        {
            type:'get',
            url : _url,
            dataType : 'jsonp',
            success  : function(data) {
                 call(data);
            },
            error : function(data) {
                call(false);
            }
        }
    );
}