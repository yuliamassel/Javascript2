
const hari = {senin: 'Presentasi',selasa: 'Materi Technikal',rabu:'Materi Personal',kamis:'Daily Standup',jumat:'Daily StandUp'}
const cekHariKelas = (cek)=>{
    console.log(cek)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (hari.senin === 'Presentasi') {
                resolve('hari ini ada Presentasi')
            }else{
                reject(new Error('Salah hari kak'))
            }
        },3000)
    })
}
cekHariKelas('senin')
.then ((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
