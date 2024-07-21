'use client'

import Link from "next/link"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { habilidadesList } from "@/lib/habilidadesList"
import { useRef, useState } from "react"
import { ListaProjetos } from "@/projetosList/ListaProjetos"
import toast from "react-hot-toast"
import axios from 'axios'

import Image from "next/image"



export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  function handleClick(item: any) {
    if (typeof window !== "undefined") {
      window.open(item, '_blank');
    }
  }

  const message = {
    embeds: [
      {
        title: 'Nova mensagem !',
        description: 'Você recebeu uma nova mensagem.',
        color: 15105570,
        fields: [
          {
            name: 'Nome',
            value: name,
            inline: true,
          },
          {
            name: 'Email',
            value: email,
            inline: true,
          },
          {
            name: 'Assunto',
            value: assunto,
            inline: false,
          },
        ],
      },
    ],
  };

   const handleChangeName = (event : any) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event : any) => {
    setEmail(event.target.value);
  };

  const handleChangeAssunto = (event : any) => {
    setAssunto(event.target.value);
  };

  const handleClickSubmit = async () => {
    const url = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (!url) {
      return null;
    }

    try {
      if (name.trim().length === 0) {
        toast.error("Campo nome não foi informado!");
        return null;
      }

      if (email.trim().length === 0 || !email.includes('@')) {
        toast.error("Email está vazio ou incorreto!");
        return null;
      }

      if (assunto.trim().length === 0) {
        toast.error("Você precisa informar o assunto!");
        return null;
      }

      await axios.post(url, message);

      toast.success('Opá recebi seu contato, logo você receberá uma resposta');

      setName('')
      setAssunto('')
      setEmail('')
    } catch (error) {
      toast.error('Erro ao enviar a mensagem, tente novamente.');
      console.error(error);
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <UserIcon className="h-6 w-6" />
          <span className="sr-only">Gabriel Palmieri</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={() => scrollToSection(aboutRef)}>
            Sobre
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={() => scrollToSection(projectsRef)}>
            Projetos
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={() => scrollToSection(skillsRef)}>
            Habilidades
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={() => scrollToSection(contactRef)}>
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 flex justify-center" ref={aboutRef}>
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gabriel Palmieri</h1>
              <p className="text-muted-foreground md:text-xl">
                Desenvolvedor e Estudante de Engenharia da Computação na Universidade Norte do Paraná.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  onClick={() => handleClick('https://github.com/gamapinha4')}
                >
                  <div className="mr-2">
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  GitHub
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  onClick={() => handleClick('https://linkedin.com/in/gabrielpalmieri')}
                >
                  <div className="mr-2">
                    <LinkedinIcon className="h-5 w-5" />
                  </div>
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Sobre mim</div>
              <p className="text-muted-foreground md:text-xl">
              Olá! Eu sou Gabriel Palmieri, um desenvolvedor FullStack dedicado a criar soluções inovadoras e escaláveis. Tenho experiência com diversas tecnologias, como React, Node.js, e bancos de dados como Supabase e Firebase. Estou sempre em busca de novos desafios para aprimorar minhas habilidades. Abaixo, você pode conhecer alguns dos meus projetos e competências. Fique à vontade para entrar em contato comigo!
              </p>
              <a
                href="/GABRIEL PALMIERI CURRICULO.pdf"
                download
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Baixar CV
              </a>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center" ref={projectsRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[white]">Meus Projetos</div> 
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projetos Destacados</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira alguns dos meus principais projetos e veja o que posso fazer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-16">
            {ListaProjetos.map((item) => {
              return(
                    <div key={item.projetoName} className="group rounded-lg shadow-lg overflow-hidden transition-all hover:scale-105">
                      <Image
                        src={item.img}
                        width="550"
                        height="310"
                        alt={item.projetoName}
                        className="w-full h-auto object-cover object-center"
                      />
                      <div className="p-4 bg-background">
                        <h3 className="text-lg font-bold">{item.projetoName}</h3>
                        <p className="text-muted-foreground">
                          {item.text}
                        </p>
                        <p className="text-muted-foreground mt-4">
                          Para construir esse aplicativo utilizei <span className="text-[#181c24]">{item.tecnologias}</span> junto com o <span className="text-[#181c24]">{item.db}</span> sendo o banco de dados.
                        </p>

                        <p className="text-muted-foreground flex flex-1 mt-10">
                          {item.autoral ? 'Projeto autoral' : 'Projeto público'} / {item.data}
                        </p>

                        <a className="text-muted-foreground cursor-pointer flex flex-1 mt-12 text-center" onClick={() => handleClick(item.repositorio)}>
                          {item.repositorio != '' && 'Esse projeto possui um repositorio público no GitHub'}
                        </a>
                      </div>
                    </div>
              )
            })}
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 flex justify-center" ref={skillsRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Habilidades</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Minhas Habilidades</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça as principais tecnologias e ferramentas que domino.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 mt-16">
              {habilidadesList.map((item) => {
                const [hoveredItem, setHoveredItem] = useState('');

                return (
                  <div
                    key={item.name}
                    className={`group hover:shadow-md rounded-lg p-6 relative flex justify-center items-center text-1.5em flex-col rounded-16 text-default-color cursor-pointer overflow-hidden text-white uppercase font-semibold transition-all ease duration-300 bg-${item.color}`}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem('')}
                    style={{ boxShadow: `0rem 4rem 10rem ${hoveredItem === item.name ? item.color : 'transparent'}` }}
                  >
                    <svg
                      viewBox="0 0 128 128"
                      style={{
                        fill: hoveredItem === item.name ? item.color : '#414141',
                        transform: hoveredItem === item.name ? 'translateY(-3rem) scale(0.5)' : 'none',
                        transition: 'all 250ms ease',
                      }}
                    >
                      <item.icon />
                    </svg>
                    <div className="absolute opacity-0 transition-opacity duration-800 ease-out group-hover:opacity-100 mt-60 sm:mt-36 md:mt-20 text-center text-white">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-sm">{item.anos} anos de prática</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center" ref={contactRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contato</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fale Comigo</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Preencha o formulário abaixo para entrar em contato.
                </p>
              </div>
              <form className="mx-auto w-full max-w-md space-y-4">
                <Input value={name} type="text" placeholder="Nome" className="w-full" onChange={handleChangeName} />
                <Input value={email} type="email" placeholder="E-mail" className="w-full" onChange={handleChangeEmail}/>
                <Textarea value={assunto} placeholder="Mensagem" className="w-full" onChange={handleChangeAssunto}/>
              </form>
              <Button className="mx-auto w-full max-w-md space-y-4" onClick={() => handleClickSubmit()}>
                  Enviar
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted text-muted-foreground">
        <p className="text-xs">&copy; 2024 Gabriel Palmieri.</p>
      </footer>
    </div>
  )
}

function CodepenIcon({props} : any) {
  return (
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon({props} : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function GitGraphIcon({props} : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function GithubIcon({props} : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon({props} : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"

    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function UserIcon({props} : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function XIcon({props} : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
