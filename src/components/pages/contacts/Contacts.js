import PageTitle from "../../PageTitle";
import { CONTACTS } from "../../constants";
import "./Contacts.css";

const Contacts = () => {
  return (
    <main>
      <PageTitle title="CONTACTS" />
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d182182.482027949!2d20.542501!3d44.482345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750a60045c5c375%3A0x36d10dc247439bd1!2sKabinet%20Brewery!5e0!3m2!1sen!2srs!4v1714778478115!5m2!1sen!2srs"
          width="100%"
          height="600"
          style={{ borderRadius: "8px", filter: "grayscale(100%)" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-info">
        {CONTACTS.map((info) => {
          if (info.days) {
            return (
              <div>
                <span>{info.name}</span>
                <p>{info.days}</p>
                <p>{info.time}</p>
              </div>
            );
          } else if (!info.name) {
            return <div></div>;
          } else {
            return (
              <div>
                <span>{info.name}</span>
                <p>{info.email}</p>
                <p>{info.phone}</p>
                <p>{info.address}</p>
              </div>
            );
          }
        })}
      </div>
    </main>
  );
};
export default Contacts;
