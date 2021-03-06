import React from "react"
import AddCoins from "../components/increaseCoins"
import { userContext } from '../context/userContext';
import coin from "../assets/icons/coin.svg"


function Header() {

    const [modal, setModal] = React.useState(false)
    const { users, points, history, setHistory } = React.useContext(userContext)

    return (
        <header className="header">
            {/* {userLoaded ?
            <h4> Loading... </h4> : */}
            <div className="headerOptions">
            <div className="historyButtons">
                    <h2 className="historyText" onClick={() => setHistory(true)} style={{display: history ? "none" : "block"}}>
                        History
                    </h2>
                    <h2 onClick={() => setHistory(false)} style={{display: history ? "block" : "none"}}>
                        Catalog
                    </h2>
                </div>
            <div className="userNameInfo">
            
                <h6 className="userName"> {users.name} </h6>
                <button className="button-headerCoins" onClick = {() => setModal(true)} > 
                    {points}
                    <img src={coin} alt="coin"/>
                </button>
            </div>
            </div>
            
            {modal ? 
            <AddCoins setModal={setModal}/> : null}
            <div className="container-header">
                <h6 className="title-header"> Electronics </h6>
            </div>
        </header>
    )
}

export default Header