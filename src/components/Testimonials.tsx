
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'Gerente General',
      content: 'M.AR.S transformó completamente nuestro negocio. Ahora podemos atender 40% más clientes con la misma plantilla. La inversión se recuperó en menos de 3 meses.',
      rating: 5,
      initials: 'CM',
      results: '+40% eficiencia'
    },
    {
      name: 'María Rodríguez',
      role: 'Propietaria',
      content: 'La facilidad de uso es increíble. Mis técnicos adoptaron el sistema en días, no semanas. Los reportes me dan visibilidad total del negocio.',
      rating: 5,
      initials: 'MR',
      results: 'ROI en 90 días'
    },
    {
      name: 'José García',
      role: 'Director de Operaciones',
      content: 'Gestionamos 8 talleres con M.AR.S. La centralización de datos y la automatización nos ahorraron 15 horas semanales de trabajo administrativo.',
      rating: 5,
      initials: 'JG',
      results: '15h/semana ahorradas'
    },
    {
      name: 'Ana Martínez',
      role: 'Gerente',
      content: 'Nuestros clientes están más satisfechos porque siempre saben el estado de sus vehículos. Las notificaciones automáticas son geniales.',
      rating: 5,
      initials: 'AM',
      results: '95% satisfacción'
    },
    {
      name: 'Roberto Silva',
      role: 'Propietario',
      content: 'La seguridad de datos nos da tranquilidad total. Sabemos que la información de nuestros clientes está protegida con estándares bancarios.',
      rating: 5,
      initials: 'RS',
      results: '100% seguridad'
    },
    {
      name: 'Patricia López',
      role: 'Administradora',
      content: 'El soporte técnico es excepcional. Siempre que necesitamos ayuda, responden inmediatamente. Es como tener un equipo IT propio.',
      rating: 5,
      initials: 'PL',
      results: 'Soporte 24/7'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros{' '}
            <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 500 talleres confían en M.AR.S para gestionar su negocio. 
            Descubre por qué somos la opción número 1 en Panamá.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-md group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary text-white text-sm font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  
                  {/* Result Badge */}
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {testimonial.results}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Logos */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm font-medium">Confianza que respalda resultados</p>
          </div>
          
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-bold text-gray-600">ISO 27001</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-bold text-gray-600">SSL 256-bit</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-bold text-gray-600">GDPR</span>
            </div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg">
              <span className="font-bold text-gray-600">SOC 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
