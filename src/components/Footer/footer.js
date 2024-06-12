// components/Footer.js
import React from 'react';

const socialLinks = [
  {
    href: 'https://wa.me/923100978536',
    src: 'wts.svg',
    alt: 'WhatsApp',
    height: 'h-16 mt-2',
  },
  {
    href: 'https://www.facebook.com/Malikofficial96155?mibextid=ViGcVu',
    src: 'fb.svg',
    alt: 'Facebook',
    height: 'h-16 mt-2',
  },
  {
    href: 'https://instagram.com/aesthetic_skinnn?igshid=NzZlODBkYWE4Ng==',
    src: 'ig.svg',
    alt: 'Instagram',
    height: 'h-20',
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 font-cursive text-white p-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg ml-32">&copy; 2023 Aesthetic Skin</p>
        <p className="text-sm mb-4 ml-32">Islamabad, Pakistan</p>

        <div className='flex justify-center gap-8 pt-5 pl-36'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={link.src}
                alt={link.alt}
                className={`hover:opacity-80 transition-opacity duration-300 ${link.height}`}
              />
            
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
