import React, { useRef } from "react";
import contactImage from "../utils/contact.jpg";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();
  const [status, setStatus] = React.useState("");

  const onSubmit = async (data) => {
    setStatus("Sending...");
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus("Message sent successfully!");
      reset();
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-primary p-4 -mx-4 -my-5 flex flex-col items-center">
      <h1 className="text-4xl text-white mb-4">Contact Me</h1>
      <p className="text-white text-base mb-8 text-center">
        I’d love to hear from you! Whether you have a question or just want to connect, feel free to reach out.
      </p>

      <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-6xl">
        <div className="flex-1 mb-8 md:mb-0 md:pr-8">
          <img
            src={contactImage}
            alt="Contact illustration"
            className="w-full h-auto md:w-[570px] md:h-[470px] object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-cardBackground p-6 rounded-lg w-full max-w-md md:max-w-lg mx-auto">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-white mb-2 md:text-base"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-second bg-second text-accent placeholder-gray-400 focus:border-accent focus:ring-accent px-4 py-3 text-lg md:text-base"
                placeholder="Your Name"
                required
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters'
                  }
                })}
              />
              {errors.name && <p className="text-red-500 text-[0.9rem] mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white mb-2 md:text-base"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-second bg-second text-accent placeholder-gray-400 focus:border-accent focus:ring-accent px-4 py-3 text-lg md:text-base"
                placeholder="Your Email"
                required
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && <p className="text-red-500 text-[0.9rem] mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-white mb-2 md:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-second bg-second text-accent placeholder-gray-400 focus:border-accent focus:ring-accent px-4 py-3 text-lg md:text-base"
                placeholder="Your Message"
                required
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters'
                  }
                })}
              ></textarea>
              {errors.message && <p className="text-red-500 text-[0.9rem] mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-accent hover:bg-primary hover:text-accent border border-transparent hover:border-accent text-black font-semibold rounded-md hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-white mt-4">{status}</p>}
        </div>
      </div>

      <div className="w-full mt-12">
        <h2 className="text-2xl text-white mb-4 text-center md:text-start">
          Find Me Here
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.911674646044!2d72.84809841943094!3d19.076090366830307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6e0a3e579f3%3A0x5d8c8e3e394b59f3!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1678834975838!5m2!1sen!2sus"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Mumbai, India"
        ></iframe>
      </div>
    </main>
  );
}

export default Contact;
