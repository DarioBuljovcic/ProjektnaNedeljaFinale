

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




const searchBar = document.querySelector(".navsearch");
let list = document.getElementById("userneki");
let popupUser = document.querySelector(".popup-prof");
let popupUserImg = document.querySelector(".navimg");
let msgBtn = document.querySelectorAll(".fa-paper-plane-o");

document.addEventListener("click", function(event) {
  if (!searchBar.contains(event.target)) {
    list.innerHTML ="";
    list.style.maxHeight="0px";
    document.querySelector('#aa').ariaPressed="false";
  }
  let edit = document.querySelector('#editAccount');
  if(!popupUserImg.contains(event.target) && !popupUser.contains(event.target) || edit.contains(event.target))
  {
    popupUser.style.transform='translateY(-450px)';
  }
});

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

document.querySelector('#logout').addEventListener('click', e =>{
    
    e.preventDefault();   
    $.ajax({
        type:'POST',
        url:'php/DeleteSession.php'
    })
    window.location.href = "index.php";
})

document.querySelector('#editAccount').addEventListener('click', () =>{
    document.querySelector('.custom-modal').style.display = 'block'
})
document.querySelector('#closeModal').addEventListener('click', () =>{
    document.querySelector('.custom-modal').style.display = 'none'
})
document.querySelector('#editForm').addEventListener('submit', e =>{
    e.preventDefault()
    let username=$("#korisnicko_ime").val();
    let email=$("#edit_email").val();
    let password=$("#edit_password").val();
    if(isNaN(email) || isNaN(username)){ 
        $.ajax({
            type:'POST',
            url:'php/EditUser.php',
            data:{
                username:username,
                email:email,
                password:password
            },success:()=>{                   
                window.location.href = "hexa.php";
            }
        })
    }
})
document.querySelector('#deleteProfile').addEventListener('click', e =>{
    e.preventDefault()

    let text = 'Da li ste sigurni da zelite da obrisete profil?'

    if(confirm(text)===true){
        let user = new User()
        user.delete()
    }
})
