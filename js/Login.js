$('.rotateBtn').click(e=>{
    if($('.rotateBtn').attr('data-clicked')=='false'){
        $('.loginContainer').css('transform','translateZ(1px) rotateY(180deg)');
        $('.registerContainer').css('transform','translateZ(-1px) rotateY(360deg)');
        $('#registracija').attr('data-clicked','true');
    }else{
        $('.loginContainer').css('transform','translateZ(1px) rotateY(0deg)');
        $('.registerContainer').css('transform','translateZ(-1px) rotateY(180deg)');
        $('.rotateBtn').attr('data-clicked','false');
    }
})