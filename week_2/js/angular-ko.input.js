/**
 * Created by hp on 2016-04-09.
 */
 
angular.module("kr-input",[]).directive("krInput",[function(){
    return {
        restrict:"A",
        compile:function(element) {
            element.on("compositionstart",function(e) {
                //keyevent를 계속 걸리게 하는 event
                e.stopImmediatePropagation();
                //console.log("compositionstart");
            });
        }
    }
}]);