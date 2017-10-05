
window.onload = function(){
  odiv1 = document.getElementById("div1");
  odiv2 = document.getElementById("div2");
  odiv3 = document.getElementById("div3");

  console.log(1);
  console.log(2);
  aa();
  for(var i=0; i<10; i++){
    console.log(i);
  }
  console.log(3);
  console.log(4);
  console.log(5);

  // function aa(){ //方法一
  //     var elem = odiv3;
  //     var ol = 0;
  //     while(elem){
  //         ol += elem.offsetLeft;
  //         elem = elem.parentNode;
  //         if(elem.nodeName == "BODY"){
  //             break;
  //         }
  //     }
  //     console.log(ol);
  // }

  //  function aa(){ //方法二
  //      var elem = odiv3;
  //      var ol = 0;
  //      while(elem){
  //          ol += elem.offsetLeft;
  //          elem = elem.offsetParent; //到body之后就停止，因为body相当于最后一个有定位的元素
  //      }
  //      console.log(ol);
  //  }


    function aa(){ //方法三：如果有边框
        var elem = odiv3;
        var ol = 0;
        while(elem){
            ol += elem.offsetLeft + parseInt(getComputedStyle(elem).borderLeftWidth);
            elem = elem.offsetParent; 
   }
        // console.log(ol);
        alert("跳出方法！");
    }
  // aa();
  console.log(odiv3.getBoundingClientRect().left);
}
