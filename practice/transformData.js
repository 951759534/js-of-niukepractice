/*
*
*
* 请实现个方法 transformData, 递归处理数据，给所有的父节点（children 不为空的）添加一个字段 relateId, 值为当前第一个子节点（children 为空的) id 的值。
 如上面的数据经过处理后的结果为：
*
* */
const data = [
    {
        "id": '1',
        "children": [
            {
                "id": '1-1',
                "children": [],
                "value": "a-1",
            },
            {
                "id": '1-2',
                "children": [],
                "value": "a-2",
            },
        ],
        "value": "a",
    },
    {
        "id": '2',
        "children": [
            {
                "id": '2-1',
                "children": [
                    {
                        "id": '2-1-1',
                        "children": [],
                        "value": "c-1",
                    },
                ],
                "value": "b-1",
            },
        ],
        "value": "b",
    },
    {
        "id": '3',
        "children": [
        ],
        "value": "c",
    }
];
function transformData(data){
    var flag = true;
    (function(){
        if(flag && data instanceof Array){
            for(var i = 0; i < data.length;i++){
                transformData(data[i]);
            }
            flag = false;
        }else{
            if(data.children&&data.children.length){
                    data.relateId = data.children[0].id;
                   transformData(data.children)
            }
        }
    })()
}
transformData(data);
console.log(data);