import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wifi, Coffee, Bath, Tv } from 'lucide-react';

const rooms = [
  {
    title: 'Standard Room',
    price: 'UGX 20,000',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['Free Wi-Fi', 'Comfortable Bed', 'Private Bathroom', 'TV'],
  },
  {
    title: 'Deluxe Room',
    price: 'UGX 25,000',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['Free Wi-Fi', 'Large Bed', 'Premium Bathroom', 'TV'],
  },
  {
    title: 'Premium Suite',
    price: 'UGX 30,000',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['Free Wi-Fi', 'King Size Bed', 'Luxury Bathroom', 'Smart TV'],
  },
];

export default function Rooms() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">
            Our Comfortable Rooms
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose from our selection of well-appointed rooms, each designed to provide
            you with a comfortable and relaxing stay.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-serif font-bold">{room.title}</h3>
                  <span className="text-orange-600 font-semibold">{room.price}</span>
                </div>
                <ul className="space-y-2">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      {feature.includes('Wi-Fi') && <Wifi size={18} />}
                      {feature.includes('Bed') && <Coffee size={18} />}
                      {feature.includes('Bathroom') && <Bath size={18} />}
                      {feature.includes('TV') && <Tv size={18} />}
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+256771609698"
                  className="mt-6 block text-center bg-orange-600 text-white py-2 rounded-full hover:bg-orange-700 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}