import React from 'react'


const Header = (props) => {


        

        return (
        <header>
            <h1>NC Chat Room!</h1>
            <form>
                <label><span>Username: </span><input onChange={(event) => {
                    props.handleChange(event.target.value)
                }}></input></label>
                <button onClick={(event) => {
                    props.toggleLoggedIn(event)
                }}>{props.loggedInUser ? 'Log out' : 'Log in'}</button> 
            </form>
        </header>
    )
}

export default Header;