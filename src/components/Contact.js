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
                className="mt-1 block w-full rounded-md border border-accent/80 bg-cardBackground/50 text-white placeholder-textSecondary focus:border-accent focus:ring-accent focus:ring-2 px-4 py-3 text-lg md:text-base backdrop-blur-sm transition-all duration-300"
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
                className="mt-1 block w-full rounded-md border border-accent/80 bg-cardBackground/50 text-white placeholder-textSecondary focus:border-accent focus:ring-accent focus:ring-2 px-4 py-3 text-lg md:text-base backdrop-blur-sm transition-all duration-300"
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
                className="mt-1 block w-full rounded-md border border-accent/80 bg-cardBackground/50 text-white placeholder-textSecondary focus:border-accent focus:ring-accent focus:ring-2 px-4 py-3 text-lg md:text-base backdrop-blur-sm transition-all duration-300"
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
              className="w-full py-2 px-4 bg-gradient-to-r from-accent to-secondary hover:from-tertiary hover:to-accent text-white font-semibold rounded-md transition-all duration-500 hover:scale-105 hover:shadow-glow border border-accent/20"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-white mt-4">{status}</p>}
        </div>
      </div>


    </main>
  );
}

export default Contact;
