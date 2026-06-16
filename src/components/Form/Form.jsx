import { useState } from 'react';
// import {v4 as uuid} from 'uuid' ;
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import { Container, ContainerSucces } from './styles';
// import { Form } from "../Form/Form";
export function Form() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  function verifyEmail(value) {
    setEmail(value);
    setValidEmail(validator.isEmail(value));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validEmail || !message) return;

    setLoading(true);
    try {
     await axios.post('http://localhost:5000/users', {
  email,
  message
});
      setSucceeded(true);
      toast.success('Message sent successfully!', {
        position: 'bottom-left',
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        position: 'bottom-left',
      });
    } finally {
      setLoading(false);
    }
  }

  if (succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Send a message to get started."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading || !validEmail || !message}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
export default Form;