import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Certification } from "../../types";
import Image from "next/image";

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
}) => {
  return (
    <motion.div
      className="bg-neutral-800 text-neutral-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-6"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.1 }}
    >
      <Image
        width={100}
        height={100}
        src={certification.logo}
        alt={certification.issuer}
        className="h-12 mb-4 object-contain"
      />

      <h4 className="text-2xl font-sans font-semibold mb-2">
        {certification.title}
      </h4>
      <p className="text-md text-neutral-400 mb-2">
        {certification.issuer} • {certification.date}
      </p>

      <div className="mt-4 pt-4 border-t border-neutral-700">
        {certification.link && (
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View Certificate <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;
