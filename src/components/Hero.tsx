
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-primary">
                <Zap className="w-4 h-4 mr-2" />
                El Futuro de la Gestión Automotriz
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Revoluciona tu{' '}
              <span className="gradient-text">taller automotriz</span>{' '}
              con tecnología de vanguardia
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Aumenta la eficiencia de tu taller en un 40%, gestiona clientes como nunca antes 
              y únete a más de 500 talleres que ya confían en nosotros.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg">
                Empezar Prueba Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">+40%</div>
                <div className="text-sm text-gray-600">Eficiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">Talleres Activos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-gray-600">Seguridad Bancaria</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Visual */}
          <div className="animate-slide-in-right lg:pl-8">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <Card className="p-6 shadow-2xl bg-white hover-lift">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Panel de Control</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Mock Chart */}
                  <div className="h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-end justify-around p-4">
                    <div className="w-8 bg-primary rounded-t h-16"></div>
                    <div className="w-8 bg-secondary rounded-t h-20"></div>
                    <div className="w-8 bg-primary rounded-t h-12"></div>
                    <div className="w-8 bg-secondary rounded-t h-24"></div>
                    <div className="w-8 bg-primary rounded-t h-18"></div>
                  </div>
                  
                  {/* Mock Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-primary">23</div>
                      <div className="text-sm text-gray-600">Órdenes Hoy</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">$15,432</div>
                      <div className="text-sm text-gray-600">Facturación</div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white p-3 rounded-full shadow-lg animate-bounce">
                <Users className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary text-white p-3 rounded-full shadow-lg animate-pulse">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
