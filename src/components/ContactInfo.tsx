
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin } from 'lucide-react';

interface ContactInfoProps {
  isVisible: boolean;
}

export const ContactInfo = ({ isVisible }: ContactInfoProps) => {
  const contactInfo = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'rakshitawasthi.774@gmail.com',
      link: 'mailto:rakshitawasthi.774@gmail.com'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rakshit-awasthi',
      link: 'https://www.linkedin.com/in/rakshit-awasthi-3b8657313/'
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      value: 'github.com/Rakshit774',
      link: 'https://github.com/Rakshit774'
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${
      isVisible ? 'animate-slide-in-left' : 'opacity-0'
    }`}>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold font-space mb-6 text-gray-900 dark:text-white">
            Get in Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            I'm passionate about creating interactive and animated web experiences. 
            Whether you have an internship opportunity, a project idea, or just want to chat about web development, 
            I'd love to hear from you!
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-4">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="group hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-4">
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {typeof contact.icon === 'string' ? (
                      <span className="text-xl">{contact.icon}</span>
                    ) : (
                      contact.icon
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {contact.label}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="glass-effect rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            🚀 Looking for Internships
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            I'm actively seeking internship opportunities where I can contribute to exciting projects 
            and continue growing as a developer. Let's discuss how I can add value to your team!
          </p>
        </div>
      </div>
    </div>
  );
};
