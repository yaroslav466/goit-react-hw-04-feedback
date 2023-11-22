import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';


export const App = () => {
  
  const [good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);

   const addFeedback = feedback => {
   

    
    if (feedback === 'good') {
      setGood(good + 1);
    } else if (feedback === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedback === 'bad') {
      setBad(bad + 1);
    }
  };
  const countTotalFeedback = () => {
   return good + neutral + bad ;
  }
  const positiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100)
  }
  
   
 
  
    return (
      <main>
        <Section
          title="Please enter your feedback"
          children={
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              addFeedback={addFeedback}
            />
          }
        />
        <Section
          title="Statistics"
          children={
           countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={positiveFeedbackPercentage()}
              />
            ) : (
              <h3>There is no feedback</h3>
            )
          }
        />  
      </main>
    );
};
