import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 89990,
      oldPrice: 99990,
      image: 'img/3f556be2-aa90-4703-b664-773417f8bc0e.jpg',
      category: 'Смартфоны',
      specs: {
        display: '6.1" OLED',
        processor: 'A17 Pro',
        memory: '128GB',
        camera: '48MP + 12MP'
      },
      rating: 4.8
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      price: 119990,
      oldPrice: 139990,
      image: 'img/cde42581-dd59-49d8-b012-3c5120482346.jpg',
      category: 'Ноутбуки',
      specs: {
        display: '13.6" Retina',
        processor: 'M2',
        memory: '256GB SSD',
        ram: '8GB'
      },
      rating: 4.9
    },
    {
      id: 3,
      name: 'AirPods Pro 2',
      price: 24990,
      oldPrice: 29990,
      image: 'img/579d8a18-269b-4139-ad70-324f8dff1c8a.jpg',
      category: 'Аудио',
      specs: {
        type: 'TWS наушники',
        noise: 'Активное шумоподавление',
        battery: '30 часов',
        charging: 'Lightning/USB-C'
      },
      rating: 4.7
    }
  ];

  const brands = [
    { name: 'Apple', logo: '🍎' },
    { name: 'Samsung', logo: '📱' },
    { name: 'Sony', logo: '🎧' },
    { name: 'LG', logo: '📺' },
    { name: 'Xiaomi', logo: '⚡' }
  ];

  const toggleCompare = (productId: number) => {
    if (compareList.includes(productId)) {
      setCompareList(compareList.filter(id => id !== productId));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, productId]);
    }
  };

  const getComparedProducts = () => {
    return products.filter(p => compareList.includes(p.id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-heading font-bold text-tech-dark">ТехноУют05</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-tech-gray hover:text-primary transition-colors">Каталог</a>
              <a href="#brands" className="text-tech-gray hover:text-primary transition-colors">Бренды</a>
              <a href="#deals" className="text-tech-gray hover:text-primary transition-colors">Акции</a>
              <a href="#delivery" className="text-tech-gray hover:text-primary transition-colors">Доставка</a>
              <a href="#service" className="text-tech-gray hover:text-primary transition-colors">Сервис</a>
              <a href="#contacts" className="text-tech-gray hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tech-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Инновации в каждом устройстве
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Откройте мир передовых технологий с нашим каталогом премиальной бытовой техники
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-blue-700">
                <Icon name="Zap" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-tech-dark">
                <Icon name="Play" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-tech-dark mb-4">Каталог товаров</h2>
            <p className="text-lg text-tech-gray">Выберите лучшие устройства с функцией сравнения характеристик</p>
          </div>

          {/* Compare Bar */}
          {compareList.length > 0 && (
            <div className="fixed bottom-6 right-6 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Сравнение ({compareList.length}/3)</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCompareList([])}
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
              {compareList.length >= 2 && (
                <Button
                  size="sm"
                  onClick={() => setShowComparison(true)}
                  className="w-full"
                >
                  <Icon name="GitCompare" size={16} className="mr-2" />
                  Сравнить
                </Button>
              )}
            </div>
          )}

          {/* Comparison Modal */}
          {showComparison && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-heading font-bold">Сравнение товаров</h3>
                    <Button
                      variant="ghost"
                      onClick={() => setShowComparison(false)}
                    >
                      <Icon name="X" size={24} />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getComparedProducts().map(product => (
                      <div key={product.id} className="border rounded-lg p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <h4 className="font-semibold mb-2">{product.name}</h4>
                        <div className="space-y-2 text-sm">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-tech-gray">{key}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <div className="text-2xl font-bold text-primary">
                            {product.price.toLocaleString()} ₽
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-scale-in">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-500">
                      Скидка {Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </Badge>
                    <Button
                      variant={compareList.includes(product.id) ? "default" : "outline"}
                      size="sm"
                      className="absolute top-4 right-4"
                      onClick={() => toggleCompare(product.id)}
                    >
                      <Icon name="GitCompare" size={16} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{product.category}</Badge>
                  <CardTitle className="text-xl mb-2 font-heading">{product.name}</CardTitle>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="ml-2 text-sm text-tech-gray">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {product.price.toLocaleString()} ₽
                      </div>
                      <div className="text-sm text-tech-gray line-through">
                        {product.oldPrice.toLocaleString()} ₽
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 bg-tech-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-tech-dark mb-4">Популярные бренды</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map(brand => (
              <Card key={brand.name} className="text-center p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{brand.logo}</div>
                <h3 className="font-semibold text-tech-dark">{brand.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-tech-gray">Доставим ваш заказ в течение 24 часов</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-tech-gray">Официальная гарантия на все товары</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-tech-gray">Консультации в любое время суток</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Удобная оплата</h3>
              <p className="text-tech-gray">Рассрочка и различные способы оплаты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">ТехноУют05</h3>
              <p className="text-gray-300">Ваш надежный партнер в мире технологий</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Смартфоны</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ноутбуки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аудио</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сервис</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@techstore.ru</p>
                <p>Москва, ул. Технологическая, 1</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ТехноУют05. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;