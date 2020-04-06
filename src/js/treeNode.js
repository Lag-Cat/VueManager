"use strict"
let searchMenuTreeNode = (arr, name) => {
  let searchNode=[];
  console.log(this);
  console.log(searchNode);
  function smt(arr, name) {
    let p = 0;
    while (p < arr.length) {
      //进入数组元素
      if (name == arr[p].name) {
        searchNode.push(arr[p]);
      }
      //判断有没有子节点
      if (arr[p].children) {
        //如果有子节点
        //进入子节点递归
        smt(arr[p].children, name);
      }
      //指针+1
      p++;
    }
  }
  smt(arr,name);
  console.log(searchNode);
  return searchNode;
}

let searchMenuTreePath=(arr,name)=>{
  
}

export {searchMenuTreeNode }