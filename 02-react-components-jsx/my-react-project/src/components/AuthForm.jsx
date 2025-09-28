import SubmitButton from './SubmitButton.jsx';

function AuthForm() {
  return (
    <form>
      <input type="text" placeholder="Enter username" />
      <SubmitButton />
    </form>
  );
}

export default AuthForm;
