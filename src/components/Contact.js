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
    <main className="min-h-screen bg-primary p-2 sm:p-4 -mx-2 sm:-mx-4 -my-2 sm:-my-5 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-bold">Contact Me</h1>
          <p className="text-white text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether you have a question or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <img
              src={contactImage}
              alt="Contact illustration"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[470px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 w-full max-w-lg">
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 bg-cardBackground/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl border border-accent/20">
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-white mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border border-accent/80 bg-cardBackground/50 text-white placeholder-textSecondary focus:border-accent focus:ring-accent focus:ring-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base backdrop-blur-sm transition-all duration-300"
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
              {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-accent/80 bg-cardBackground/50 text-white placeholder-textSecondary focus:border-accent focus:ring-accent focus:ring-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base backdrop-blur-sm transition-all duration-300"
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
              {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-medium text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border border-accent/80 bg-cardBackground/50 text-white placeholder-textSecondary focus:border-accent focus:ring-accent focus:ring-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base backdrop-blur-sm transition-all duration-300 resize-none"
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
              {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-accent to-secondary hover:from-tertiary hover:to-accent text-white font-semibold rounded-md text-sm sm:text-base transition-all duration-500 hover:scale-105 hover:shadow-glow border border-accent/20"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-white text-sm sm:text-base mt-4 text-center">{status}</p>}
        </div>
      </div>
      </div>


    </main>
  );
}

export default Contact;
