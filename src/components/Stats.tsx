
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Clock, DollarSign, Shield, Zap } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '+40%',
      label: 'Aumento de Eficiencia',
      description: 'Promedio registrado por nuestros clientes',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Talleres Activos',
      description: 'Confiando en AutoPro diariamente',
      color: 'bg-blue-100 text-primary'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Soporte Técnico',
      description: 'Disponible cuando lo necesites',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: DollarSign,
      value: '3 meses',
      label: 'ROI Promedio',
      description: 'Tiempo de recuperación de inversión',
      color: 'bg-orange-100 text-secondary'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime Garantizado',
      description: 'Disponibilidad del sistema',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Zap,
      value: '< 2 seg',
      label: 'Tiempo de Carga',
      description: 'Velocidad optimizada',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resultados que{' '}
            <span className="gradient-text">hablan por sí solos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Datos reales de talleres que ya están transformando su negocio con AutoPro. 
            Únete a la revolución digital automotriz.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-md group hover:shadow-xl transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para formar parte de estas estadísticas?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Únete a cientos de talleres que ya están transformando su negocio
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Comenzar Prueba Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
