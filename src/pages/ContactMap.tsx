import React from "react";

const ContactMap = () => {
  return (
    <div className="h-64 bg-slate-200 rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.791214358317!2d32.55939865112305!3d0.21119999885559082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1794c523601f%3A0x8277041e907c4b81!2sBooking%20Hospitality%20Leisure%20Infra%20LLP!5e0!3m2!1sen!2sug!4v1733836443657!5m2!1sen!2sug"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
