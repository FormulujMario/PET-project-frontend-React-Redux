import { BsArrowRight } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Subscribe = () => {
  const newsletterClients = [];
  const [thankYou, setThankYou] = useState("unvisible");
  const subscribe = (event) => {
    event.preventDefault();
    newsletterClients.push(event.currentTarget.email.value);
    setThankYou((currentValue) => {
      return (currentValue = "");
    });
    event.currentTarget.remove();
  };
  return (
    <section className="subscribe">
      <div className={`thankyou ${thankYou}`}>THANK YOU</div>
      <Form className="subscribe-form" onSubmit={subscribe}>
        <Form.Group controlId="email">
          <Form.Control
            className="subscribe-input"
            type="email"
            placeholder="EMAIL ADRESS"
            required
             autoComplete="on"
          />
        </Form.Group>
        <button className="subscribe-button" type="submit">
          SIGN UP TO OUR LATER NEWS
          <BsArrowRight />
        </button>
      </Form>
    </section>
  );
};

export default Subscribe;
