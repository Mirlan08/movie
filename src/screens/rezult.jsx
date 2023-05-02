import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Kommentarii from "../components/kommentarii";

function Rezult() {
    const [text, setText] = useState(null);
    const points = localStorage.getItem('points');
    const TextPoints = ()=>{
    if (points < 40) {
        setText("Пока плохо, но зато узнали много нового и интересного.")
    }
    else if(points > 40)
    {
        setText("Вы делаете определенные успехи.")
    }
}

    const ClearPoints = () => {
        localStorage.removeItem('points');
        window.location.href = "/";
    }
useEffect(()=>{
    TextPoints();
},[])
    return (
        <div>
            <Header />

            <div className="row">
                <div className="col-lg-3">
                    <Sidebar />
                </div>

                <div className="col-lg-9 colum">
                    <h4>Результат:</h4>

                    <h3 className="text-dark">Вы набрали {localStorage.getItem('points')} баллов</h3>
                    <br></br>{text} <br></br><br></br>
                    <button className="exit" onClick={ClearPoints}>Выйти</button>
                </div>
                <Kommentarii/>
            </div>
            <Footer/>
        </div>
    )
}
export default Rezult;