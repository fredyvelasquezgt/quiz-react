import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';
import Answer from './Answer';

const Question = ({questions}) => {
    const [quizState] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    return (
    <div>
        <div className="question">{currentQuestion.question}</div>
            <div className="answers" >
            <Answer />
            <Answer />
            <Answer />
            <Answer />
            </div>
    </div>
    )
}

export default Question;