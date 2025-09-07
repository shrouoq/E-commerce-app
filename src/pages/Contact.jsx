 import location from '../assets/Icon.png';
 import phone from '../assets/Icon (1).png';
 import mail from '../assets/Icon (2).png';


   export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Get In Touch */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quaerat unde quas dolor quod voluptate. Inventore, aut commodi rerum
          veniam nisi.
        </p>
      </div>

      {/* Contact Info */}
 <div className="grid md:grid-cols-3 gap-6">
   <div className="bg-gray-50 p-6 rounded-xl shadow text-center space-y-2">
  <img src={location} alt="Location" className="mx-auto w-10 h-10" />
  <p className="font-semibold">102 Street 2714 Donson</p>
  <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet</p>
</div>

<div className="bg-gray-50 p-6 rounded-xl shadow text-center space-y-2">
  <img src={phone} alt="Phone" className="mx-auto w-10 h-10" />
  <p className="font-semibold">+02 1234 567 88</p>
  <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet</p>
</div>

<div className="bg-gray-50 p-6 rounded-xl shadow text-center space-y-2">
  <img src={mail} alt="Mail" className="mx-auto w-10 h-10" />
  <p className="font-semibold">info@example.com</p>
  <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet</p>
</div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-center mb-6">Send Us</h3>
        <p className="text-center text-gray-500 mb-8 max-w-lg mx-auto">
          Contact us for all your questions and opinions, or you can share your
          problems in a shorter time with our contact officers.
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your message"
            rows="5"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="text-white px-6 py-3 rounded-lg hover:bg-green-600" style={{ backgroundColor: '#35AFA0' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
