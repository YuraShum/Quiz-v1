export default function Result({onClickPlayAgane, score, countQuestion}){
    return(
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
            <h2>Ви дали {score} правильних відповідей з {countQuestion}</h2>
            <button onClick={onClickPlayAgane}>Спробувати знову</button>
        </div>
    )
}