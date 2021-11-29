const cekHariKelas = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu']
            if (dataDay[2] == 'rabu') {
                resolve('hari ini ada kelas')
            }else{
                reject(new Error('Hari ini tidak ada kelas'))
            }
        },3000)
    })
}
cekHariKelas()
.then ((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
