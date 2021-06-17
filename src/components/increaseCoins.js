import React from "react"
import coin from "../assets/icons/coin.svg"
import postCoins from "../crud/postCoins"
import { min, med, max} from "../crud/variables"
import { userContext } from '../context/userContext';

function AddCoins(props) {
    const [show, setShow] = React.useState(false);
    const { points, setPoints } = React.useContext(userContext);
    const [response, setResponse] = React.useState("")
    React.useEffect(() => {
        if(show) 
            setTimeout(() => { setShow(false) }, 3000)
    },[show])

    const handleClick = (number) =>{
        postCoins(number).then(response => { 
            if (response && response.message === 'Points Updated'){
                setPoints(points + number); 
                setShow(true);
                setResponse(response.message)
            }else{
                setShow(true);
                setResponse("Error, try again later.")
            }
        })
    }
    
    return (
        <section className="modal-screen">
            <div className="addCoins">
                <div>
                    {show && 
                    <div className={response === 'Points Updated' ? "successEnabled successAddPoints colorAddPointsSuccess" : "successEnabled successAddPoints colorAddPointsError"}> 
                        <h6 className="success-pointsSuccess"> {response} </h6>
                    </div>
                    }
                </div>
                <h4 className="title-addCoins"> Add more coins </h4>
                <button className="button-addCoins one" onClick={() => handleClick(min)}>
                    <img src={coin} alt={min} />
                    {min}
                </button>
                <button className="button-addCoins two" onClick={() => handleClick(med)}>
                    <img src={coin} alt={med} />
                    {med}
                </button>
                <button className="button-addCoins three" onClick={() => handleClick(max)}>
                    <img src={coin} alt={max} />
                    {max}
                </button>
                <button className="close" onClick={() => props.setModal(false)}> X </button>
            </div>
        </section>
    )
}

export default AddCoins