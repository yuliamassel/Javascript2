

const cekHariKerja = (day)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if (cek) {
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}
cekHariKerja()
.then ((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

let hari = ['sabtu','minggu']
const okeBisa = async ()=>{
    try {
        const result = await new Promise((resolve,reject)=>{
            let succes = true
            if(succes){
                resolve(['senin','selasa','rabu','kamis','jumat'])
            }else{
                reject(new Error('Hari ini libur'))
            }
        })
        console.log(result)
    } catch (error) {
        console.log(`${hari.join(" dan ")}`)
    }
}

okeBisa()