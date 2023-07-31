let userName = document.querySelector('#username')
let btn = document.querySelector('.btn')
let nameUser = document.querySelector('.name')
let img = document.querySelector('.img img')
let join = document.querySelector('.joined')
let infor = document.querySelector('.add_info')
let nick = document.querySelector('#nick')
let errorEl = document.querySelector('.error')
let main = document.querySelector('.wrapper main')

///////////////////////////////
let repos = document.querySelector('.number_repos')
let follower = document.querySelector('.number_fol')
let following = document.querySelector('.number')

///////////////////////////////////////
let locations = document.querySelector('.address')
let link = document.querySelector('#link')
let twit = document.querySelector('.twit_link')
let git = document.querySelector('.git')


/////////////////// get joined time   //////////
let day = document.querySelector('.day'),
    month = document.querySelector('.month'),
    year = document.querySelector('.year')






const req = new XMLHttpRequest();
// req.open('GET','https://api.github.com/users/');
// req.send();
// // console.log(req.response);
//     req.addEventListener('readystatechange',()=>{
//         if(req.response === 200){
//             console.log(req.response);
//             let data = JSON.parse(req.response)
//             watchInfo(data)
//             console.log(data);
//         }else if(req.response === 404){
//             errorEl.innerText = 'No result'
//         }
//     })



btn.addEventListener('click',()=>{
    let user = userName.value
    if(userName.value == ''){
        errorEl.innerText = 'No result'
        main.style.display = 'none'
    }else{
    errorEl.innerText = ''
    searchUsers('GET','https://api.github.com/users/',user)
    main.style.display = 'block'
 
    }
})
// btn.addEventListener('change',(e)=>{
//     if(e.target.value == ''){
//         errorEl.innerText = 'No result'
//         main.style.display = 'none'
//     }else{
//         errorEl.innerText = ''
//     }
// })



function searchUsers(method,url,users){
req.open(method, url+users)
req.send()
req.addEventListener("load", () => {
    // console.log(req.response)
    if(req.readyState === 4 && req.status === 200){
        let data = JSON.parse(req.response)
        console.log(data)
        watchInfo(data)
    }else {
        errorEl.innerText = 'No result'
    }
    
})
}

function watchInfo(info){
    nameUser.innerText = info.name
    nick.innerText = info.login
    nick.href = info.html_url
    img.src = info.avatar_url
    getDate(info.created_at,day,month,year)
    if(info.bio == null){
        infor.innerText = 'This profile has no bio'
    }else{
        infor.innerText = info.bio
    }
    repos.innerText = info.public_repos
    follower.innerText = info.followers
    following.innerText = info.following

   /////////////////////////
    if(info.location == null){
        locations.innerText  = 'Not available'
    }else{
    locations.innerText = info.location
    }


   link.innerText = info.html_url
   link.href = info.html_url

   
   if(info.twitter_username == null){
    twit.innerText  = 'Not available'
   }
   else{
    twit.innerText  = info.twitter_username
   }

}
// let data = JSON.parse(req).
// console.log(data);

function getDate(dat,elemDay,elemMonth,elemYear){
    let date = new Date(dat)
    let days = date.getDate()
    console.log(days);
    elemDay.innerText = days
    let month = date.getMonth()
    if(month == 0){
        elemMonth.innerText = 'Jan'
    }else if(month == 1){
        elemMonth.innerText = 'Feb'
    }else if(month == 2){
        elemMonth.innerText = 'Mar'
    }else if(month == 3){
        elemMonth.innerText = 'Apr'
    }else if(month == 4){
        elemMonth.innerText = 'May'
    }else if(month == 5){
        elemMonth.innerText = 'Jun'
    }else if(month == 6){
        elemMonth.innerText = 'Jul'
    }else if(month == 7){
        elemMonth.innerText = 'Aug'
    }else if(month == 8){
        elemMonth.innerText = 'Sep'
    }else if(month == 9){
        elemMonth.innerText = 'Oct'
    }else if(month == 10){
        elemMonth.innerText = 'Nov'
    }else if(month == 11){
        elemMonth.innerText = 'Dec'
    }
    // switch(month){
    //     case '0':
    //     elemMonth.innerText = 'Jan'
    //     break;
    //     case '1':
    //     elemMonth.innerText = 'Feb'
    //     break;
    //     case '2':
    //         elemMonth.innerText = 'March'
    //         break;
    //     case '3':
    //         elemMonth.innerText = 'Apr'
    //         break;
    //     case '9':
    //             elemMonth.innerText = 'oct'
    //         break;
    // }
    
    // elemMonth.innerText = month 
    let year = date.getFullYear()
    elemYear.innerText = year
    // console.log(year);

}



////////////////////// dark And light  ///////////

let dark = document.querySelector('.dark')
let light = document.querySelector('.light'),
    defender = document.querySelector('.defender'),
    searchBar = document.querySelector('.search_bar'),
    fullColor = document.querySelector('.full_info_color'),
    statistic = document.querySelector('.statistic')


dark.addEventListener('click',()=>{
    dark.style.display = 'none'
    light.style.display = 'flex'
    document.body.style.background = '#141D2F'
    defender.style.color = '#fff'
    searchBar.style.background = '#1E2A47'
    main.style.background = '#1E2A47'
    nameUser.style.color = '#fff'
    userName.style.color = '#fff'
    join.style.color = '#fff'
    join.style.opacity = '0.75'
    fullColor.style.color = '#fff'
    fullColor.style.opacity = '0'
    statistic.style.background = '#141D2F'
    repos.style.color = '#fff'
    follower.style.color = '#fff'
    following.style.color = '#fff'
})
light.addEventListener('click',()=>{
    light.style.display = 'none'
    dark.style.display = 'flex'
    document.body.style.background = '#F6F8FF'
    defender.style.color = '#222731'
    searchBar.style.background = '#fefefe'
    main.style.background = '#fefefe'
    nameUser.style.color = '#2B3442'
    userName.style.color = '#4B6A9B'
    join.style.color = '#697C9A'
    fullColor.style.color = '#4B6A9B'
    fullColor.style.opacity = '0.75'
    statistic.style.background = '#F6F8FF'
    repos.style.color = '#2b3442'
    following.style.color = '#2B3442'
    follower.style.color = '#2B3442'


})



let loading = document.querySelector('.loading')

// window.addEventListener('load',()=>{
//     loading.style.display = 'block'
//     loading.style.display = 'none'
//     main.style.display = 'block'
// })