myButton.addEventListener('click',()=>{
    let request = new XMLHttpRequest
    request.open('get','/xxx')
    request.send()
    request.onreadystatechange = function(){
        if (request.readyState ===4){
            console.log('响应请求完成')
            console.log(request.status)
            if (request.status >=200 && request.status <300){
                console.log('sucess')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                let object = window.JSON.parse(string)
            }else if(request.status >=300){
                console.log('failed')
            }
        }
      }
    })







































// myButton.onclick= function(){
//     let request = new XMLHttpRequest()
//     request.open('get','/xxx') 
//     request.send()
//     request.onreadystatechange = ()=>{
//         if(request.readyState === 4){
//             console.log('响应请求完毕')
//             console.log(request.status)
//             if (request.status >= 200 && request.status <300){
//                 console.log('sucess')
//                 console.log(typeof request.responseText)
//                 console.log(request.responseText)
//                 let string = request.responseText
//                 let object = window.JSON.parse(string)
//             }
//             else if(request.status >= 300){
//                 console.log('请求失败')
//             }
//         }
//     }
// }




