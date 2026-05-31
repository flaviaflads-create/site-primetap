import React from 'https://esm.sh/react@18.3.1'

export default function PrimeTapSolutionsWebsite() { return ( <div className="min-h-screen bg-black text-white font-sans"> {/* HERO */} <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-orange-950"> <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center"> <div> <div className="inline-block px-4 py-2 rounded-full border border-orange-500 text-orange-400 text-sm mb-6"> Offshore • Industrial • Hot Tapping Specialists </div>

<h1 className="text-5xl lg:text-7xl font-bold leading-tight">  
          PRIME TAP  
          <span className="block text-orange-500">SOLUTIONS</span>  
        </h1>  <p className="mt-8 text-zinc-300 text-lg leading-relaxed max-w-xl">  
      Soluções especializadas em Hot Tapping, Line Stopping,  
      integridade mecânica e intervenções industriais sem parada.  
      Tecnologia, segurança e experiência offshore em um único parceiro.  
    </p>  

    <div className="mt-10 flex flex-wrap gap-4">  
      <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl">  
        Solicitar Orçamento  
      </button>  

      <button className="border border-zinc-600 hover:border-orange-500 transition px-8 py-4 rounded-2xl font-semibold text-lg">  
        Conheça Nossos Serviços  
      </button>  
    </div>  
  </div>  

  <div className="relative">  
    <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 rounded-full"></div>  

    <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">  
      <img  
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"  
        alt="Industrial"  
        className="rounded-2xl w-full h-[500px] object-cover"  
      />  
    </div>  
  </div>  
</div>

  </section>  {/* SOBRE */}

  <section className="py-24 bg-zinc-950">  
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">  
      <div>  
        <h2 className="text-4xl font-bold mb-8">  
          Engenharia de Intervenção Industrial  
        </h2>  <p className="text-zinc-300 leading-relaxed text-lg mb-6">  
      A Prime Tap Solutions nasceu com o objetivo de entregar  
      intervenções industriais seguras, rápidas e eficientes para  
      os setores offshore, óleo & gás, petroquímica, saneamento  
      e indústria pesada.  
    </p>  

    <p className="text-zinc-400 leading-relaxed">  
      Nossa equipe combina experiência prática em mecânica industrial,  
      operações offshore e Hot Tapping para oferecer soluções de alta  
      confiabilidade em linhas pressurizadas.  
    </p>  
  </div>  

  <div className="grid grid-cols-2 gap-6">  
    {[  
      'Hot Tapping',  
      'Line Stopping',  
      'Integridade Mecânica',  
      'Intervenções Offshore',  
    ].map((item) => (  
      <div  
        key={item}  
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500 transition"  
      >  
        <div className="text-orange-500 text-4xl mb-4">⚙️</div>  
        <h3 className="font-semibold text-xl">{item}</h3>  
      </div>  
    ))}  
  </div>  
</div>

  </section>  {/* SERVIÇOS */}

  <section className="py-24 bg-black">  
    <div className="max-w-7xl mx-auto px-6">  
      <div className="text-center mb-20">  
        <h2 className="text-5xl font-bold mb-6">  
          Nossos Serviços  
        </h2>  
        <p className="text-zinc-400 max-w-3xl mx-auto text-lg">  
          Soluções técnicas para manutenção industrial sem parada,  
          intervenções em linhas pressurizadas e integridade operacional.  
        </p>  
      </div>  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">  
    {[  
      {  
        title: 'Hot Tapping',  
        desc: 'Perfuração em linhas pressurizadas sem interrupção operacional.',  
      },  
      {  
        title: 'Line Stopping',  
        desc: 'Bloqueio temporário de tubulações para manutenção segura.',  
      },  
      {  
        title: 'Inspeção Mecânica',  
        desc: 'Avaliação técnica e integridade de equipamentos industriais.',  
      },  
      {  
        title: 'Manutenção Offshore',  
        desc: 'Suporte técnico especializado para ambientes offshore.',  
      },  
      {  
        title: 'Integridade de Tubulações',  
        desc: 'Análise, reparo e confiabilidade operacional de linhas industriais.',  
      },  
      {  
        title: 'Projetos Especiais',  
        desc: 'Soluções customizadas para operações industriais críticas.',  
      },  
    ].map((service) => (  
      <div  
        key={service.title}  
        className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500 hover:-translate-y-2 transition duration-300"  
      >  
        <div className="text-5xl mb-6 text-orange-500">🔧</div>  
        <h3 className="text-2xl font-bold mb-4">  
          {service.title}  
        </h3>  
        <p className="text-zinc-400 leading-relaxed">  
          {service.desc}  
        </p>  
      </div>  
    ))}  
  </div>  
</div>

  </section>  {/* DIFERENCIAIS */}

  <section className="py-24 bg-zinc-950">  
    <div className="max-w-7xl mx-auto px-6">  
      <div className="grid lg:grid-cols-4 gap-8 text-center">  
        {[  
          ['+10 anos', 'Experiência Industrial'],  
          ['24/7', 'Atendimento Emergencial'],  
          ['Offshore', 'Operações de Alta Criticidade'],  
          ['100%', 'Foco em Segurança'],  
        ].map(([title, subtitle]) => (  
          <div  
            key={title}  
            className="bg-black border border-zinc-800 rounded-3xl p-10"  
          >  
            <div className="text-5xl font-bold text-orange-500 mb-4">  
              {title}  
            </div>  
            <div className="text-zinc-300 text-lg">  
              {subtitle}  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>  {/* CTA */}

  <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-500 text-black">  
    <div className="max-w-5xl mx-auto px-6 text-center">  
      <h2 className="text-5xl font-bold mb-8">  
        Precisa de uma intervenção sem parada?  
      </h2>  <p className="text-xl leading-relaxed mb-10 max-w-3xl mx-auto">  
    Nossa equipe está preparada para atuar com segurança,  
    agilidade e eficiência em operações industriais críticas.  
  </p>  

  <button className="bg-black text-white hover:bg-zinc-900 transition px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl">  
    Falar com a Prime Tap Solutions  
  </button>  
</div>

  </section>  {/* FOOTER */}

  <footer className="bg-black border-t border-zinc-900 py-14">  
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">  
      <div>  
        <h3 className="text-3xl font-bold text-orange-500 mb-4">  
          PRIME TAP SOLUTIONS  
        </h3>  
        <p className="text-zinc-400 leading-relaxed">  
          Soluções em Hot Tapping, Line Stopping,  
          integridade mecânica e manutenção industrial offshore.  
        </p>  
      </div>  <div>  
    <h4 className="font-semibold text-xl mb-4">Serviços</h4>  
    <ul className="space-y-3 text-zinc-400">  
      <li>Hot Tapping</li>  
      <li>Line Stopping</li>  
      <li>Intervenções Industriais</li>  
      <li>Integridade Mecânica</li>  
    </ul>  
  </div>  

  <div>  
    <h4 className="font-semibold text-xl mb-4">Contato</h4>  
    <ul className="space-y-3 text-zinc-400">  
      <li>contato@primetapsolutions.com</li>  
      <li>+55 (11) 99999-9999</li>  
      <li>São Paulo • Brasil</li>  
      <li>Atendimento 24h</li>  
    </ul>  
  </div>  
</div>  

<div className="text-center text-zinc-600 mt-16 text-sm">  
  © 2026 Prime Tap Solutions — Todos os direitos reservados.  
</div>

  </footer>  
</div> ) }
