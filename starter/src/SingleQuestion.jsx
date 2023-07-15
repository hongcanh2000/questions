import { useState } from "react";

const SingleQuestion = ({title, info}) => {
    const [showInfo,setShowInfo] = useState(false);
    return <div>
        <h4>{title}</h4>
        <div>
            {showInfo && <p>{info}</p>}
        </div>
        <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? 'ẩn' : 'hiện'}
        </button>
    </div>
}
export default SingleQuestion;