//Dummie Data
const userData ={
    sMediaProfiles:{
        facebook:{
            followers:{
                qty:1987,
                growth:12
            },
            pageView:{
                qty:87,
                growth:0.03
            },
            likes:{
                qty:57,
                growth:-0.02
            }
        },
        twitter:{
            followers:{
                qty:1044,
                growth:99
            },
            retweets:{
                qty:117,
                growth:3.03
            },
            likes:{
                qty:507,
                growth:5.33
            }
        },
        instagram:{
            followers:{
                qty:11000,
                growth:1099
            },
            profileViews:{
                qty:52000,
                growth:13.75
            },
            likes:{
                qty:5462,
                growth:22.57
            }
        },
        youtube:{
            subscribers:{
                qty:8239,
                growth:-144
            },
            totalViews:{
                qty:1407,
                growth:-12
            },
            likes:{
                qty:107,
                growth:-19
            }
        },
        getTotalFollowers:function (){
            return this.facebook.followers.qty
                    +this.twitter.followers.qty
                    +this.instagram.followers.qty
                    +this.youtube.subscribers.qty
        }
    } 
}
//Functions

$(document).ready(function(){
   //display total follower count
   $('span.total-follower-qty').text(userData.sMediaProfiles.getTotalFollowers())
//    $('span.total-follower-qty').ready(function(){
//     $(this).css('font-family','arial');
//    })
})