import { useState, useEffect } from "react";

export default function ControlledForm() {
  console.log("Rendered - controlled form");

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    bio: "",
    occupation: "ux",
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a"
      );
      const profile = await response.json();

      setUsername(profile.username);
    })();
  }, []);

  const formSubmitHanlder = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form onSubmit={formSubmitHanlder}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Jane Doe"
            value={formValues.username}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            id="password"
            value={formValues.password}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="janedoe@gmail.com"
            id="email"
            value={formValues.email}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="age"
            name="age"
            placeholder="18"
            id="age"
            value={formValues.age}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            type="bio"
            name="bio"
            id="bio"
            value={formValues.bio}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="occupation">Occupation</label>
          <select
          name="occupation"
          id="occupation"
          value={formValues.occupation}
          onChange={changeHandler}
          >
            <option value="it">IT</option>
            <option value="ux">UX</option>
            <option value="sa">CRM</option>
          </select>
        </div>

        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
}
