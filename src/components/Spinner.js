import { useState, useEffect } from "react"
import Spinner from "react-bootstrap/Spinner";

const Spinners = ({ show }) => {

    const [spinnerShow, setSpinnerShow] = useState(false);

    useEffect(() => {
        setSpinnerShow(show)
    }, [show])

    return (

        <>
            {spinnerShow &&
                <div className="spinner-container ">
                    <Spinner className="spinner" animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </>
    )
}


export default Spinners