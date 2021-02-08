//Dummie Data
const userData ={
    sMediaProfiles:{
        facebook:{
            followers:{
                qty:1987,
                growth:12
            },
            views:{
                qty:87,
                growth:0.03,
                viewTerm:"pageView"
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
            views:{
                qty:117,
                growth:3.03,
                viewTerm:"retweets"
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
            views:{
                qty:52000,
                growth:13.75,
                viewTerm:"profileViews"
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
            views:{
                qty:1407,
                growth:-12,
                viewTerm:"totalViews"
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

//JQuery Component construction
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
$buildLikeViewCard=function(){
    return $likeViewCard=$([
        "<h1>TESTING</h1>",
"        <div class=\"daily-like-view-container\">",
"        <div class=\"like-view\">",
"          <p>Page Views</p>",
"          <p>87</p>",
"          <figure class=\"s-media-icon\"></figure>",
"          <div class=\"stat\">",
"            <figure class=\"growth-arrow\"></figure>",
"            <p>3%</p>",
"          </div>",
"        </div>",
"        <div class=\"like-view\">  ",
"          <p> Likes</p>",
"          <p>52</p>",
"          <figure class=\"s-media-icon\"></figure>",
"          <div class=\"stat\">",
"            <figure class=\"growth-arrow\"></figure>",
"            <p>2%</p>",
"          </div>",
"        </div>",
"      </div>"
    ].join(""))
}

$(document).ready(function(){
    //display total follower count
    // $('span.total-follower-qty').text(userData.sMediaProfiles.getTotalFollowers())
        //build follower card - 
            //While this page is loading 
                //for each entry in user data object
                //call function build card(it takes the user datas entries) 

//generate follower stats
        for(let profile in userData.sMediaProfiles){
            $('.follower-stat-container').append($buildFollowerCard(userData,profile))
        }
        $('body').append($buildLikeViewCard())
//generate Like and follow stats
    })

