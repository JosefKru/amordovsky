import { Link } from "react-router-dom";
import "./ContractPage.scss";

function ContractPage() {
  const contacts = [
    { value: "Phone", contact: "+7 926 082 53 10", type: "phone" },
    { value: "E-mail", contact: "mordovskoy@gmail.com", type: "mail" },
    { value: "Telegram", contact: "@AndreyUX", type: "link" },
  ];

  const getHref = (type: string, contact: string) => {
    switch (type) {
      case "phone":
        return `tel:${contact}`;
      case "mail":
        return `mailto:${contact}`;
      case "link":
        return `https://t.me/${contact.replace(/^@/, "")}`;
      default:
        return contact;
    }
  };

  return (
    <section className="container-contact">
      {contacts.map(({ value, contact, type }) => {
        const href = getHref(type, contact);

        return (
          <div key={value} className="contact-item">
            <div className="type">{value}</div>
            <Link to={href} className="contact" target="_blank">
              {contact}
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default ContractPage;
