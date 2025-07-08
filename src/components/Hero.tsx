
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-orange-100 text-primary hover-scale">
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
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg hover-glow transition-all duration-300">
                Empezar Prueba Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold gradient-text mb-2">+40%</div>
                <div className="text-sm text-gray-600">Eficiencia</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-gray-600">Talleres Activos</div>
              </div>
              <div className="text-center hover-scale">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-8 h-8 text-primary" />
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
                    <h3 className="text-lg font-semibold text-gray-900">Panel de Control M.AR.S</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                  
                  {/* Mock Chart */}
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-orange-100 rounded-lg mb-4 flex items-end justify-around p-4">
                    <div className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t h-16 hover-scale"></div>
                    <div className="w-8 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t h-20 hover-scale" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t h-12 hover-scale" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-8 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t h-24 hover-scale" style={{ animationDelay: '0.6s' }}></div>
                    <div className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t h-18 hover-scale" style={{ animationDelay: '0.8s' }}></div>
                  </div>
                  
                  {/* Mock Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg hover-scale">
                      <div className="text-2xl font-bold text-blue-600">23</div>
                      <div className="text-sm text-gray-600">Órdenes Hoy</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-lg hover-scale">
                      <div className="text-2xl font-bold text-orange-600">$15,432</div>
                      <div className="text-sm text-gray-600">Facturación</div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full shadow-lg animate-float hover-glow">
                <Users className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg animate-float hover-glow" style={{ animationDelay: '3s' }}>
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
