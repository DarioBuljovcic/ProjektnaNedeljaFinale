$(document).ready(()=>{
    let id = $('#username').attr('name');
    let rowNum=5;
    let interval;
    let user;
    $.ajax({
        type:'POST',
        url:'php/GetUsersPost.php',
        data:{
            id:id
        }, success: function(data){
            $("#allPostsWrapper").html(data);

            $(".like-btn").off()
            $(".like-btn").on('click',function(e) 
            {
                e.preventDefault();
                let id = $(e.target).closest('.single-post').attr("name");
                let likes = parseInt($(e.target).closest('.like-btn').find('.num2Count').text());
                let test = $(e.target).closest('.like-btn').attr('aria-pressed');
                if(test=="true"){
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
                } else {
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
                }
                
            });

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
            $(".openConv").off();
            $(".openConv").on('click',function(e) 
            {
                $("body").css('overflow','hidden');
                $(".overlay").css('opacity','1');
                $(".overlay").css('z-index','1000');
                $(".conversation").css('transform','ScaleY(1)');
                msgScreen()
            });
            $("#userpagemsg").on('click',function(e){
                $("body").css('overflow','hidden');
                $(".overlay").css('opacity','1');
                $(".overlay").css('z-index','1000');
                $(".conversation").css('transform','ScaleY(1)');
                user = $("#userpagemsg").closest(".left-side").find("#username").attr("name");
                msgScreen();
            })
        }
    });
    msgScreen();
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
                        $(".sendMsg").off();
                        clearInterval(interval);
                        $(".messages").animate({
                            scrollTop: $(".messages").prop("scrollHeight")
                        }, 500);
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
})