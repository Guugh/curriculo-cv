import { useState } from 'react'
import reactLogo from './assets/react.svg'
import perfil from './assets/perfil.jpeg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={perfil} className="base" width="170" height="179" alt="" />
         
        </div>
        <div>
          <h1>Gustavo Bettoi Cavalcanti</h1>
          
        </div>
        
          
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          
          <h2>Descrição</h2>
          <p>Olá! Sou técnico em informática formado pelo IFSP com experiência em desenvolvimento
            de software. Minhas principais habilidades são ensino e desenvolvimento back-end com
            python e typescript.
          </p>
          
        </div>
        <div id="social">
          
          <h2>Meu contato</h2>
          <p>Entre em contato para mais informações</p>
          <ul>
            <li>
              <a href="https://github.com/Guugh" target="_blank">
                
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gustavo-bettoi-cavalcanti-7985922aa/?skipRedirect=true" target="_blank">
                
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section id="next-steps">
        <div id="docs">
          
          <h2>Projetos e Experiências</h2>
          
          <h3>Codex</h3>
          <p>O Codex é uma plataforma criada com a finalidade de ensinar programação competitiva, uma modalidade onde os participantes competem para resolver o maior número de problemas em um determinado período de tempo. Eu atuo como lider da equipe, responsável pela criação de conteúdos, elicitação de requisitos e escolha do rumo tomado pelo projeto. Nosso objetivo inicial é promover essa modalidade competitiva no IFSP - Campus Bragança Paulista, com previsão de fornecimento de aulas, mentorias e apoio personalizado. A plataforma conta com funcionalidades como trilhas de aprendizagem, um sistema de submissão e julgamento das questões (padrão semelhante em plataformas como LeetCode e BeeCrowd) e uma aba para realizarmos competições de maneira síncrona.
Esse projeto gera grande evolução nas minhas habilidades de oratória, educação aplicada à computação e programação.</p>
          <p><br></br>2024 - 2025</p>
          <h3>DinHero</h3>
           <p>O DinHero é uma plataforma inovadora de Fintech e EdTech que visa democratizar a educação financeira através de uma experiência de aprendizado altamente personalizada. O projeto integra gestão bancária e serviços de mentoria, focado em alta usabilidade e engajamento do usuário via gamificação.</p>
          <p><br></br>2025 - atualmente</p>
          
        </div>
        <div id="social">
          
          <h2>Educação</h2>
          <h3>Curso técnico em informática - IFSP Campus Bragança Paulista</h3>
          <p>2023 - 2025</p>
          <h3>Tecnologia em análise e desenvolvimento de sistemas - IFSP Campus Bragança Paulista</h3>
          <p>2026 - atualmente</p>
          
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
