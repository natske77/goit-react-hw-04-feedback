import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import { Container } from './App.styled';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutrual] = useState(0);
  const [bad, setBad] = useState(0);
  const nameButtons = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = value => {
    // console.log(value);
    switch (value) {
      case 'good': {
        setGood(prevGood => prevGood + 1);
        break;
      }
      case 'neutral': {
        setNeutrual(prevNeutral => prevNeutral + 1);
        break;
      }
      case 'bad': {
        setBad(prevBad => prevBad + 1);
        break;
      }
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / (good + neutral + bad));
  };

  const removeStatistics = () => {
    setGood(0);
    setNeutrual(0);
    setBad(0);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          nameButtons={nameButtons}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            removeStatistics={removeStatistics}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}