
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, 
  Calendar, 
  BarChart3, 
  Shield, 
  Clock, 
  Users,
  CreditCard,
  MessageSquare,
  Settings
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Gestión de Órdenes',
      description: 'Administra todas las órdenes de trabajo desde un solo lugar con seguimiento en tiempo real.',
      color: 'bg-blue-100 text-primary'
    },
    {
      icon: Calendar,
      title: 'Agenda Inteligente',
      description: 'Programa citas automáticamente y optimiza el uso de tu tiempo y recursos.',
      color: 'bg-orange-100 text-secondary'
    },
    {
      icon: BarChart3,
      title: 'Reportes Avanzados',
      description: 'Analiza el rendimiento de tu taller con métricas detalladas y gráficos intuitivos.',
      color: 'bg-blue-100 text-primary'
    },
    {
      icon: Users,
      title: 'CRM Integrado',
      description: 'Mantén una base de datos completa de clientes con historial de servicios.',
      color: 'bg-orange-100 text-secondary'
    },
    {
      icon: CreditCard,
      title: 'Facturación Digital',
      description: 'Genera facturas automáticamente y acepta pagos digitales de forma segura.',
      color: 'bg-blue-100 text-primary'
    },
    {
      icon: MessageSquare,
      title: 'Comunicación Cliente',
      description: 'Mantén informados a tus clientes con notificaciones automáticas por SMS y email.',
      color: 'bg-orange-100 text-secondary'
    },
    {
      icon: Shield,
      title: 'Seguridad Total',
      description: 'Protección de datos con estándares bancarios y backups automáticos.',
      color: 'bg-blue-100 text-primary'
    },
    {
      icon: Settings,
      title: 'Configuración Flexible',
      description: 'Adapta el sistema a las necesidades específicas de tu taller.',
      color: 'bg-orange-100 text-secondary'
    },
    {
      icon: Clock,
      title: 'Soporte 24/7',
      description: 'Asistencia técnica disponible cuando la necesites, sin interrupciones.',
      color: 'bg-blue-100 text-primary'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Características que transforman tu{' '}
            <span className="gradient-text">taller</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo AutoPro revoluciona la gestión de talleres automotrices 
            con tecnología de vanguardia y funcionalidades pensadas para tu éxito.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-md group hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Todas las funciones incluidas en todos los planes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
