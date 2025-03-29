import { Link } from "react-router-dom";
import "./ContractPage.scss";
import { useTranslation } from "react-i18next";

function ContractPage() {
  const { t } = useTranslation();

  const contacts = [
    { value: t("phone"), contact: "+7 926 082 53 10", type: "phone" },
    { value: t("email"), contact: "hello@amordovski.com", type: "mail" },
    { value: t("tg"), contact: "amordovskoi", type: "link" },
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
