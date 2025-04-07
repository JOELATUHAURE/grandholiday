import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get in touch with us for bookings and inquiries. We're here to help make
            your stay memorable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                <p className="text-gray-600">
                  <a href="tel:+256771609698" className="hover:text-orange-600 transition-colors">+256 771 609698</a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+256706643719" className="hover:text-orange-600 transition-colors">+256 706 643719</a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+256770802380" className="hover:text-orange-600 transition-colors">+256 770 802380</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-gray-600">
                  Nyamityobora (before Bible Institute),<br />
                  Mbarara City, Uganda
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@grandholidayguesthouse.com" className="hover:text-orange-600 transition-colors">
                    info@grandholidayguesthouse.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757683421282!2d30.654673!3d-0.614025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d85b7c8b0c3d31%3A0x937c94b0d5b5d5c5!2sMbarara%2C%20Uganda!5e0!3m2!1sen!2s!4v1629789012345!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}