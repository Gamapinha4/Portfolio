import GoPassIcon from './GO.png'
import BirthdaysIcon from './Birthdays.png'
import BrainBurn from './BrainBurn.png'
import RocketSeat from './Rocketseat.png'
import Evo from './Evo.png'

export type ProjetoProps = {
    logo: string
    projetoName: string,
    img: string,
    text: string,
    tecnologias: string,
    db: string,
    autoral: boolean,
    data: string,
    repositorio: string
    color: string
    new?: boolean
}

export const ListaProjetos = [
    {
    logo: "Evo",
    projetoName: 'Evo - Web Page',
    img: Evo,
    text: 'EVO é um aplicativo intuitivo e fácil de usar, projetado para ajudar a organizar e marcar salas de reuniões de maneira eficiente. Com uma interface minimalista e futurista, EVO facilita a gestão das reservas de salas, garantindo que suas reuniões sejam agendadas sem complicações.',
    tecnologias: 'Next.js',
    db: 'Localhost',
    autoral: true,
    data: '2024',
    repositorio: 'https://github.com/Gamapinha4/Evo',
    new: true,
    color: 'chocolate'
    },
    {
    logo: "Github Blog",
    projetoName: 'GitHub Blog - Web Page',
    img: RocketSeat,
    text: 'O GitHub Blog é um site projetado para destacar questões relacionadas à codificação, geralmente focando em tópicos específicos de desenvolvimento, novas funcionalidades do GitHub, tutoriais, boas práticas de programação, e outros conteúdos relevantes para a comunidade de desenvolvedores. Ele serve como uma plataforma informativa e educativa, ajudando os usuários a aprenderem mais sobre como usar o GitHub de maneira eficaz, além de explorar projetos interessantes, contribuições de código aberto e discussões sobre tendências tecnológicas no mundo da programação.',
    tecnologias: 'Next.js',
    db: 'Localhost',
    autoral: true,
    data: '2024',
    repositorio: 'https://github.com/Gamapinha4/GithubBlog',
    new: true,
    color: '#0047AB'
    },
    {
    logo: "ToDo List",
    projetoName: 'ToDoList - Web Page',
    img: RocketSeat,
    text: 'Este projeto foi desenvolvido durante um curso da Rocketseat na Trilha React Native do Ignite. ToDoList é uma aplicação web intuitivo projetado para ajudar você a organizar e lembrar-se de qualquer tipo de tarefa ou lista de itens, desde listas de compras até projetos pessoais e tarefas do dia a dia.',
    tecnologias: 'Next.js',
    db: 'Localhost',
    autoral: true,
    data: '2024',
    repositorio: 'https://github.com/Gamapinha4/ToDoList',
    new: true,
    color: '#00FF00'
    },
    {
     logo: "GoPass",
     projetoName: 'GoPass - Mobile APP',
     img: GoPassIcon,
     text: 'Este projeto é um aplicativo de gestão de passageiros voltado para empresas de pequeno porte. Com ele, é possível controlar as rotas dos passageiros e manter um gerenciamento eficiente sobre eles.',
     tecnologias: 'React Native',
     db: 'Supabase',
     autoral: true,
     data: '2022 - 2024',
     repositorio: '',
     new: false,
     color: 'yellow'
    },
    {   
     logo: "Birthdays",
     projetoName: 'Birthdays - Mobile APP',
     img: BirthdaysIcon,
     text: 'A ideia desse projeto foi justamente para quem esquece o aniversário, como eu. Desenvolvi um aplicativo onde é possível marcar o aniversário em um calendário. No dia, o aplicativo envia uma notificação para lembrar quem está fazendo aniversário.',
     tecnologias: 'React Native',
     db: 'Local Storage',
     autoral: true,
     data: '2022 - 2023',
     repositorio: 'https://github.com/Gamapinha4/Birthdays',
     new: false,
     color: 'green'
    },
    {
     logo: "BrainBurn",   
     projetoName: 'BrainBurn - Mobile APP',
     img: BrainBurn,
     text: 'BrainBurn é um aplicativo educacional que oferece quizzes personalizados para otimizar o aprendizado. Com modos variados e diferentes níveis de dificuldade, adapta-se às necessidades individuais dos usuários, proporcionando uma experiência dinâmica e eficaz.',
     tecnologias: 'React Native',
     db: 'Supabase',
     autoral: true,
     data: '2022 - 2023',
     repositorio: 'https://github.com/Gamapinha4/Brainburn',
     new: false,
     color: 'lightgreen'
    },
    {
     logo: "IgniteGym",   
     projetoName: 'IgniteGym - Mobile APP',
     img: RocketSeat,
     text: 'Este projeto foi desenvolvido durante o curso de React Native da trilha Ignite, oferecido pela Rocketseat. O aplicativo é destinado a academias, permitindo que os usuários mantenham sua lista de exercícios sempre acessível. Com uma interface intuitiva e fácil de usar, os usuários podem adicionar, editar e acompanhar seus exercícios de forma prática e eficiente.\n Além disso, o aplicativo oferece a possibilidade de registrar o progresso dos treinos, ajudando os usuários a manterem-se motivados e a alcançarem seus objetivos de fitness. Com notificações e lembretes personalizados, nunca foi tão fácil manter-se no caminho certo para uma vida mais saudável.',
     tecnologias: 'React Native',
     db: 'Local Storage',
     autoral: false,
     data: '2022 - 2023',
     repositorio: 'https://github.com/Gamapinha4/IgniteGym',
     new: false,
     color: 'cyan'
    },
    {
     logo: "DailyDiet",      
     projetoName: 'DailyDiet - Mobile APP',
     img: RocketSeat,
     text: 'Este projeto foi desenvolvido durante um curso da Rocketseat na Trilha React Native do Ignite. DailyDiet permite monitorar facilmente seu progresso diário. Você pode marcar os dias em que segue as regras estabelecidas. Com uma interface intuitiva e recursos de acompanhamento detalhados, o mesmo torna simples e acessível o gerenciamento da sua alimentação, ajudando você a alcançar um estilo de vida mais saudável e equilibrado.',
     tecnologias: 'React Native',
     db: 'Local Storage',
     autoral: false,
     data: '2022 - 2023',
     repositorio: 'https://github.com/Gamapinha4/IgniteGym',
     new: false,
     color: 'lightblue'
    },
    {
     logo: "IgniteTeams",   
     projetoName: 'IgniteTeams - Mobile APP',
     img: RocketSeat,
     text: 'Este projeto foi desenvolvido durante um curso da Rocketseat na Trilha React Native do Ignite. IgniteTeams é um inovador projeto desenvolvido para conectar grupos de amigos apaixonados por esportes, oferecendo a possibilidade de criar, editar e excluir apostas sobre placares de jogos em tempo real.',
     tecnologias: 'React Native',
     db: 'Firebase',
     autoral: false,
     data: '2022 - 2023',
     repositorio: 'https://github.com/Gamapinha4/IgniteTeams',
     new: false,
     color: 'orange'
    },
    {
     logo: "ToDo",      
     projetoName: 'ToDo - Mobile APP',
     img: RocketSeat,
     text: 'Este projeto foi desenvolvido durante um curso da Rocketseat na Trilha React Native do Ignite. ToDo é um aplicativo intuitivo projetado para ajudar você a organizar e lembrar-se de qualquer tipo de tarefa ou lista de itens, desde listas de compras até projetos pessoais e tarefas do dia a dia.',
     tecnologias: 'React Native',
     db: 'Local Storage',
     autoral: false,
     data: '2022 - 2023',
     repositorio: 'https://github.com/Gamapinha4/ToDo',
     new: false,
     color: 'pink'
    },
    {
     logo: "ImHere",      
     projetoName: 'ImHere - Mobile APP',
     img: RocketSeat,
     text: 'Este projeto foi desenvolvido durante um curso da Rocketseat na Trilha React Native do Ignite. ImHere é uma aplicação desenvolvida para facilitar o controle de presença em diversos tipos de eventos, como aniversários, reuniões, conferências e muito mais.',
     tecnologias: 'React Native',
     db: 'Local Storage',
     autoral: false,
     data: '2022 - 2023',
     repositorio: 'https://github.com/Gamapinha4/ToDo',
     new: false,
     color: 'white'
    },
]