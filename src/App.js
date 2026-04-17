import { useState } from 'react';
import './App.css';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  /* const formData = {
    name: 'John Doe',
    email: 'sdfsdf'
  }; */
  const subscriptionData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'securepassword',
    plan: 'Basic',
    joinedDate: '2026-04-17',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    const registrationData = {
      name,
      email,
      password,
      registeredAt: new Date().toISOString(),
    };

    console.log('Library Management System');
    console.log('Subscription dataset:', subscriptionData);
    console.log('Registration form data:', registrationData);

    setSubmittedData(registrationData);
    event.target.reset();
  };

  return (
    <div className="App">
      <h1>Library Management System</h1>
      <p>Register for a library membership and view the data in the browser console.</p>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: 20 }}>
          <h2>Submitted registration data</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
