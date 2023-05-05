//Responsive
var w = window.innerWidth;

if(w<=426)
{
    // document.querySelector('#imgsmall').addEventListener('click',()=>{
    //     let popup=document.querySelector('.popup-prof');
    //     let body = document.querySelector('body');
        
    //     if(popup.style.transform=='translateY(3svh)')
    //     {
    //         popup.style.transform='translateY(100svh)';
    //         popup.style.opacity="0";
    //         body.style.overflow='visible';
    //     }
    //     else{
    //         popup.style.transform='translateY(3svh)';
    //         popup.style.opacity="1";
    //         body.style.overflow='hidden';
    //     }
    // });

    $('.openConv').on('click',()=>{
        console.log($(".textUsers").data())
        $(".textUsers").attr('data-opened','true');   
    });
    $('.msgReciver').click(e=>{
        console.log('zatvorio')
        
    });
    $('.showUsers').click((e)=>{
        if($(".textUsers").attr('data-opened')=='true'){
            $(".textUsers").attr('data-opened','false');
            $('.showUsers').attr('data-clicked','false');
        }else{
            $(".textUsers").attr('data-opened','true');
            $('.showUsers').attr('data-clicked','true');
        }
    })

    $("#footstar").click(e=>{          
        if($(e.currentTarget).data('data-clicked')=='true'){ 
            $('body').css('overflow','visible');
            $('.left-side').css('transform','translateY(-500px)')
            $('.overlay').css('opacity','0');
            $('.overlay').css('z-index','-1');
            $(e.currentTarget).data('data-clicked','false');
        }else{  
            $('body').css('overflow','hidden');
            $('.left-side').css('transform','translateY(0px)');
            $('.overlay').css('opacity','1');
            $('.overlay').css('z-index','1000');
            $(e.currentTarget).data('data-clicked','true');
        }
    })
}

$('#logout').click(e=>{
    e.preventDefault();   
    $.ajax({
        type:'POST',
        url:'php/DeleteSession.php'
    })
    window.location.href = "index.php";
})
$('#editAccount').click(e=>{
    document.querySelector('.custom-modal').style.display = 'block';
    $("body").css('overflow','hidden');
})
$('#editAccount').click(e=>{
    document.querySelector('.custom-modal').style.display = 'none';
    $("body").css('overflow','visible');
})
$('#deleteProfile').click(e=>{
    e.preventDefault()

    let text = 'Da li ste sigurni da zelite da obrisete profil?'

    if(confirm(text)===true){
        let user = new User()
        user.delete()
    }
})

$('body').click(e=>{
    console.log($(`.navsearch`).has(e.target).length);
    if(!$(`.navsearch`).has(e.target).length){        
        $('#userneki').css('max-height','0px');
        $('#aa').attr('aria-pressed','false');
    }
})

