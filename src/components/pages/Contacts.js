import PageTitle from "../PageTitle";
import { KB_CONTACTS, KL_CONTACTS, OPENING_HOURS } from "../CONSTANTS";

const Contacts = () => {
  return (
    <main>
      <PageTitle title="CONTACTS" />
      <section className="google-map">
        <iframe
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d182182.482027949!2d20.542501!3d44.482345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750a60045c5c375%3A0x36d10dc247439bd1!2sKabinet%20Brewery!5e0!3m2!1sen!2srs!4v1714778478115!5m2!1sen!2srs"
          width="100%"
          height="600"
          style={{ borderRadius: "8px", filter: "grayscale(100%)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="contact-info">
        <div className="left-part">
          <div>
            <h3>{KB_CONTACTS.name}</h3>
            <div className="main-info">
              <p>{KB_CONTACTS.email}</p>
              <p>{KB_CONTACTS.phone}</p>
            </div>
            <p>{KB_CONTACTS.city}</p>
            <p>{KB_CONTACTS.address}</p>
            <p>{KB_CONTACTS.zip}</p>
          </div>
        </div>
        <div className="right-part">
          <div>
            <h3>{KL_CONTACTS.name}</h3>
            <div className="main-info">
              <p>{KL_CONTACTS.email}</p>
              <p>{KL_CONTACTS.phone}</p>
            </div>
            <p>{KL_CONTACTS.city}</p>
            <p>{KL_CONTACTS.address}</p>
            <p>{KL_CONTACTS.zip}</p>
          </div>
          <div>
            <h3>{OPENING_HOURS.name}</h3>
            <div className="main-info">
              <p>{OPENING_HOURS.days}</p>
            </div>
            <p>{OPENING_HOURS.time}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Contacts;
