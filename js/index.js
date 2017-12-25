window.onload = function () {
    (function () {

        var oPlay = document.getElementById('play');
        var oI = document.getElementById('play-img');
        var oA = document.getElementById('play-box');
        var aLi = oI.getElementsByTagName('li');
        var aA = oA.getElementsByTagName('a');
        function play() {
            for (var i = 0; i < aLi.length; i++) {
                aA[i].index = [i];
                console.log(aA);
                aA[i].onmouseover = function () {
                    for (var i = 0; i < aLi.length; i++) {
                        aLi[i].style.display='none';
                        aA[i].style.backgroundColor="#fff";
                    }
                    aLi[this.index].style.display = "block";
                    this.style.backgroundColor="#333";
                }
            }
        }
        play();
        var timer=null;
            clearInterval(timer);
            var j=0;
            function abc() {
                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].style.display='none';
                    aA[i].style.backgroundColor="#fff";
                }
                aLi[j].style.display='block';
                aA[j].style.backgroundColor="#333";
            }
            function aaa() {
                if(j<aLi.length){
                    abc();
                    j=j+1;
                    if(j>=aLi.length){
                        j=0;
                    }
                }
            }
            timer=setInterval(aaa,2500);
            oPlay.onmouseover=function () {
                clearInterval(timer);
            };
            oPlay.onmouseout=function () {
                timer=setInterval(aaa,2500)
            }
    })()
};