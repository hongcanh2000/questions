import SingleQuestion from "./SingleQuestion";

const Questions = ({questions}) => {
    return <div>
        {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
        })};
    </div>
}
export default Questions;