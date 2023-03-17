
$(document).ready(()=>{

    
    function loadPost(){
        $.ajax({
            type:'POST',
            url:'php/MostLikedUsers.php',
            success:(data)=>{
                $(".left-side").append(data);
            }
        })

        $.ajax({
            type:'POST',
            url:'php/GetPosts.php',
            success: function(data){
                $("#allPostsWrapper").html(data);
                $("#removePost").on('click',function(e) 
                {
                    e.preventDefault();
                    let msg = $(e.target).closest('.single-post').find('.post-content').text();
                    $.ajax({
                        type:'POST',
                        url:'php/DeletePost.php',
                        data:{
                            msg: msg
                        },
                        success: function(data){
                            if(data){
                                
                                loadPost();
                                $("#form").trigger("reset");
                            }
                        }
                    })
                });
            
            
                $("#postBtn").on('click',function(e) 
                {
                    e.preventDefault();
                    let msg = $("#postContent").val();
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
                                loadPost();
                                $("#form").trigger("reset");
                            }
                        }
                    })
                });
                
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
                            },success:function(data){
                            }
                        })
                    } else {
                        $.ajax({
                            type:'POST',
                            url:'php/DislikePost.php',
                            data:{
                                id: id,
                                likes: likes-1
                            },success:function(data){
                            }
                        })
                    }
                });
            
                $("#search-input").on('keyup',function(e) 
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
                        }
                    })
                });
                
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
            }
        })
    }
    loadPost();
   
});