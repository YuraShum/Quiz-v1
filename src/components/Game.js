export default function Game({question, onClickVariant, step, countQuestion}){

    const answer = question.variants.map((elem, index)=> {
        return <li key={index} onClick ={() => onClickVariant(index)}>{elem}</li>
    })
    return (
        <div>
            <div className="progress">
                <div style={{ width: `${Math.round((step/countQuestion)*100)}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {answer}
            </ul>
        </div>
        
    )
}