import GoalItem from './GoalItem.jsx';

function GoalList() {
  return (
    <ul>
      <GoalItem title="Teach React in a highly-understandable way">
        I want to ensure you learn React in the easiest way possible.
      </GoalItem>
      <GoalItem title="Allow you to practice what you learned">
        Practice makes perfect! Apply concepts immediately.
      </GoalItem>
      <GoalItem title="Motivate you to continue learning">
        Stay consistent and keep growing as a React developer.
      </GoalItem>
    </ul>
  );
}

export default GoalList