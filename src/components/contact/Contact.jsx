import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

// Submit Button with Spinner
function SubmitButton({ btnName, btnState }) {
  return (
    <button
      className="cursor-pointer bg-gray-200 text-sky-900 font-semibold p-3 rounded hover:bg-gray-50 disabled:opacity-50 flex items-center justify-center gap-2"
      type="submit"
      disabled={btnState}
    >
      {btnState && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}
      {btnName}
    </button>
  );
}

export default function Contact() {
  const [submitBtn, setSubmitBtn] = useState(false);
  const contactForm = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function resetContact() {
    setName("");
    setEmail("");
    setService("");
    setMessage("");
  }

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || name.length < 3) {
      toast.error("Please enter a valid name.");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }

    if (!service || service === "Select a service") {
      toast.error("Please select a service.");
      return false;
    }

    if (!message.trim() || message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return false;
    }

    return true;
  };

  const submitContact = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    setSubmitBtn(true);
    const values = { name, email, service, message };

    emailjs
      .send("service_7yf7kh7", "template_u8qz3us", values, "c_DUm37Y02I81Pglf")
      .then(() => {
        const whatsappNumber = "231770167961"; 
        const encodedMessage = encodeURIComponent(
          `Hi Christian, my name is ${name}. I'm interested in your ${service} service. Here's my message:\n"${message}"`
        );
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        resetContact();
        setSubmitBtn(false);

        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          html: `Thanks for reaching out.<br />Would you like to continue this chat on WhatsApp?`,
          showCancelButton: true,
          confirmButtonText: "Chat on WhatsApp",
          cancelButtonText: "Close",
          confirmButtonColor: "#25D366",
          cancelButtonColor: "#d33",
          background: "#1f2937",
          color: "#fff",
          customClass: {
            popup: "rounded-lg",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(whatsappLink, "_blank");
          }
        });
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again later.");
        setSubmitBtn(false);
      });
  };

  return (
    <>
      <div id="Contact" className="mt-15 "></div>
      <section className="row flex justify-center align-middle flex-col text-white mb-32 px-20 sm:px-0 md:px-0">
        <section className="text-center [&_h1]:mb-2 [&_h1]:tracking-[5px] [&_span]:font-medium [&_span]:text-sky-300">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Get In Touch
          </h1>
          <span>Let's work together</span>
        </section>

        {/* Contact form */}
        <form
          ref={contactForm}
          onSubmit={submitContact}
          className="flex flex-col max-w-lg w-[100%] mx-auto my-20 gap-10 text-xl [&_input]:rounded [&_input]:ring-[0.5px] [&_input]:ring-white  [&_input]:outline-0 [&_select]:outline-0 [&_textarea]:outline-0 [&_textarea]:border-white [&_textarea]:ring-[0.5px] [&_select]:ring-[0.5px] [&_select]:border-white [&_input]:p-3 [&_select]:p-3 [&_textarea]:p-3  [&_input]:focus:ring-1 [&_input]:focus:ring-sky-400 [&_textarea]:focus:ring-sky-400 [&_textarea]:focus:ring-1 [&_select]:focus:ring-sky-400 [&_select]:focus:ring-1"
        >
          <section className="flex flex-col gap-3">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={name}
              autoComplete="on"
              required
            />
          </section>

          <section className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              autoComplete="on"
              required
            />
          </section>

          <section className="flex flex-col gap-3">
            <label htmlFor="service">Service</label>
            <select
              className="[&_option]:not-first:text-sky-800 hover:cursor-pointer rounded"
              name="service"
              id="service"
              onChange={(e) => setService(e.target.value)}
              value={service}
              required
            >
              <option value="">Select a service</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Software Troubleshooting">
                Software Troubleshooting
              </option>
            </select>
          </section>

          <section className="flex flex-col gap-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="rounded"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="message"
              rows={7}
              cols={15}
              required
            ></textarea>
          </section>

          <section className="flex flex-col">
            <SubmitButton
              btnName={submitBtn ? "Sending..." : "Get In Touch"}
              btnState={submitBtn}
            />
          </section>
        </form>
      </section>
    </>
  );
}
