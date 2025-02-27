import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8">Get in Touch</h2>
            <div className="space-y-6 text-lg">
              <p>
                We're always interested in new projects and collaborations. 
                Whether you have a specific project in mind or just want to say hello, 
                we'd love to hear from you.
              </p>
              <div className="space-y-2">
                <p>Email: hello@asprodigital.com</p>
                <p>Tel: +6011-650 25350</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 bg-[#f8f8f8] border-none focus:ring-0"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-[#f8f8f8] border-none focus:ring-0"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full p-4 bg-[#f8f8f8] border-none focus:ring-0"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 hover:opacity-80 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;