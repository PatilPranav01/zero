import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  // Handle input change
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", user);
    // can send `user` to backend here
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-column">
            <div>
              <img src="/images/register.png" alt="Registration" />
            </div>
            <div>
              <h2>Register Here</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username:</label><br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    value={user.username}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email:</label><br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone:</label><br />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={user.phone}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password">Password:</label><br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleInput}
                    required
                  />
                </div>

                <br />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
