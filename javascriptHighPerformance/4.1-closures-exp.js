// nested closure 
num = 20
function x(){
    var a = 10;
    function y(){
        var b = 20;

        function z(){
            var c =30;
            console.log(a,b,c)
        }
        z()
    }
    y()
}
x()
