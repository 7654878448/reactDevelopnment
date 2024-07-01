const Footer = () => {
    return (
        <footer style={{ 
            padding: '50px 20px', 
            background: '#03011c',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 40,
            color: '#f5f5f5',
            boxSizing: 'border-box'
        }}>
            <div style={{ flex: '1 1 200px', minWidth: '250px' }}>
                <h2 style={{ fontWeight: '500' }}>Coding School</h2>
                <p>The component footer should be named Footer. React treats components that start with a lowercase letter.</p>
            </div>
            <div style={{ flex: '1 1 200px', minWidth: '250px' }}>
                <h2 style={{ fontWeight: '500' }}>Important Links</h2>
                <ul style={{
                    padding: 0,
                    margin: 0,
                    listStyleType: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                }}>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>Home</a></li>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>InstLink</a></li>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>FacebookLink</a></li>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>TwitterLink</a></li>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>LinkedLink</a></li>
                </ul>
            </div>
            <div style={{ flex: '1 1 200px', minWidth: '250px' }}>
                <h2 style={{ fontWeight: '500' }}>Reference</h2>
                <ul style={{
                    padding: 0,
                    margin: 0,
                    listStyleType: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                }}>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>About Teachers</a></li>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>About Hod</a></li>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>Students</a></li>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>Achievement</a></li>
                    <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>Contact Date</a></li>
                </ul>
            </div>
            <div style={{ flex: '1 1 200px', minWidth: '250px' }}>
                <h2 style={{ fontWeight: '500' }}>Contact Us</h2>
                <form style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your full name" 
                        style={{padding: 8, borderRadius: 4, border: '1px solid #ccc', color: '#000'}}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your mail" 
                        style={{padding: 8, borderRadius: 4, border: '1px solid #ccc', color: '#000'}}
                    />
                    <textarea 
                        style={{padding: 12, borderRadius: 8, border: '1px solid #ccc', color: '#000'}}
                        name="message"
                        placeholder="Message"
                    />
                    <button 
                        type="submit"
                        style={{background: 'orange', color: 'black', padding: '10px', border: 'none', borderRadius: 4, cursor: 'pointer'}}
                    >
                        Send
                    </button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
