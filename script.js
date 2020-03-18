$(document).ready(function(){

    
    $('#img1').mouseenter(function(){
        uno(this);
        dos(1);
    });
    
    $('#img2').mouseenter(function(){
        uno(this);
        dos(2);
    });

    $('#img3').mouseenter(function(){
        uno(this);
        dos(3);
    });

    function uno(a){
        if($(a).hasClass('img-f')){
            $(a).removeClass('img-f');
            $(a).addClass('img-nf');
        }else{
        }
    };

    function dos(c){
        var n = '#img';
            ex = 3;
        
        for(var i = 1; ex >= i; i++){
            if(i == c){
            }else{
                if($(n+i).hasClass('img-nf')){
                    $(n+i).removeClass('img-nf');
                    $(n+i).addClass('img-f');
                }else{
                }
            }
        }
    };

});