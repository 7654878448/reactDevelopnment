const Navbar=()=>{
    return(
       <nav style={{
        background:"white",
        display:'flex',
        justifyContent:'space-between',
        padding:'0 48px',
        boxShadow:'0 8px 8px 0 rgba(0,0,0,0.1)'
       }}>
        
        <div style={{
            display:'flex',
            alignItems:'center',
            margin:'10px',
            padding:'10px',
            gap:'8px'
        }}>
            <img
            src="./images/logo.png"
            width="60"
            />
            <h1>Coding School</h1>
        </div>
        <ul style={{
            listStyle:'none',
            padding:0,
            margin:20,
            display:"flex",
            gap:'64px'

        }}>
            <li style={{
                display:'flex',
                alignItems:'center',
                padding:'16px 24px'
            }}><a href="#" style={{
                textDecoration:'none',
                color:'#323232',
                fontSize:'17px'
            }}>Home</a></li>
             <li style={{
                display:'flex',
                alignItems:'center',
                padding:'16px 24px'
            }}><a href="#" style={{
                textDecoration:'none',
                color:'#323232',
                fontSize:'17px'
            }}>Teachers</a></li>
             <li style={{
                display:'flex',
                alignItems:'center',
                padding:'16px 24px'
            }}><a href="#" style={{
                textDecoration:'none',
                color:'#323232',
                fontSize:'17px'
            }}>Home</a></li>
             <li style={{
                display:'flex',
                alignItems:'center',
                padding:'16px 24px'
            }}><a href="#" style={{
                textDecoration:'none',
                color:'#323232',
                fontSize:'17px'
            }}>contact</a></li>
             <li style={{
                display:'flex',
                alignItems:'center',
                padding:'16px 24px'
            }}><a href="#" style={{
                textDecoration:'none',
                color:'#323232',
                fontSize:'17px',
                background:'dodgerblue',
                padding:'16px 24px',
                borderRadius:8
            }}>talk to us</a></li>
           
        </ul>
       </nav>
    )
}
export default Navbar