const eric ={
    name: "Trien",
    age: 22
}

const SecondComponent =  () =>{
    return(
        <>
            <div>{JSON.stringify(eric)} Second component</div>
            <div>third component</div>
            <div>{console.log("What's up")}</div>
        </>
    )
}

export default SecondComponent