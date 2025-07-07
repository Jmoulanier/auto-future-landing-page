
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Registro Gratuito',
      description: 'Créate una cuenta en menos de 2 minutos. No necesitas tarjeta de crédito para comenzar tu prueba gratuita de 14 días.',
      features: ['Sin tarjeta de crédito', 'Acceso inmediato', 'Configuración guiada']
    },
    {
      number: '02',
      title: 'Configuración Personalizada',
      description: 'Nuestro equipo te ayuda a configurar AutoPro según las necesidades específicas de tu taller. Importamos tu información existente.',
      features: ['Migración de datos', 'Capacitación incluida', 'Soporte personalizado']
    },
    {
      number: '03',
      title: 'Lanzamiento y Crecimiento',
      description: 'Comienza a gestionar tu taller de forma más eficiente desde el primer día. Mide el impacto y escala tu negocio.',
      features: ['Resultados inmediatos', 'Métricas en tiempo real', 'Crecimiento sostenible']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comienza en{' '}
            <span className="gradient-text">3 simples pasos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implementar AutoPro en tu taller es más fácil de lo que imaginas. 
            Te acompañamos en cada paso del proceso para garantizar tu éxito.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="hover-lift border-0 shadow-md group hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 text-left">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 transform -translate-y-1/2 text-primary opacity-60">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu taller?
            </h3>
            <p className="text-gray-600 mb-6">
              Comienza tu prueba gratuita hoy y descubre por qué somos la opción #1
            </p>
            <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Empezar Ahora - Es Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <div className="mt-4 text-sm text-gray-500">
              ✓ 14 días gratis • ✓ Sin compromiso • ✓ Configuración incluida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
