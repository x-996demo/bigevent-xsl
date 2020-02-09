// 把所有与文章分类相关的操作写在这里

// var category = {
//     // 获取
//     get:function(){
//         return $.get(APILIST.category_get)
//     },
//     /**
//      * 添加文章类型
//      * @param {*} name 
//      * @param {*} slug 
    //  */
    // add:function(name,slug){
    //     return $.post(APILIST.category_add,{'name':name ,'slug':slug })
    // },
    // // 删除文章类型
    // del:function(id){
    //     return $.post(APILIST.category_del,{'id': id})
    // },
    // // 编辑文章类型
    // edit:function(id,name,slug){
    //     return $.post(APILIST.category_edit,{'id':id,'name':name ,'slug':slug })
    // }
// }
const category = {
    // 获取
    get: () => $.get(APILIST.category_get),
    add:(name,slug)=>$.post(APILIST.category_add,{'name':name ,'slug':slug }),
    // 删除文章类型
    del:(id)=>$.post(APILIST.category_del,{'id': id}),
    // 编辑文章类型
    edit:(id,name,slug)=> $.post(APILIST.category_edit,{'id':id,'name':name ,'slug':slug })
    }

