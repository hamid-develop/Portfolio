import React from "react";

const Home = () => {
  return (
    <div className="home text-center">
      <img
        src="/images/01.jpg"
        alt="myPhoto"
        className="myphoto img-fluid rounded-circle"
        width="200"
        height="200"
      />
      <h1 className="hamidreza  " style={{ color: "orange" }}>
        Hamidreza{" "}
      </h1>
      <div className="container my-0 py-0  text-dark">
        <p className="pt-2">
          <b>
            Software Engineer who has an extensive background in various coding
            languages,
          </b>
          <br />
          <b>
            developing web applications, and building websites from the ground
            up.
          </b>
        </p>
        <p>
          <i>Highly skilled in web development technologies:</i>
          <br />
          <i>
            <b>
              JavaScript (ES5, ES6), HTML, CSS, React.js, redux, bootstrap and
              more.
            </b>
          </i>
        </p>
      </div>
      <footer className="container">
        <ul className="social d-flex justify-content-center px3">
          <li className=" nav-item">
            <a href="mailto:h.alizadeh87@hotmail.com" className="nav-link"> 
              <img
                src="images/outlook.png"
                alt="email"
                title="H.Alizadeh87@hotmail.com"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://linkedin.com/in/hamidrezaalizadeh" className="nav-link">
              <img src="images/linkedin.png" alt="linkedin" title="linkedIn" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Twitter</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
