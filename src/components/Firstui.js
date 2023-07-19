import React, { useEffect, useState } from 'react'
import Header from './Header'
import Main from './Main'
import Basket from './Basket'
// import product from './Product'
import data from '../data'

function Firstui() {

    const [credintials, setcredintials] = useState([]);
    const [inbol, setinbol] = useState(false);
    const [usbol, setusbol] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false)
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const [Size, setSize] = useState(" ")
    const [col, setcol] = useState(" ")
    const [mainTrue, setMainTrue] = useState(false)
    

    function Handleclick() {
        setSize((e) => e.select.value === data.products.filter(Size))
    }
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        const randomcolor=`#${Math.floor(Math.random()*16777215).toString(16)}`
        exist && setcol(randomcolor)
        if (exist) {
           
            const aa = cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
            setCartItems(aa)

        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);

        }

    };
    const check = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        return exist;
    }
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {

            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            

            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    const handleLogin = (event) => {

        event.preventDefault();
        const details = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        console.log("username", details.username)
       
        const storedCredentials = JSON.parse(localStorage.getItem('credintials'));
        const foundCredentials = storedCredentials.find(cred => cred.username === details.username && cred.password === details.password);
        console.log("found ", foundCredentials)
        const buttonName = event.nativeEvent.submitter.name;
        if (buttonName === 'Register') {
            console.log("in if")
            if (details.username === '') {
                setinbol(true)
            }
            if (details.password === '') {
                setusbol(true)
            }
            if (foundCredentials) {
                alert("Already signed up, Pleasee login")
            } else {
                setcredintials([...credintials, details])
            }
            setMainTrue(false)
        } else {
            console.log("in login")
            if (foundCredentials) {

                setMainTrue(true)
            } else {
                setErrorMessage(true)
            }
        }
        setinbol(false)
        setusbol(false)

        event.target.reset();

    }
    const local_storage_key = "credintials"
    useEffect(() => {
        console.log("in useeffect")
        localStorage.setItem(local_storage_key, JSON.stringify(credintials))
    }, [credintials])


    return (

        <div>
            
            {mainTrue ?
                (<>
                    <Header countCartItems={cartItems.length} Handleclick={Handleclick}></Header>
                    <div className="row">
                        <Main className='products' products={products} onAdd={onAdd} check={check} onRemove={onRemove} valll={col}></Main>
                        <Basket
                            cartItems={cartItems}
                            onAdd={onAdd}
                            onRemove={onRemove}
                        ></Basket>
                    </div>

                </>) : 
                <div>
                <div className='Header'>
                <div className='Title'>SignUp Page</div>

            </div>
            <h4>Enter the credintials To Register for your account</h4>
            <form onSubmit={handleLogin}>
                <h2 className='item' style={{ fontSize: 20 }} >Register</h2>

                <input className='item'
                    name='username'
                    type="text"
                    placeholder="Username"

                />
                {inbol ? <p style={{ color: 'red' }}> Enter your Username</p> : ''}
                <input
                    className='item'
                    name='password'
                    type="password"
                    placeholder="Password"

                />
                {usbol ? <p style={{ color: 'red' }}> Enter your Username</p> : ''}
                <button name='Register' className='item'>Register</button>
                {credintials.length > 0 && <button name='Login' className='item' type="submit">Login</button>}
                {errorMessage && <p style={{ color: 'red' }}>Enter correct Username and password</p>}

            </form>
            </div>}

        </div>
    )
}

export default Firstui