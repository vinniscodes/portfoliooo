import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, GitMerge, Server, Github, Linkedin } from 'lucide-react';

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.69l5.66 9.83-11.32 0z" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M4.93 16.5l14.14-8.16" />
      <path d="M19.07 16.5l-14.14-8.16" />
    </svg>
  );
  
  const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 15V9l6 6V9" />
    </svg>
  );
  
  const TypescriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 11l8-8 8 8" />
      <path d="M4 21v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4" />
      <rect x="7" y="11" width="10" height="10" />
    </svg>
  );
  
  
  const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c-3.333-3.333-6.667 0-10 0s3.333 3.333 0 6.667C5.333 22 8.667 18.667 12 12zm0 0c3.333-3.333 6.667 0 10 0s-3.333 3.333 0 6.667C18.667 22 15.333 18.667 12 12zm0 0c-3.333 3.333-6.667 0-10 0s3.333-3.333 0-6.667C5.333 2 8.667 5.333 12 12zm0 0c3.333 3.333 6.667 0 10 0s-3.333-3.333 0-6.667C18.667 2 15.333 5.333 12 12z" />
    </svg>
  );

const projects = [
  {
    title: 'MyHostVinni',
    description: 'Uma Single Page Application (SPA) para gestão de anfitriões, focada em facilitar o gerenciamento de propriedades e reservas.',
    features: [
      'Dashboard com visão geral',
      'CRUD completo de reservas',
      'Calendário de disponibilidade',
      'Controle de despesas e receitas',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    link: 'https://github.com/vinniscodes',
  },
  {
    title: 'Previsor de Preços de Pizza',
    description: 'Um aplicativo web que utiliza Machine Learning para prever preços de pizzas com base em suas características, como tamanho e ingredientes.',
    features: [
      'Interface interativa com Streamlit',
      'Modelo de Regressão Linear',
      'Análise de dados com Pandas',
      'Visualização de predições',
    ],
    technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
    link: 'https://github.com/vinniscodes',
  },
  {
    title: 'VinnisCodes - Plataforma de Estudos',
    description: 'Uma plataforma front-end com tema cyberpunk para aumentar a produtividade nos estudos, utilizando o Local Storage para salvar o progresso.',
    features: [
      'CRUD de cursos e notas',
      'Sistema de check-in diário',
      'Gamificação com metas e conquistas',
      'Persistência de dados local',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://github.com/vinniscodes',
  },
];

const skills = [
  { name: 'React', icon: <ReactIcon className="h-8 w-8" /> },
  { name: 'Next.js', icon: <NextjsIcon className="h-8 w-8" /> },
  { name: 'TypeScript', icon: <TypescriptIcon className="h-8 w-8" /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon className="h-8 w-8" /> },
  { name: 'Node.js', icon: <Server className="h-8 w-8" /> },
  { name: 'Git', icon: <GitMerge className="h-8 w-8" /> },
];

export default function Home() {
  return (
    <div className="flex animate-fade-in flex-col">
      <section id="hero" className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Olá, eu sou Vinicius Anderson</h1>
        <p className="text-lg text-primary sm:text-xl">Desenvolvedor Web | Apaixonado por Tecnologia</p>
        <div className="mt-4 flex gap-4">
          <Button asChild size="lg">
            <a href="#contato">Entre em Contato</a>
          </Button>
        </div>
      </section>

      <section id="projetos" className="bg-card py-20">
        <div className="container mx-auto space-y-12">
          <h2 className="text-center text-3xl font-bold text-primary">Projetos em Destaque</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <h4 className="font-semibold">Funcionalidades Principais:</h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver Projeto <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold text-primary">Sobre Mim</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Sou um desenvolvedor web apaixonado por criar soluções inovadoras e eficientes. Com um forte foco em tecnologias modernas como React e Next.js, busco constantemente aprender e aplicar as melhores práticas para construir aplicações robustas e escaláveis. Adoro transformar ideias em código e enfrentar desafios complexos.
        </p>
      </section>

      <section id="habilidades" className="bg-card py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary">Habilidades</h2>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-2">
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold text-primary">Contato</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Gostou do meu trabalho? Vamos conversar!
        </p>
        <div className="mt-6">
           <a href="mailto:v.anderson.dev@gmail.com" className="text-xl text-primary hover:underline">
            v.anderson.dev@gmail.com
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-6">
           <a href="https://github.com/vinniscodes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
          </a>
        </div>
      </section>
    </div>
  );
}
