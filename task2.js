
finalResult = (value,index)=> {
    if (value===null) {
        a = index.map((arr)=>{
            return arr
        })
        console.log(a)
    }else{
        console.log(value.message)
    }
}

const getMonth = (callback) => {
    setTimeout(()=>{
        let error = false
        let month = ['January','February','March','April','Mey','June','July','August',
                    'September','October','November','Desember']
        if (!error) {
            callback(null ,month)
        }else{
            callback(new Error('Sorry Data Not Found'))
        }
    },4000)
}

getMonth(finalResult)



