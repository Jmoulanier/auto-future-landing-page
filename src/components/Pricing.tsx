
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      price: '$49',
      period: '/mes',
      description: 'Perfecto para talleres pequeños que empiezan',
      icon: Zap,
      popular: false,
      features: [
        'Hasta 50 órdenes de trabajo/mes',
        'Gestión básica de clientes',
        'Facturación digital',
        'Soporte por email',
        '1 usuario',
        'Reportes básicos'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Profesional',
      price: '$99',
      period: '/mes',
      description: 'La opción más popular para talleres en crecimiento',
      icon: Star,
      popular: true,
      features: [
        'Órdenes de trabajo ilimitadas',
        'CRM completo',
        'Agenda inteligente',
        'Comunicación automática con clientes',
        'Hasta 5 usuarios',
        'Reportes avanzados',
        'Inventario básico',
        'Soporte prioritario'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/mes',
      description: 'Para cadenas de talleres y operaciones grandes',
      icon: Crown,
      popular: false,
      features: [
        'Todo lo del plan Profesional',
        'Usuarios ilimitados',
        'Multi-sucursal',
        'Inventario avanzado',
        'API personalizada',
        'Integraciones empresariales',
        'Soporte 24/7',
        'Gerente de cuenta dedicado'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Planes diseñados para{' '}
            <span className="gradient-text">tu crecimiento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para tu taller. Todos incluyen prueba gratuita de 14 días 
            y puedes cambiar de plan en cualquier momento.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`price-card hover-lift relative ${
                plan.popular 
                  ? 'border-2 border-orange-500 shadow-2xl scale-105' 
                  : 'border border-gray-200 shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Más Popular
                  </div>
                </div>
              )}

              <CardContent className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4 hover-scale`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-500 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-4 text-lg font-semibold hover-glow ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white' 
                      : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                >
                  {plan.popular ? 'Empezar Ahora' : 'Probar Gratis'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block hover-scale">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ¿Necesitas un plan personalizado?
            </h3>
            <p className="text-gray-600 mb-4">
              Contactanos para soluciones enterprise con características específicas
            </p>
            <Button variant="outline" className="hover-glow">
              Contactar Ventas
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-600">14 días gratis</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-600">Sin compromiso</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-600">Cancela cuando quieras</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-600">Soporte incluido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
