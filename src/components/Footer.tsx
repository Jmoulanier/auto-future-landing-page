
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">AutoPro</h3>
            <p className="text-gray-300 leading-relaxed">
              La plataforma líder en gestión de talleres automotrices. 
              Transformamos la manera en que los talleres gestionan su negocio.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                México, CDMX
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +52 (55) 1234-5678
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contacto@autopro.com
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Producto</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Precios</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#updates" className="hover:text-white transition-colors">Actualizaciones</a></li>
              <li><a href="#api" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Recursos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#help" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#tutorials" className="hover:text-white transition-colors">Tutoriales</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Comunidad</a></li>
              <li><a href="#webinars" className="hover:text-white transition-colors">Webinars</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#privacy" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#cookies" className="hover:text-white transition-colors">Política de Cookies</a></li>
              <li><a href="#gdpr" className="hover:text-white transition-colors">GDPR</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Seguridad</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex space-x-6">
              <a href="#facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-300 text-sm">Mantente actualizado:</span>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-secondary w-48"
                />
                <button className="bg-secondary hover:bg-secondary/90 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <Separator className="my-8 bg-gray-800" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            © {currentYear} AutoPro. Todos los derechos reservados.
          </div>
          <div className="mt-2 md:mt-0">
            Hecho con ❤️ para transformar talleres automotrices
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
