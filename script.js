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
                +this.sMediaProfiles.youtube.followers.qty
            } ,
    tenThousandPlus:function(stat){
        return stat>9999? `${String(stat).substring(0, 2)}k`:stat;
    }
        }
//Functions
// TODO - Find out why this function is not being called
// growth styling
let growthIndicator = function(growthStat){
    console.log(growthStat)
    // return growthStat>0?".positive-growth":".negative-growth";
    // console.log("This function has beem called");
};
//JQuery function and components
//Store theme-switcher

//Theme Switch
$themeSwitcher=$(".theme-switcher-container");
//Switch btn/actuator
$themeBtn=$('.theme-switcher-btn');
// Component construction
    $buildFollowerCard =function(user,platform){
        return $followerCard=$([
            "<div class=\"follower-card dark-theme\">",
            `  <div class=\"card-top-decoration ${platform}-decoration\"></div>`,
            "       <div class=\"platform-username\">",
            `        <span class=\"sm-icon ${platform}-icon\"></span>`,
            "         <a class=\"dark-theme\" href=\"http://\" target=\"_blank\" rel=\"noopener noreferrer\">@nathanf</a>",
            "       </div>",
            " <div class=\"follower-count\">",
            "    <figure>",
            `         <p class="follower-count">${userData.sMediaProfiles[platform].followers.qty}</p>`,
            "         <p>Followers</p>",
            "    <figure>",
            " </div>",
            " </div>",
            
            
            "</div>"
        ].join("\n"));
    }
//Currently ICE BOXED
$buildLikeViewCard=function(user,platform){
    //retrieve certain stats
    // console.log(growthIndicator(user.sMediaProfiles.platform.likes.growth));
    return $likeViewCard=$([
        "<h1>TESTING</h1>",
"        <div class=\"daily-like-view-container\">",
"        <div class=\"like-view\">",
`          <p>${user.sMediaProfiles[platform].views.viewTerm}</p>`,
`          <p>${user.sMediaProfiles[platform].views.qty}</p>`,
`          <figure class=\"${platform}-icon\"></figure>`,
"          <div class=\"stat\">",
// conditional statement
`            <figure class=\".positive-growth\"></figure>`,
`            <p>${user.sMediaProfiles[platform].views.growth*100}%</p>`,
"          </div>",
"        </div>",
"        <div class=\"like-view\">  ",
"          <p> Likes</p>",
`          <p>${user.sMediaProfiles[platform].likes.qty}</p>`,
`          <figure class=\"${platform}-icon\"></figure>`,
"          <div class=\"stat\">",
// conditional statement if 
`            <figure class=\".negative-growth\"></figure>`,
`            <p>${user.sMediaProfiles[platform].likes.growth*100}</p>`,
"          </div>",
"        </div>",
"      </div>"
    ].join("\n"))
}

// *******************************Change Theme Functions*******************************************
let $themeStatus=$(".theme-switcher-container > p");
function changeTheme(){
    //explictly adding and removing classes
    function assignDarkTheme(){
        $themeStatus.text("Dark Mode");
        $(".light-theme").addClass("dark-theme");
        $(".dark-theme").removeClass("light-theme");
    }
    function assignLightTheme(){
        $themeStatus.text("Light Mode");
        $(".dark-theme").addClass("light-theme");
        $(".light-theme").removeClass("dark-theme");
    }
    ($themeStatus.text()!=="Light Mode")?assignLightTheme():assignDarkTheme();
}

function mobileHeaderRule(){
    $headerElementContainer = $('.header-content')
    //create the hr element from within this function
   $('header').width()<=326? $themeSwitcher.before('<hr>'):$('.header-content').remove('hr')
}

$(document).ready(function(){
    $themeStatus.text("Dark Mode");
    //display total follower count
    $('span.total-follower-qty').text(userData.getTotalFollowers());
    // Change theme
    $(".theme-switcher-container").on("click",changeTheme);
        for(let profile in userData.sMediaProfiles){
            $('.follower-stat-container').append($buildFollowerCard(userData,profile))
        }
        //    TODO have hr element added and removed based on media query
    // console.log($('header').width())
        mobileHeaderRule()
        if($('header').width()<376){
            mobileHeaderRule()
        }
    })

