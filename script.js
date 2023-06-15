


const myfunction =async()=>{
    const response=await fetch("https://ak-education-backend.vercel.app/api/v1/student/institutions?param1=Akbar112%40gmail.com&param2=active")
    const jasonData=await response.json();
    const myData=jasonData
    
    
    for(let i=0;i<myData.StudentData.length;i++){
        console.log(myData.StudentData[i])
        
        
        const div= document.getElementById(`myone`)

        const namespan=document.createElement(`span`)
        namespan.classList.add(`datastudent`)
        namespan.innerText=myData.StudentData[i].name

        classspan=document.createElement(`span`)
        classspan.innerText=myData.StudentData[i].Class

        statusspan=document.createElement(`span`)
        statusspan.innerText=myData.StudentData[i].status

        emailspan=document.createElement(`span`)
        emailspan=innerText=myData.StudentData[i].emailId

        yearspan=document.createElement(`span`)
        yearspan.innerText=myData.StudentData[i].Year
        
        const  myone= document.createElement('div')
        myone.classList.add(`box`)
        myone.append(namespan,classspan,statusspan,emailspan,yearspan)
        div.append(myone)
    }
    
}
myfunction()