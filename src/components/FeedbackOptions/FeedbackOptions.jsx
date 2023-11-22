export const FeedbackOptions = ({ addFeedback, options }) => {
  return (
    <div>
        <div>
      {options.map(option => (
        <button
          key={option}
          onClick={() => addFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
    </div>
  );
};

