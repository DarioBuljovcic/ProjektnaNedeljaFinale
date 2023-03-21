

const commentUpDown = btn => {
    let main_post_el = btn.closest('.single-post')
    let box = main_post_el.querySelector('.post-comments')

    if(box.ariaPressed == "true")
    {
        box.style.transition = "all .2s ease-out"
        box.style.maxHeight ="0px";
        box.ariaPressed = "false"; 
    }     
    else
    {
        box.style.maxHeight ="500px" 
        box.style.transition = "all .5s ease-in";
        box.ariaPressed = "true";
    }
        
    

         
}
const likeDislike = btn =>{
    if(btn.classList.contains('likedPost'))
    {
        let post_id = btn.closest('.single-post').getAttribute('data-post_id')
        let number_of_likes = parseInt(btn.querySelector('.num2Count').innerText)
        btn.classList.remove('likedPost');
        btn.querySelector('.num1Count').style.transform="translateY(0px)";
        btn.querySelector('.num2Count').style.transform="translateY(-50px)";
        btn.ariaPressed = "false";
    }
    else
    {
        let post_id = btn.closest('.single-post').getAttribute('data-post_id')
        let number_of_likes = parseInt(btn.querySelector('.num2Count').innerText)
        btn.classList.add('likedPost');
        btn.querySelector('.num1Count').style.transform="translateY(50px)";
        btn.querySelector('.num2Count').style.transform="translateY(0px)";
        btn.ariaPressed = "true";
    }

    
}




// const searchBar = document.querySelector(".navsearch");
// let list = document.getElementById("userneki");
// let popupUser = document.querySelector(".popup-prof");
// let popupUserImg = document.querySelector(".navimg");
// let msgBtn = document.querySelectorAll(".fa-paper-plane-o");

// document.addEventListener("click", function(event) {
//   if (!searchBar.contains(event.target)) {
//     list.innerHTML ="";
//     list.style.maxHeight="0px";
//     document.querySelector('#aa').ariaPressed="false";
//   }
//   let edit = document.querySelector('#editAccount');
//   if(!popupUserImg.contains(event.target) && !popupUser.contains(event.target) || edit.contains(event.target))
//   {
//     popupUser.style.transform='translateY(-450px)';
//   }
// });

// document.querySelector('.divimg').addEventListener('click',()=>{
//     let popup=document.querySelector('.popup-prof');

//     if(popup.style.transform=='translateY(0px)')
//     {
//         popup.style.transform='translateY(-450px)';
//         popup.style.opacity="0";
//     }
//     else{
//         popup.style.transform='translateY(0px)';
//         popup.style.opacity="1";
//     }
// });

var w = window.innerWidth;
//Search bar nestaje
const searchBar = document.querySelector(".navsearch");
let list = document.getElementById("userneki");
let popupUser = document.querySelector(".popup-prof");
let popupUserImg = document.querySelector(".navimg");
// let popupUserImg2 = document.querySelector("#imgsmall");
// Add a click event listener to the document object
document.addEventListener("click", function(event) {
  // Check if the target of the click event is inside the search bar
  if (!searchBar.contains(event.target) && !list.contains(event.target)) {
    // If the target is not inside the search bar, hide the search bar
    list.innerHTML ="";
    list.style.maxHeight="0px";
    document.querySelector('#aa').ariaPressed="false";
  }
  if(w<=425)
  {
    if(!popupUserImg.contains(event.target) && !popupUser.contains(event.target) && !document.querySelector('#imgsmall').contains(event.target))
    {
      popupUser.style.transform='translateY(100svh)';
    }
  }
  else{
    if(!popupUserImg.contains(event.target) && !popupUser.contains(event.target) && !document.querySelector('#imgsmall').contains(event.target))
    {
      popupUser.style.transform='translateY(-450px)';
    }
  }

  if(w<=425)
  {
    let popuptopfive=document.querySelector('.left-wrapper .left-side');
  let popuptopfive2=document.querySelector('.left-wrapper');
  let body = document.querySelector('body');
  let zvezda=document.querySelector("#footstar");

  if(!popuptopfive2.contains(event.target) && !popuptopfive.contains(event.target) && !zvezda.contains(event.target))
  {
    popuptopfive.style.transform='translateY(100svh)';
    popuptopfive.style.opacity="0";
    if(!document.querySelector('#imgsmall').contains(event.target))
        body.style.overflow='visible'; 

    popuptopfive2.style.transform='translateY(100svh)';
    popuptopfive2.style.opacity="0";
  }
  }
//   else if(!popupUserImg2.contains(event.target) && !popupUser.contains(event.target))
//   {
//     popupUser.style.transform='translateY(-450px)';
//   }
});

document.querySelector('#allPostsWrapper').innerHTML

document.querySelector('.divimg').addEventListener('click',()=>{
    let popup=document.querySelector('.popup-prof');

    if(popup.style.transform=='translateY(0px)')
    {
        popup.style.transform='translateY(-450px)';
        popup.style.opacity="0";
    }
    else{
        popup.style.transform='translateY(0px)';
        popup.style.opacity="1";
    }
});




    // document.querySelector('#imgsmall').addEventListener('click',()=>{
    //     let popup=document.querySelector('.popup-prof');
    
    //     if(popup.style.transform=='translateY(0px)')
    //     {
    //         popup.style.transform='translateY(-450px)';
    //         popup.style.opacity="0";
    //     }
    //     else{
    //         popup.style.transform='translateY(0px)';
    //         popup.style.opacity="1";
    //     }
    // });


var w = window.innerWidth;
if(w<=425)
{
    document.querySelector('#imgsmall').addEventListener('click',()=>{
        let popup=document.querySelector('.popup-prof');
        let body = document.querySelector('body');
        
        if(popup.style.transform=='translateY(3svh)')
        {
            popup.style.transform='translateY(100svh)';
            popup.style.opacity="0";
            body.style.overflow='visible';
        }
        else{
            popup.style.transform='translateY(3svh)';
            popup.style.opacity="1";
            body.style.overflow='hidden';
        }
    });

    document.querySelector('#footstar').addEventListener('click',()=>{
        let popup=document.querySelector('.left-wrapper .left-side');
        let body = document.querySelector('body');
        let popup2=document.querySelector('.left-wrapper');
        
        if(popup.style.transform=='translateY(-1svh)')
        {
            popup.style.transform='translateY(100svh)';
            popup.style.opacity="0";
            body.style.overflow='visible';

            popup2.style.transform='translateY(100svh)';
            popup2.style.opacity="0";
        }
        else{
            popup.style.transform='translateY(-1svh)';
            popup.style.opacity="1";
            body.style.overflow='hidden';

            popup2.style.transform='translateY(-1svh)';
            popup2.style.opacity="1";
        }
    });
}


document.querySelector('#logout').addEventListener('click', e =>{
    
    e.preventDefault();   
    $.ajax({
        type:'POST',
        url:'php/DeleteSession.php'
    })
    window.location.href = "index.php";
})

document.querySelector('#editAccount').addEventListener('click', () =>{
    document.querySelector('.custom-modal').style.display = 'block';
    console.log('zzzz');
    $("body").css('overflow','hidden');
})
document.querySelector('#closeModal').addEventListener('click', () =>{
    document.querySelector('.custom-modal').style.display = 'none';
    $("body").css('overflow','');
})
document.querySelector('#deleteProfile').addEventListener('click', e =>{
    e.preventDefault()

    let text = 'Da li ste sigurni da zelite da obrisete profil?'

    if(confirm(text)===true){
        let user = new User()
        user.delete()
    }
})



