import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, Code, Cpu, Zap, Users, Calendar, MapPin, Phone, Mail, Instagram } from 'lucide-react'
import { siteConfig } from './config/content.js'
import './App.css'

// Import images
import heroImage from './assets/rt6VHzRJG2CI.jpg'
import roboticsImage from './assets/UWlCEtH4mnBM.jpg'
import codingImage from './assets/9V97JxXs2cB5.jpg'
import workshopImage from './assets/4FetNTAezeun.jpg'
import legoImage from './assets/dk8iMCb5ZqTM.png'
import arduinoImage from './assets/eZGxPmYNBA0v.jpg'
import makerspaceImage from './assets/EKZtw9Wwga3t.jpg'
import kidsImage from './assets/aCdhYH0NCUjL.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const equipment = [
    { name: siteConfig.equipment[0].name, icon: <Cpu className="w-6 h-6" />, image: workshopImage },
    { name: siteConfig.equipment[1].name, icon: <Zap className="w-6 h-6" />, image: arduinoImage },
    { name: siteConfig.equipment[2].name, icon: <Code className="w-6 h-6" />, image: legoImage },
    { name: siteConfig.equipment[3].name, icon: <Users className="w-6 h-6" />, image: makerspaceImage }
  ]

  const getIconComponent = (iconName) => {
    const icons = {
      Users: <Users className="w-4 h-4" />,
      Calendar: <Calendar className="w-4 h-4" />,
      Zap: <Zap className="w-4 h-4" />
    }
    return icons[iconName] || <Users className="w-4 h-4" />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {siteConfig.siteName}
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Ana Sayfa</a>
                <a href="#programs" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Programlar</a>
                <a href="#equipment" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Ekipmanlar</a>
                <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Hakkımızda</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">İletişim</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Ana Sayfa</a>
              <a href="#programs" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Programlar</a>
              <a href="#equipment" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Ekipmanlar</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Hakkımızda</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">İletişim</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {siteConfig.hero.badge}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {siteConfig.hero.title}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {siteConfig.hero.titleHighlight} </span>
                  {siteConfig.hero.titleEnd}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {siteConfig.hero.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-medium">
                  {siteConfig.hero.primaryButton}
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 rounded-2xl text-lg font-medium">
                  {siteConfig.hero.secondaryButton}
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                {siteConfig.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Robotik kodlama eğitimi" 
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              {siteConfig.programs.badge}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              {siteConfig.programs.title}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> {siteConfig.programs.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.programs.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.ageGroups.map((group, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 ${group.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{group.age}</h3>
                    <p className="text-gray-600">{group.description}</p>
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-blue-50 group-hover:text-blue-600">
                    Detayları Gör
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              {siteConfig.equipmentSection.badge}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              {siteConfig.equipmentSection.title}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> {siteConfig.equipmentSection.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.equipmentSection.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {item.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <Button variant="ghost" className="w-full group-hover:bg-blue-50 group-hover:text-blue-600">
                    Keşfet
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  {siteConfig.about.badge}
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  {siteConfig.about.title}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> {siteConfig.about.titleHighlight} </span>
                  {siteConfig.about.titleEnd}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {siteConfig.about.description}
                </p>
              </div>

              <div className="space-y-4">
                {siteConfig.about.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-green-100' : 'bg-purple-100'} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <div className={`${index === 0 ? 'text-blue-600' : index === 1 ? 'text-green-600' : 'text-purple-600'}`}>
                        {getIconComponent(feature.icon)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={codingImage} 
                  alt="Çocuklar kodlama öğreniyor" 
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-white/10 text-white hover:bg-white/20">
              {siteConfig.contactSection.badge}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              {siteConfig.contactSection.title}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> {siteConfig.contactSection.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {siteConfig.contactSection.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Adres</h3>
                  <p className="text-gray-300">{siteConfig.contact.address}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                  <p className="text-gray-300">{siteConfig.contact.phone}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Instagram</h3>
                  <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                    {siteConfig.contact.instagramHandle}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-medium">
              {siteConfig.contactSection.ctaButton}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {siteConfig.siteName}
            </h3>
            <p className="text-gray-400">
              {siteConfig.footer.description}
            </p>
            <div className="flex justify-center space-x-6">
              <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8 mt-8">
              <p className="text-gray-400 text-sm">
                {siteConfig.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

