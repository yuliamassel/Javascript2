

const cekHariKerja = (day)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if (cek) {
                resolve(`ini hari ${cek}, waktunya kerja`)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}
// cekHariKerja('sabtu')
// .then ((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

const finalResult = async()=>{
    try {
        const result = await cekHariKerja('kamis')
        console.log(result)
    } catch (error){
        console.log(error)
    }  
}
finalResult()


//**Penjelasan */
// 1. -then => digunakan dengan callback ketika janji berhasil dipenuhi atau diselesaikan.
// 2. -catch => digunakan dengan callback saat janji ditolak atau jika terjadi kesalahan.


//**Try catch */
// 1. -try => memungkinkan Anda menguji blok kode untuk menemukan kesalahan.
//   -catch => memungkinkan Anda menangani kesalahan.