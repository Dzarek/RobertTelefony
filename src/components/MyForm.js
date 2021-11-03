import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";
import styled from "styled-components";

class MyForm extends Component {
  state = {
    status: "",
  };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bluxqcj",
        "template_rxmr3mj",
        e.target,
        "user_hMGLIzZtMljfB9Ssj5uYj"
      )
      .then(
        () => {
          e.target.reset();
          this.setState({ status: "SUCCESS" });
        },
        () => {
          this.setState({ status: "ERROR" });
        }
      );
  };
  render() {
    const { status } = this.state;
    return (
      <Wrapper>
        <form onSubmit={this.sendEmail}>
          <h1>Jeśli masz jakieś pytania, śmiało napisz do mnie!</h1>
          <div className="inputs">
            <input
              type="text"
              name="name"
              placeholder="Imię i nazwisko"
              required
            />
            <input type="email" name="email" placeholder="E-mail" required />
          </div>
          <br />
          <textarea
            placeholder="Twoja wiadomość..."
            name="message"
            required
          ></textarea>

          <label className="labelCheck" htmlFor="accept">
            <p>
              <input type="checkbox" id="accept" name="accept" required />
              Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi
              na mojego e-maila{" "}
              <span>
                {" "}
                <NavLink className="cookieLink" to="/cookie">
                  (Polityka Prywatności)
                </NavLink>
              </span>
            </p>
          </label>
          {status === "SUCCESS" ? (
            <p>Wiadomość wysłana! </p>
          ) : (
            <button>Wyślij</button>
          )}
          {status === "ERROR" && <p>ups... coś poszło nie tak!</p>}
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  form {
    width: 35vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
      width: 35%;
      font-size: 1rem;
      padding: 1vh 0;
      font-family: "Lemonada", sans-serif;
      background: #333;
      color: white;
      letter-spacing: 1px;
      border: 2px solid rgb(120, 2, 2);
      border-radius: 10px;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        background: rgb(120, 2, 2);
      }
    }

    h1 {
      text-align: center;
      color: rgb(120, 2, 2);
      font-size: 1.5rem;
      margin: 0 auto 5vh;
    }
    .inputs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        width: 46%;
        font-size: 0.8rem;
        padding: 1vh 2%;
        border: 2px solid rgb(120, 2, 2);
        border-radius: 10px;
        font-family: "Lemonada", sans-serif;
      }
    }
    textarea {
      width: 100%;
      height: 25vh;
      padding: 2%;
      font-size: 0.8rem;
      border: 2px solid rgb(120, 2, 2);
      border-radius: 10px;
      font-family: "Lemonada", sans-serif;
    }
    label {
      margin: 3vh auto;
      input {
        margin-right: 10px;
      }
      span a {
        color: rgb(120, 2, 2);
        text-shadow: none;
      }
    }
  }
`;

export default MyForm;
