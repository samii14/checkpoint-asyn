const fetchData= ()=>{
    return new Promise((delay)=>  
        
        setTimeout(()=> {
            delay({ data:"fetching data"}, 1000)
        })
    )
}

const awaitCall  = async()=>{
        try{
            const response = await fetchData()
            console.log(response.data)
        }
        catch(error){
            console.error("error fetching data:", error)        }
}

awaitCall()


const delay =(ms)=>{
    return new Promise((time)=> setTimeout(time, ms))
}
const function1 = async()=> {
    console.log("async function started")
    await delay(1000)
    console.log("async function 1 completed")
}
const function2 = async()=> {
    console.log("async function started")
    await delay(1000)
    console.log("async function 2 completed")
}
const function3= async()=> {
    console.log("async function started")
    await delay(1000)
    console.log("async function 3 completed")
}

const chaineAsyncFunction = async()=>{
    await function1();
    await function2();
    await function3()
}
chaineAsyncFunction()