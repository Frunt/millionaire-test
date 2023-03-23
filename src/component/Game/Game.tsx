import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../assets/questions/questions.json';
import './style.css';
import { IQuestionData } from './types';

import close from '../../assets/img/close.svg';
import burger from '../../assets/img/burger.svg';

const letters = ['A', 'B', 'C', 'D'];

export const Game = () => {
    const {questions}: IQuestionData = data;
    const [step, setStep] = useState<number>(0);
    const [selected, setSelected] = useState<number>(-1);
    const [isAnswered, setAnswered] = useState<boolean>(false);
    const [showLevel, setShowLevel] = useState<boolean>(false);
    const navigate = useNavigate();

    const onSelect = (answer: number) => {
        
        setSelected(answer);
        setTimeout(() => {
            setAnswered(true);
            setTimeout(() => {
                if (questions[step].correct.includes(answer)) {
                    setStep(step + 1);
                } else navigate(`/home/${questions[step].money}`);
            }, 2000);
        }, 2000);
    };

    useEffect(() => {
        if (step >= 0) {
            setSelected(-1);
            setAnswered(false);
        }
    }, [step])

    return (
        <div className='game-holder'>
            <div className="q-a-holder">
                <img onClick={() => setShowLevel(true)} src={burger} alt="burger" className="burger" />
                <p className='question'>{questions[step].question}</p>
                <div className="answer-holder">
                    {questions[step].content.map((answer, i) => 
                        <div key={answer} className='button-holder'>
                            <button
                                onClick={() => onSelect(i)} 
                                className={`answer ${selected === i ? 'selected' : ''} ${isAnswered && questions[step].correct.includes(i) ? 'correct' : ''} ${isAnswered && !questions[step].correct.includes(i) && selected === i ? 'incorrect' : ''}`}
                                ><span className='letter'>{letters[i]}</span> {answer}
                            </button>
                            <span className='divider' />
                        </div> 
                    )}
                </div>
            </div>
            <aside className={`level${showLevel ? ' show' : ''}`}>
                <img onClick={() => setShowLevel(false)} src={close} alt="" className="close" />
                {questions.map((question, i) => 
                    <div key={question.money} className='level-holder'>
                        <div className={`level-item ${i < step ? 'passed' : ''} ${i === step ? 'current' : ''}`}>
                            {question.money}
                        </div>
                        <span className='divider' />
                    </div>
                )}
            </aside>
        </div>
    );
}