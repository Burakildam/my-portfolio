import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tight"
      >
        <p className="m5-4">{CONTACT.address}</p>
        <p className="m5-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>

       <p className="mt-4">© Copyright - Burak İLDAM </p> 
      </motion.div>
    </div>
  );
};

export default Contact;
