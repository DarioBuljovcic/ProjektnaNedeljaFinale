$(document).ready(()=>{

    function loadTop5(){
        $.ajax({
            type:'POST',
            url:'php/MostLikedUsers.php',
            success:(data)=>{
                $(".left-side").html(data);
            }
        })
    }    
    function userPage(){
        $('.singleitemsearchh').off();
        $('.singleitemsearchh').click( e =>{
                e.preventDefault();
                if($(e.target)[0] != $(e.currentTarget).find(".fa")[0]){
                    let id=$(e.currentTarget).attr('name');
                    window.location.href=`./userpage.php?id=${window.btoa(id)}`;
                }
        });
    }
    function loadPost(limits){
        $.ajax({
            type:'POST',
            url:'php/GetPosts.php',
            data:{
                limit:limits
            },
            success: function(data){
                $("#allPostsWrapper").html(data);
                $(".loadMore").off();
                $(".loadMore").on('click',function(e) 
                {
                    rowNum = $(".loadMore").attr("name");
                    loadPost(rowNum);
                    $("#form").trigger("reset");
                    
                });
                $(".userLink").off();
                $(".userLink").on('click',function(e) {
                    let id=$(e.currentTarget).attr('name');
                    window.location.href=`./userpage.php?id=${window.btoa(id)}`;    
                });
                $(".remove-btn").off();
                $(".remove-btn").on('click',function(e) 
                {
                    e.preventDefault();
                    //let msg = $(e.target).closest('.single-post').find('.post-content').text();
                    let id = $(e.target).closest('.single-post').attr("name");
                    $.ajax({
                        type:'POST',
                        url:'php/DeletePost.php',
                        data:{
                            id:id
                        },
                        success: function(data){
                            if(data){
                                console.log(data);
                                loadPost(rowNum);
                                $("#form").trigger("reset");
                            }
                        }
                    })
                });
            
                $("#postBtn").off();
                $("#postBtn").on('click',function(e) 
                {
                    e.preventDefault();
                    if($("#postContent").val()){
                        
                        let msg = $("#postContent").val();
                        $("#postContent").val("");
                        let username = $("#username").text();
                        let id = $("#username").attr('name');
                        $.ajax({
                            type:'POST',
                            url:'php/SendPost.php',
                            data:{
                                msg: msg,
                                username: username,
                                id: id
                            },
                            success: function(data){
                                if(data){
                                    loadPost(rowNum);
                                    $("#form").trigger("reset");
                                }
                            }
                        })
                    }
                });

                $(".like-btn").off()
                $(".like-btn").on('click',function(e) 
                {
                    e.preventDefault();
                    let id = $(e.target).closest('.single-post').attr("name");
                    let likes = parseInt($(e.target).closest('.like-btn').find('.num2Count').text());
                    let test = $(e.target).closest('.like-btn').attr('aria-pressed');
                    
                    if(test=="true"){
                        $(e.currentTarget).removeClass('likedPost');
                        $(e.currentTarget).find('.num1Count').css("transform","translateY(0px)");
                        $(e.currentTarget).find('.num2Count').css("transform","translateY(-50px)");
                        $(e.currentTarget).attr('aria-pressed','false');
                        
                        $.ajax({
                            type:'POST',
                            url:'php/DislikePost.php',
                            data:{
                                id: id,
                                likes: likes-1
                            },success:function(){
                                loadTop5();
                                $(".left-side").trigger("reset");
                            }
                        })
                    } else {
                        $(e.currentTarget).addClass('likedPost');
                        $(e.currentTarget).find('.num1Count').css("transform","translateY(50px)");
                        $(e.currentTarget).find('.num2Count').css("transform","translateY(0px)");
                        $(e.currentTarget).attr('aria-pressed','true');
                        console.log('aaaa')
                        $.ajax({
                            type:'POST',
                            url:'php/LikePost.php',
                            data:{
                                id: id,
                                likes: likes
                            },success:function(){
                                loadTop5();
                                $(".left-side").trigger("reset");
                            }
                        })
                    }
                    
                });
                $('.comment-btn').off();
                $('.comment-btn').click((e)=>{
                    if($(e.currentTarget).attr('aria-pressed')!='true'){
                        $(e.target).closest('.single-post').find('.post-comments').css('grid-template-rows','1fr');
                        $(e.currentTarget).attr('aria-pressed','true');
                    }else {
                        $(e.target).closest('.single-post').find('.post-comments').css('grid-template-rows','0fr');
                        $(e.currentTarget).attr('aria-pressed','false');
                    }
                    
                })

                $("#search-input").off()
                $("#search-input").on('keyup',function(e) 
                {
                    e.preventDefault();
                    let user = $("#search-input").val();
                    $("#userneki").css('max-height','260px');//document.querySelector('#userneki')
                    $.ajax({
                        type:'POST',
                        url:'php/UserSearch2.php',
                        data:{
                            username: user
                        },
                        success: function(data){
                            $("#userneki").html(data);
                            userPage();
                            msgScreen();
                        }
                    })
                });

                $("#aa").off()
                $("#aa").on('click',function(e) 
                {
                    e.preventDefault();
                    let user = $("#search-input").val();
                    $("#userneki").css('max-height','260px');//document.querySelector('#userneki')
                    $.ajax({
                        type:'POST',
                        url:'php/UserSearch.php',
                        data:{
                            username: user
                        },
                        success: function(data){
                            $("#userneki").html(data);
                            userPage();
                            msgScreen();
                        }
                    })
                });

                $(".postComment").off();
                $(".postComment").on('click',function(e) 
                {
                    e.preventDefault();
                    let comment = $(e.target).closest('.single-post').find(".commentValue").val();
                    let post_id = $(e.target).closest('.single-post').attr("name");
                    $.ajax({
                        type:'POST',
                        url:'php/PostComment.php',
                        data:{
                            comment: comment,
                            post_id:post_id
                        },
                        success: function(data){
                            $(e.target).closest('.single-post').find('.post-comments').append(data)
                        }
                    })
                });

                $(".closeConv").off();
                $(".closeConv").on('click',function(e) 
                {
                    $("body").css('overflow','');
                    $(".conversation").css('transform','ScaleY(0)');
                    $(".overlay").css('opacity','0');
                    $(".overlay").css('z-index','-1000');
                    $(".sendMsg").off();
                    clearInterval(interval);
                });
                
                $(".openConv").on('click',function(e) 
                {
                    $("body").css('overflow','hidden');
                    $(".overlay").css('opacity','1');
                    $(".overlay").css('z-index','1000');
                    $(".conversation").css('transform','ScaleY(1)');
                    msgScreen()
                });
            }
        })
    }
    function msgScreen(){
        let reciver ;
        
        function showUsers(){
            $.ajax({
                type:'POST',
                url:'php/MessaggeUsers.php',
                data:{
                    id:reciver
                },
                success: function(data){
                    $(".textUsers").html(data);
                    lastUser = $(".textUsers").find(`.msgReciver[name='${user}']`).attr("aria-current","true");
                    $(".msgReciver").click((e)=>{
                        //obrisi stari interval za resetovanje poruka i izbrisi listener za slanje poruka
                        $(".sendMsg").off();
                        clearInterval(interval);

                        //na telefonu sklanja ostale korisnike okretanje dugmeta
                        $(".textUsers").attr('data-opened','false');
                        $('.showUsers').attr('data-clicked','false'); 

                        //spusti se do kraja poruka
                        $(".messages").animate({
                            scrollTop: $(".messages").prop("scrollHeight")
                        }, 500);

                        //proveri da li je korisnik pre bio u konverzaciji i onda ponovno pocivanje konverzacije
                        if(lastUser)
                            lastUser.attr("aria-current","false");
                        $(e.currentTarget).attr("aria-current","true")
                        lastUser= $(e.currentTarget);

                        //funkcija za prikaz poruka
                        function showMsgs(){
                            console.log("aaaa")
                            if(! $(e.currentTarget).attr("name"))
                                reciver = $(".msgReciver")[0].attr("name");
                            else
                                reciver = $(e.currentTarget).attr("name");
                            
                            $.ajax({
                                type:'POST',
                                url:'php/ShowMessages.php',
                                data:{
                                    id:reciver
                                },
                                success: function(data){
                                    $(".messages").html(data);
                                    
                                }
                            })
                        }
                        showMsgs();
            
                        //funkcija za refreshovanje poruka
                        interval=setInterval(() => {
                            showMsgs();
                            $(".conversation").trigger("refresh");
                        }, 1000);

                        //funkcija za slanje poruka
                        $(".sendMsg").click((e)=>{
                            e.preventDefault();
                            if(reciver){
                                let msg = $(e.target).closest('.controls').find('.msg').val();
                                $(e.target).closest('.controls').find('.msg').val("");
                                if(msg){
                                    $.ajax({
                                        type:'POST',
                                        url:'php/SendMessage.php',
                                        data:{
                                            id:reciver,
                                            msg:msg
                                        },
                                        success: function(data){
                                            $(".messages").animate({
                                                scrollTop: $(".messages").prop("scrollHeight")
                                            }, 500);
                                            showMsgs();
                                            $(".conversation").trigger("refresh");
                                        }
                                    })
                                }                               
                            }                       
                        });

                        //pamcenje zadnjeg korisnika
                        user = lastUser.attr("name");
                    });
                }
            })
        }
        showUsers();
        $(".userMsg").click((e)=>{
            $(".messages").animate({
                scrollTop: $(".messages").prop("scrollHeight")
            }, 500);
            //funkcija za prikaz poruka
            function showMsgs(){
                lastUser.attr("aria-current","false");
                user = $(e.target).closest(".singleitemsearchh").attr("name");   
                reciver = user;               
                lastUser = $(".textUsers").find(`.msgReciver[name='${user}']`).attr("aria-current","true");
                $.ajax({
                    type:'POST',
                    url:'php/ShowMessages.php',
                    data:{
                        id:user
                    },
                    success: function(data){
                        $(".messages").html(data);
                        
                    }
                })
            }
            
            showMsgs();
            $("body").css('overflow','hidden');
            $(".overlay").css('opacity','1');
            $(".overlay").css('z-index','1000');
            $(".conversation").css('transform','ScaleY(1)');

            //funkcija za refreshovanje poruka
            interval=setInterval(() => {
                showMsgs();
                $(".conversation").trigger("refresh");
            }, 1000);
            //funkcija za slanje poruka
            $(".sendMsg").click((e)=>{
                e.preventDefault();
                if(reciver){
                    console.log(reciver)
                    let msg = $(e.target).closest('.controls').find('.msg').val();
                    $(e.target).closest('.controls').find('.msg').val("");
                    if(msg){
                        $.ajax({
                            type:'POST',
                            url:'php/SendMessage.php',
                            data:{
                                id:reciver,
                                msg:msg
                            },
                            success: function(data){
                                $(".messages").animate({
                                    scrollTop: $(".messages").prop("scrollHeight")
                                }, 500);
                                showMsgs();
                                $(".conversation").trigger("refresh");
                            }
                        })
                    }
                }
            
            })
        });
        
    }
    let interval;
    let rowNum=5;
    let lastUser;
    let user;
    loadTop5();
    loadPost(rowNum);   
});