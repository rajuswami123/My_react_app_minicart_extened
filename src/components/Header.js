export default function Header(props) {
    return (
      <header className="Header">
        <div>
          <a href="#/" className="badges" >
            <h1 className='h1inheader'>Mens Wear clothing</h1>
          </a>
        </div>
        
        <div>
          <a href="#/cart" className="badges">
            Cart{' '}
  
              <button className="badge">{props.countCartItems}</button>
          </a>{' '}
          <div>
  
           <select className="selectSize">
        <option value="select your size" onClick={props.Handleclick} onChange={(e)=>{const setval=e.target.value ; props.anyfunction(setval)}}>select your size</option>
  <option value="S"><strong>S (small)</strong></option>
  <option value="M"><strong>M (Medium)</strong></option>
  <option value="L"><strong>L (Large)</strong></option>
  
  
        </select> 
        </div>
        </div>
      </header>
    );
  }