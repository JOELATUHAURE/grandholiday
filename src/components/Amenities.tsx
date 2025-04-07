import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Wifi, 
  Car, 
  Clock, 
  Coffee, 
  Shield, 
  Utensils,
  Phone,
  Fan,
  Tv,
  Bath
} from 'lucide-react';

const amenities = [
  { icon: <Wifi size={24} />, title: 'Free Wi-Fi', description: 'High-speed internet access' },
  { icon: <Car size={24} />, title: 'Parking', description: 'Secure on-site parking' },
  { icon: <Clock size={24} />, title: '24/7 Reception', description: 'Always at your service' },
  { icon: <Coffee size={24} />, title: 'Room Service', description: 'Convenient in-room dining' },
  { icon: <Shield size={24} />, title: 'Security', description: '24/7 security service' },
  { icon: <Utensils size={24} />, title: 'Restaurant', description: 'Local & international cuisine' },
  { icon: <Phone size={24} />, title: 'Room Phone', description: 'Direct dial service' },
  { icon: <Fan size={24} />, title: 'Ventilation', description: 'Well-ventilated rooms' },
  { icon: <Tv size={24} />, title: 'Television', description: 'Flat-screen TVs' },
  { icon: <Bath size={24} />, title: 'Private Bath', description: 'En-suite facilities' }
];

export default function Amenities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">
            Our Amenities
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Enjoy our comprehensive range of amenities designed to make your stay
            comfortable and convenient.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-orange-600 mb-4 flex justify-center">
                {amenity.icon}
              </div>
              <h3 className="font-semibold mb-2">{amenity.title}</h3>
              <p className="text-sm text-gray-600">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}