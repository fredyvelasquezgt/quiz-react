import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import { QuizProvider } from './contexts/quiz';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QuizProvider>
        <Quiz />
    </QuizProvider>
 );

