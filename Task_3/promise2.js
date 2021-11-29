
const hari = {senin: 'Presentasi',selasa: 'Materi Technikal',rabu:'Materi Personal',kamis:'Daily Standup',jumat:'Daily StandUp'}
const cekHariKelas = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (hari.selasa === 'Presentasi') {
                resolve('hari ini ada Presentasi')
            }else{
                reject(new Error('Salah hari kak'))
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
