import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download } from 'lucide-react';
export const CertificatesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const certificates = [{
    id: 1,
    title: 'AMUHACKS 4.0',
    subtitle: '36-Hour Hackathon',
    organization: 'Computer Science Society, AMU',
    date: 'April 12, 2025',
    description: 'Participated in a intensive 36-hour hackathon focusing on innovative solutions and creative problem-solving.',
    color: 'from-purple-500 to-pink-500',
    badge: '🟣',
    imageUrl: 'https://i.postimg.cc/wvKTjT3w/Rakshit-Awasthi-Techies.png'
  }, {
    id: 2,
    title: 'Hacktron',
    subtitle: '12-Hour Offline Hackathon',
    organization: 'JUET Guna',
    date: 'April 27, 2025',
    description: 'Competed in a fast-paced offline hackathon at my home university, demonstrating quick thinking and development skills.',
    color: 'from-blue-500 to-cyan-500',
    badge: '🔵',
    imageUrl: 'https://i.postimg.cc/bY1ch9xc/image.png'
  }];
  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
    link.download = 'Rakshit_Awasthi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadCertificates = () => {
    // Download all certificates as a zip file
    certificates.forEach((cert, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = cert.imageUrl;
        link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500); // Stagger downloads by 500ms
    });
  };
  return <section id="certificates" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-space gradient-text mb-6">
            Hackathon Certificates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition from competitive programming events and hackathons
          </p>
        </div>

        {/* Certificates Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certificates.map((cert, index) => <Card key={cert.id} className={`group cursor-pointer hover:shadow-xl transition-all duration-500 overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
          animationDelay: `${index * 0.2}s`
        }} onClick={() => setSelectedCertificate(cert.id)}>
              <CardContent className="p-0">
                {/* Certificate Preview */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${cert.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="text-center text-white z-10">
                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-lg opacity-90">{cert.subtitle}</p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="secondary" size="sm" className="rounded-full">
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {cert.organization}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Download Section */}
        

        {/* Full-screen Certificate Modal */}
        {selectedCertificate && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCertificate(null)}>
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  {certificates.find(cert => cert.id === selectedCertificate)?.title} Certificate
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedCertificate(null)}>
                  ✕
                </Button>
              </div>
              <div className="p-4">
                <img src={certificates.find(cert => cert.id === selectedCertificate)?.imageUrl} alt={`${certificates.find(cert => cert.id === selectedCertificate)?.title} Certificate`} className="w-full h-auto rounded-lg shadow-lg" onClick={e => e.stopPropagation()} />
              </div>
            </div>
          </div>}
      </div>
    </section>;
};