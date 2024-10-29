import React, { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center bg-neutral-800 px-5 py-1">
        <div className="flex items-center space-x-4">
          <a href="mailto:agromitra@gmail.com" className="flex items-center text-white">
            <img src="https://cdn.iconscout.com/icon/free/png-64/email-letter-envelope-message-38065.png" 
                 alt="G-mail" 
                 className="h-8 w-8 mx-3 transition-transform hover:rotate-12" />
            <span className="font-sans">www.agromitra.com</span>
          </a>
          <a href="tel:+919123456784" className="flex items-center text-white">
            <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/telephone-41-117249.png" 
                 alt=""
                 className="h-8 w-8 mx-3 transition-transform hover:rotate-12" />
            <span className="font-sans">+91 9123456784</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          {['instagram', 'facebook', 'linkedin', 'telegram'].map((social) => (
            <a href="#" key={social} className="transition-transform hover:rotate-12">
              <img src={`https://cdn.iconscout.com/icon/free/png-64/${social}-1868978-1583142.png`}
                   alt={social}
                   className="h-8 w-8" />
            </a>
          ))}
        </div>
      </nav>

      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center bg-blue-500 w-full py-4 px-6">
        <a href="#" className="flex items-center">
          <span id="c_name" className="text-white text-2xl font-bold font-sans md:block hidden">
            AgroMitra
          </span>
        </a>
        <ul className="flex items-center space-x-8">
          <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Home</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Register/Sign In</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Services</a></li>
          <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Contact Us</a></li>
        </ul>
      </header>

      <main className="flex flex-col">
        {/* Front Section */}
        <div className="w-full py-16 text-center bg-slate-600">
          <h1 className="text-4xl text-white font-cursive mb-8 shadow-lg">Welcome to About Us</h1>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
               alt="font"
               className="w-3/4 mx-auto -mt-8" />
          <p className="text-white text-xl px-10 mt-8 tracking-wide">
            "Empowering farmers with AI-driven solutions for a better future."
          </p>
        </div>

        {/* Services Section */}
        <div className="reveal w-11/12 mx-auto py-20 flex flex-col md:flex-row justify-between items-center">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
               alt=""
               className="w-full md:w-1/2 mb-8 md:mb-0" />
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">Our Services</h1>
            <p className="text-lg mb-8">
              Our website offers innovative services to enhance agricultural productivity and sustainability. 
              Key features include crop disease prediction using image processing, which helps farmers detect 
              and address issues early by simply uploading images of affected plants.
            </p>
            
            {['Crop disease prediction (90%)', 'Real-time weather updates (85%)', 'Government schemes (70%)'].map((service, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl mb-2">{service}</h2>
                <div className="w-full h-2 bg-red-200 rounded">
                  <div className={`h-full bg-red-500 rounded transition-all duration-1000 ease-out
                    ${index === 0 ? 'w-[90%]' : index === 1 ? 'w-[85%]' : 'w-[70%]'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="w-full py-16 bg-blue-500">
          <h1 className="text-3xl text-white text-center mb-12">
            Real Time Monitoring
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-8">
            {Array(5).fill('Services').map((text, index) => (
              <div key={index} 
                   className="p-6 text-center bg-gradient-to-br from-blue-400 to-blue-600 
                            shadow-lg text-white transition-all duration-300
                            hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800
                            hover:border-l-2 hover:border-b-2 hover:border-white
                            hover:rounded-br-lg">
                <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                     alt=""
                     className="w-16 h-16 mx-auto mb-4" />
                <p className="font-bold">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Sections */}
        <div className="reveal w-11/12 mx-auto py-16 space-y-16">
          {[
            {
              title: 'WE PROVIDE',
              subtitle: 'Crop Monitoring',
              content: 'Advanced AI-powered crop monitoring to detect diseases early and improve farm management.',
              image: 'https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png'
            },
            {
              title: 'WE HAVE',
              subtitle: 'AI Tools',
              content: 'Cutting-edge AI tools for crop disease detection and precision farming.',
              image: 'https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png'
            },
            {
              title: 'OUR MISSION',
              subtitle: 'Improved Quality',
              content: 'Our mission is to provide farmers with cutting-edge technology to make informed decisions.',
              image: 'https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png'
            }
          ].map((section, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-2/3 pr-8">
                <h1 className="text-3xl font-bold mb-2">{section.title}</h1>
                <h2 className="text-2xl mb-4">{section.subtitle}</h2>
                <p className="text-lg">{section.content}</p>
              </div>
              <img src={section.image} alt="" className="w-full md:w-1/3 mt-8 md:mt-0" />
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="w-full bg-slate-600 py-12">
          <h1 className="text-3xl text-white text-center mb-8">AgroMitra</h1>
          <div className="flex flex-wrap justify-around items-center px-8">
            {[
              {
                icon: 'address-blue-circle-location-map-marker-navigation-icon-45868',
                title: 'Address',
                content: 'Ujjain, MP, India'
              },
              {
                icon: 'phone-2666572-2212584',
                title: 'Phone',
                content: '+91 9453485353'
              },
              {
                icon: 'gmail-2489176-2082900',
                title: 'E-mail',
                content: 'agromitra@email.com'
              }
            ].map((contact, index) => (
              <a key={index} href="#" className="flex items-center text-white mb-4 md:mb-0">
                <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/${contact.icon}.png`}
                     alt=""
                     className="w-8 h-8 mr-4" />
                <span>
                  <h3 className="font-bold">{contact.title}</h3>
                  <p>{contact.content}</p>
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-600 pt-8">
        <div className="flex flex-wrap justify-around px-12">
          <ul className="space-y-4 mb-8">
            {['Home', 'About Us', 'Services'].map((item) => (
              <li key={item}>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
          <ul className="space-y-4 mb-8">
            {['Training', 'FAQs'].map((item) => (
              <li key={item}>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
          <div className="text-center mb-8">
            <h2 className="text-white text-xl mb-4">Contact Us</h2>
            <div className="flex justify-center space-x-4 mb-4">
              {['instagram', 'facebook', 'whatsapp'].map((social) => (
                <a key={social} href="#" className="transition-transform hover:rotate-12">
                  <img src={`https://cdn.iconscout.com/icon/free/png-64/${social}-188-498425.png`}
                       alt={social}
                       className="w-8 h-8" />
                </a>
              ))}
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              {['telegram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="transition-transform hover:rotate-12">
                  <img src={`https://cdn.iconscout.com/icon/free/png-64/${social}-2752057-2284874.png`}
                       alt={social}
                       className="w-8 h-8" />
                </a>
              ))}
            </div>
            <a href="tel:123456789" 
               className="text-white text-xl tracking-wider font-bold block mt-4">
              Telephone No: +91 232345553
            </a>
          </div>
        </div>
        <p className="text-white text-center bg-neutral-900 py-2">
          &copy;Copyright <b>agromitra</b>. All Rights Reserved
        </p>
      </footer>

      <style jsx>{`
        .reveal {
          transform: translateY(150px);
          opacity: 0;
          transition: all 2s ease;
        }
        
        .reveal.active {
          transform: translateY(0px);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}