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
    { name: 'Version Control', icon: <GitMerge /> },
  ];

  const experience = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      description: 'Led the development of scalable web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality products. Mentored junior developers and improved code quality across the team.',
    },
    {
      role: 'Software Engineer',
      company: 'Innovate Co.',
      period: '2018 - 2020',
      description: 'Developed and maintained features for a large-scale e-commerce platform. Worked with TypeScript, GraphQL, and Node.js to build robust and efficient solutions.',
    },
  ];

  const projects = [
    {
      title: 'Project Alpha',
      description: 'A comprehensive project management tool designed to streamline workflows and enhance team collaboration, built with the latest web technologies.',
      image: project1Image,
      link: '#',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Project Beta',
      description: 'An interactive data visualization dashboard that provides real-time insights from complex datasets, helping businesses make informed decisions.',
      image: project2Image,
      link: '#',
      tags: ['TypeScript', 'D3.js', 'Node.js'],
    },
    {
      title: 'Project Gamma',
      description: 'A mobile-first social networking application designed to connect like-minded individuals through shared interests and events.',
      image: project3Image,
      link: '#',
      tags: ['React Native', 'Firebase', 'GraphQL'],
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl space-y-12 p-4 py-8 md:px-6 md:py-12">
      <section id="bio" className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <Avatar className="h-32 w-32 border-4 border-primary">
          {profileImage && <AvatarImage src={profileImage.imageUrl} alt="Profile Picture" />}
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h1 className="font-headline text-4xl font-bold tracking-tight">John Doe</h1>
          <p className="text-xl text-muted-foreground">Full-Stack Developer & UI/UX Enthusiast</p>
          <p className="max-w-2xl">
            Passionate about crafting beautiful, functional, and user-centric web experiences. With over 5 years in the industry, I specialize in the MERN stack and love bringing ideas to life with code.
          </p>
        </div>
      </section>

      <section id="skills" className="space-y-6">
        <h2 className="font-headline text-3xl font-bold">Skills & Technologies</h2>
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
        <h2 className="font-headline text-3xl font-bold">Work Experience</h2>
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
        <h2 className="font-headline text-3xl font-bold">Projects</h2>
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
