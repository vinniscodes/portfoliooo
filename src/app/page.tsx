import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Briefcase,
  Code,
  Database,
  ExternalLink,
  GitMerge,
  Server,
  Smartphone,
} from 'lucide-react';

export default function Home() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');
  const project1Image = PlaceHolderImages.find((img) => img.id === 'project1');
  const project2Image = PlaceHolderImages.find((img) => img.id === 'project2');
  const project3Image = PlaceHolderImages.find((img) => img.id === 'project3');

  const skills = [
    { name: 'Frontend', icon: <Code /> },
    { name: 'Backend', icon: <Server /> },
    { name: 'Database', icon: <Database /> },
    { name: 'Mobile', icon: <Smartphone /> },
    { name: 'Controle de Versão', icon: <GitMerge /> },
  ];

  const experience = [
    {
      role: 'Desenvolvedor Frontend Sênior',
      company: 'Tech Solutions Inc.',
      period: '2020 - Presente',
      description: 'Liderei o desenvolvimento de aplicações web escaláveis usando React e Next.js. Colaborei com equipes multifuncionais para entregar produtos de alta qualidade. Orientei desenvolvedores juniores e melhorei a qualidade do código em toda a equipe.',
    },
    {
      role: 'Engenheiro de Software',
      company: 'Innovate Co.',
      period: '2018 - 2020',
      description: 'Desenvolvi e mantive funcionalidades para uma plataforma de e-commerce de grande escala. Trabalhei com TypeScript, GraphQL e Node.js para construir soluções robustas e eficientes.',
    },
  ];

  const projects = [
    {
      title: 'Projeto Alpha',
      description: 'Uma ferramenta completa de gerenciamento de projetos projetada para otimizar fluxos de trabalho e aprimorar a colaboração da equipe, construída com as mais recentes tecnologias da web.',
      image: project1Image,
      link: '#',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Projeto Beta',
      description: 'Um painel interativo de visualização de dados que fornece insights em tempo real de conjuntos de dados complexos, ajudando as empresas a tomar decisões informadas.',
      image: project2Image,
      link: '#',
      tags: ['TypeScript', 'D3.js', 'Node.js'],
    },
    {
      title: 'Projeto Gamma',
      description: 'Uma aplicação de rede social focada em dispositivos móveis, projetada para conectar pessoas com interesses semelhantes através de interesses e eventos compartilhados.',
      image: project3Image,
      link: '#',
      tags: ['React Native', 'Firebase', 'GraphQL'],
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl space-y-12 p-4 py-8 md:px-6 md:py-12">
      <section id="bio" className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <Avatar className="h-32 w-32 border-4 border-primary">
          {profileImage && <AvatarImage src={profileImage.imageUrl} alt="Foto de Perfil" data-ai-hint={profileImage.imageHint} />}
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h1 className="font-headline text-4xl font-bold tracking-tight">Alexandre 'Alex' Silva</h1>
          <p className="text-xl text-muted-foreground">Desenvolvedor Full-Stack Sênior</p>
          <p className="max-w-2xl">
            Apaixonado por criar soluções elegantes e eficientes para problemas complexos. Especialista em JavaScript, com vasta experiência no ecossistema de React e Node.js.
          </p>
        </div>
      </section>

      <section id="skills" className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">Habilidades & Tecnologias</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-transform hover:scale-105 hover:shadow-lg">
              <div className="mb-3 rounded-full bg-primary/10 p-4 text-primary">{skill.icon}</div>
              <h3 className="font-semibold">{skill.name}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">Experiência Profissional</h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <Card key={job.company}>
              <CardHeader>
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      {job.role}
                    </CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </div>
                  <Badge variant="secondary">{job.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">Projetos</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden">
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                  data-ai-hint={project.image.imageHint}
                />
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
