const cekHariKelas = (cek)=>{
    console.log(cek)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            if (dataDay[0] == 'rabu') {
                resolve('hari ini ada kelas')
            }else{
                reject(new Error('Hari ini tidak ada kelas'))
            }
        },3000)
    })
}
cekHariKelas('rabu')
.then ((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
