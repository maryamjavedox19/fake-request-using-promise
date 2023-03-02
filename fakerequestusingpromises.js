const fakerequestpromise = (url) => {
    return new Promise((success, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                return reject("connection timeout")
            }
            else {
                return success(`here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakerequestpromise('thisissomelink1')
// .then(()=>{
//     console.log("it worked.")
//     fakerequestpromise('thisissomelink2')
//     .then(()=>{
//         console.log("it worked again.")})
//     .catch(()=>{
//         console.log("error 2")
//      })
// })
// .catch(()=>{
//     console.log("error")
// })



fakerequestpromise('thisissomelink1')
    .then((data) => {
        console.log("it worked.")
        console.log(data)
        return fakerequestpromise('thisissomelink2')
    })
    .then((data) => {
        console.log("it worked again.")
        console.log(data)
        return fakerequestpromise('thisissomelink3')
    })
    .then((data) => {
        console.log("it worked again (3rd page).")
        console.log(data)
    })

    .catch((err) => {
        console.log("oops, error.")
        console.log(err)
    })
