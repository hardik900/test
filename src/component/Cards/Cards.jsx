import "./Cards.css"

function Cards({data}){
    console.log(data,"data")
    // let getData = props.data
    // console.log(getData,"prosp")
    return(
        <>
            {
                data.map((val)=>{
                    return(
                        <>
                            <div className="text-slate-900 h-[100px] w-[100px] m-[5px] bg-slate-600 hover:text-center hover:bg-cyan-50 	">
                                <h1>{val}</h1>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Cards