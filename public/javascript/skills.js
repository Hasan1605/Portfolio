var i=0;
var j=0;
var k=0;
var l=0;
const lang = ["images/C,C++.png","images/Python.png","images/HTML.png","images/css.png","images/javascript.png","images/Node.png"];
const os = ["images/Windows.png","images/Linux.png"];
const database = ["images/MySQL.png","images/MongoDb.png"];
const others = ["images/Git.png","images/Matlab.png","images/AutoCad.png","images/Multisim.png","images/Labview.png","images/powerpoint.png","images/Excel.png","images/ML.png"];
$(".lang img").on("click",function(){
        $(".lang img").attr("src",lang[i]);
        i=i+1;
        i=i%(lang.length);
});
$(".os img").on("click",function(){
    $(".os img").attr("src",os[j]);
    j=j+1;
    j=j%(os.length);
});
$(".other img").on("click",function(){
    $(".other img").attr("src",others[k]);
    k=k+1;
    k=k%(others.length);
});
$(".databases img").on("click",function(){
    $(".databases img").attr("src",database[l]);
    l=l+1;
    l=l%(database.length);
});


