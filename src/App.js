import { useState } from 'react';
import './App.css';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  /* const formData = {
    name: 'John Doe',
    email: 'sdfsdf'
  }; */
  /* Can we subscription data more */
/*   const subscriptionData = [
    {
    name: 'Abc',
    email: 'Abc@example.com',
    password: 'securepassword',
    plan: 'Basic',
    joinedDate: '2026-04-17',
  },
  {},

  {
  name: 'Xyz',
  email: 'xyz@gmail.com',
  password: 'securepassword',
  plan: 'Premium',
  joinedDate: '2026-04-18',

}]; */
const multipleSubscriptionData = [
  {
    name: 'Abc',
    email: '',
    password: 'securepassword',
    plan: 'Basic',
    joinedDate: '2026-04-17',
  },
  {
    name: 'Xyz',
    email: '',
    password: 'securepassword',
    plan: 'Premium',
    joinedDate: '2026-04-18',
  },
  {
    name: 'Pqr',
    email: '',
    password: 'securepassword',
    plan: 'Standard',
    joinedDate: '2026-04-19',
  },
];    
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
    console.log('library subscription data:', multipleSubscriptionData);
   /*  console.log('Subscription dataset:', multipleSubscriptionData); */
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
