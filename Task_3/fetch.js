import fetch from 'node-fetch';

const inputFetch = (link,options)=>{
    return new Promise ((resolve,reject)=>{
        fetch(link).then(res => res.json())
        .then(json =>{
            resolve (json)
        }).catch((err)=>{
            reject(err)
        })
    })
}

inputFetch('https://jsonplaceholder.typicode.com/user')
    .then((res) => res.map((item,index)=>{
        console.log(`${index+1} ${item.name}`)
    }))
    .catch((err)=> console.log('salah link kak!'))





