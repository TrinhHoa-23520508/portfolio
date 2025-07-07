import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram, Facebook } from 'lucide-react';

const SocialSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com',
      color: 'hover:bg-gray-800',
      hoverColor: 'rgba(55, 65, 81, 0.2)'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-600',
      hoverColor: 'rgba(37, 99, 235, 0.2)'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com',
      color: 'hover:bg-sky-500',
      hoverColor: 'rgba(14, 165, 233, 0.2)'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com',
      color: 'hover:bg-pink-600',
      hoverColor: 'rgba(219, 39, 119, 0.2)'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://facebook.com',
      color: 'hover:bg-blue-700',
      hoverColor: 'rgba(29, 78, 216, 0.2)'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:your.email@example.com',
      color: 'hover:bg-red-600',
      hoverColor: 'rgba(220, 38, 38, 0.2)'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out and connect with me on social media or drop me a message. 
            I'd love to hear from you!
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2"
              style={{
                boxShadow: hoveredIndex === index 
                  ? `0 25px 50px -12px ${social.hoverColor}, 0 0 0 1px ${social.hoverColor}`
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Background glow effect */}
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${social.hoverColor}, transparent 70%)`,
                  }}
                />
              )}

              {/* Icon container */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-xl bg-gray-50 dark:bg-gray-700 mb-4 transition-all duration-300 group-hover:bg-white dark:group-hover:bg-gray-600">
                <div className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>
              </div>

              {/* Social name */}
              <span className="relative z-10 text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                {social.name}
              </span>

              {/* Hover border effect */}
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 rounded-2xl border-2 opacity-50 transition-opacity duration-300"
                  style={{
                    borderColor: social.hoverColor,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-pink-100 dark:border-pink-800/30">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Have a project in mind?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </button>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-pink-100 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SocialSection;