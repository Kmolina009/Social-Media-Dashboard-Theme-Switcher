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
            followers:{
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
        }
    },
    getTotalFollowers:function (){
        return this.sMediaProfiles.facebook.followers.qty
                +this.sMediaProfiles.twitter.followers.qty
                +this.sMediaProfiles.instagram.followers.qty
                +this.sMediaProfiles.youtube.subscribers.qty
        } 
    }

//Functions
$(document).ready(function(){
    //display total follower count
    // $('span.total-follower-qty').text(userData.sMediaProfiles.getTotalFollowers())
        //build follower card - 
            //While this page is loading 
                //for each entry in user data object
                //call function build card(it takes the user datas entries) 
    $buildFollowerCard =function(user,platform){
    return $followerCard=$([
        "<h1>Testing</h1>",
        "<div class=\"follower-card\">",
        " <div class=\"follower-count\">",
        "    <figure>",
        "       <span class=\"sm-icon\">",
        // use class in css style of fb-icon
        `        <span class=\"${platform}-icon\"></span>`,
        "         <a href=\"http://\" target=\"_blank\" rel=\"noopener noreferrer\">@nathanf</a>",
        "         <p>This is FaceBook Follower Data</p>",
        `         <p>${userData.sMediaProfiles[platform].followers.qty}</p>`,
        "         <p>Followers</p>",
        "       </span>",
        "    <figure>",
        " </div>",
        " </div>",
        
        
        "</div>"
    ].join("\n"));
}
//generate follower stats
        for(let profile in userData.sMediaProfiles){
            $('.follower-stat-container').append($buildFollowerCard(userData,profile))
        }
//generate Like and follow stats
    })

