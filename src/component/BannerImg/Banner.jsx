function Banner(){
    let data = true
    let styobj = {height:'400px', width:"50%"}
    let styobj1 = {}
    return(
        <>
            <img src="logo192.png" alt="" style={data == true ? styobj : styobj1} />
            {/* <img src="logo192.png" alt="" style={styobj} /> */}
        </>
    )
}

export default Banner