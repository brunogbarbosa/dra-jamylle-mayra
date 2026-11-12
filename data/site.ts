export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export type ResultItem = { image: string; label: string; alt: string; orientation: 'horizontal' | 'vertical' | 'single'; beforeShare: number; comparisonRatio: number };

export const site = {
  name: 'Jamylle Mayra',
  monogram: 'JM',
  headline: 'A beleza de continuar sendo você.',
  cro: 'CRO-PI 5385',
  bio: 'Dentista, especialista em Dentística e Periodontia. Pós-graduanda em Harmonização Orofacial. Um olhar para o sorriso e a identidade de cada pessoa.',
  education: ['Especialista em Dentística e Periodontia', 'Pós-graduanda em Harmonização Orofacial'],
  specialties: ['Dentística', 'Periodontia', 'Facetas em resina'],
  phone: '+55 86 99862-3841',
  whatsapp: '5586998623841',
  whatsappUrl: 'https://wa.me/5586998623841',
  address: '',
  professionalPhilosophy: 'Sua identidade em cada detalhe.',
  instagram: 'https://www.instagram.com/drajamylle.mayra/',
  instagramHandle: '@drajamylle.mayra',
  philosophy: ['SEUS TRAÇOS.', 'SEU SORRISO.', 'SUA ESSÊNCIA.'],
  images: { hero: '/images/jamylle-hero.png', essence: '/images/jamylle-essencia.png', about: '/images/jamylle-consultorio.png', beauty: '/images/jamylle-editorial.png' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/registro-01.jpg', label: 'O perfil, em detalhes', alt: 'Comparativo original de perfil facial, com fotografias lado a lado.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1294 },
    { image: '/images/registro-02.jpg', label: 'A expressão de um sorriso', alt: 'Registro único de um sorriso em detalhe, na orientação original.', orientation: 'single', beforeShare: .5, comparisonRatio: 1284 / 1273 },
    { image: '/images/registro-03.jpg', label: 'Harmonia em cada ângulo', alt: 'Comparativo original de perfil facial, com fotografias lado a lado.', orientation: 'horizontal', beforeShare: .506, comparisonRatio: 1284 / 1508 },
    { image: '/images/registro-04.jpg', label: 'Sorrisos e identidade', alt: 'Registro único de um sorriso, sem comparação de antes e depois.', orientation: 'single', beforeShare: .5, comparisonRatio: 1284 / 1332 },
    { image: '/images/registro-05.jpg', label: 'Beleza nos detalhes', alt: 'Registro único de um sorriso na orientação original fornecida.', orientation: 'single', beforeShare: .5, comparisonRatio: 1284 / 1285 },
    { image: '/images/registro-06.jpg', label: 'Um olhar mais próximo', alt: 'Registro único dos dentes e do sorriso em detalhe, na orientação original.', orientation: 'single', beforeShare: .5, comparisonRatio: 1218 / 1600 },
  ] as ResultItem[] },
  seo: { title: 'Dra. Jamylle Mayra | Odontologia e Estética do Sorriso', description: 'Conheça a Dra. Jamylle Mayra, especialista em Dentística e Periodontia. Veja registros reais e agende sua avaliação pelo WhatsApp.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
