import React from 'react';
import { motion } from 'framer-motion';

const TermsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12"
    >
      <h1 className="text-4xl font-bold mb-8 text-highlight">Terms & Conditions</h1>

      <div className="bg-secondary p-8 rounded-lg space-y-6 text-gray-300">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">1. General Use</h2>
          <p>
            This Football Wallpaper App is provided for personal, non-commercial use only. Users agree
            to comply with all applicable laws and regulations when using this application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">2. Admin Panel</h2>
          <p>
            Admin access is restricted to authorized personnel only. Admin credentials must be kept
            confidential. Unauthorized access or misuse will result in immediate termination of access.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">3. Content Rights</h2>
          <p>
            All wallpapers and content on this platform are intellectual property. Users agree not to
            redistribute, modify, or use content for commercial purposes without explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">4. User Responsibility</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their access credentials and for
            all activities conducted through their account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
          <p>
            The Football Wallpaper App is provided "as is" without warranties. We are not liable for
            any damages or losses resulting from the use or inability to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">6. Contact</h2>
          <p>
            For questions or concerns, please contact us at:
            <br />
            <strong>Email:</strong> footemjid@gmail.com
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsPage;
