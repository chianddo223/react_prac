function HelloBtn2(){ 
    const message = (name) => {
             alert("Hello " + name + " !!!");   
            } 
        return ( 
            <button onClick={()=>{message("button")}}>Click Me</button>  
        ); 
    } 
            
export default HelloBtn2;