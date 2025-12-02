import { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroCard from "../components/HeroCard";
import TicketCard from "../components/TicketCard";
import MapView from "../components/MapView";
import api from "../services/api";

export default function Home(){
  const [tickets, setTickets] = useState([]);

  useEffect(()=>{
    api.get("/tickets").then(r => setTickets(r.data)).catch(err => {
      console.error(err);
      // fallback empty
      setTickets([]);
    });
  },[]);

  return (
    <div className="container">
      <HeroCard
        title="Relate problemas da sua cidade"
        desc="Registre buracos, postes, vazamentos e muito mais. A prefeitura recebe e acompanha."
        ctaText="Criar ocorrência"
        ctaLink="/new"
      />

      <div style={{height:18}} />

      <div className="row">
        <div className="col" style={{minWidth:320}}>
          <MapView text="Mapa com tickets (clique para abrir)" />
          <div style={{height:18}}/>
          <div className="card">
            <h3 style={{marginBottom:12}}>Últimas ocorrências</h3>
            <div style={{display:"grid", gap:12}}>
              {tickets.length ? tickets.slice(0,6).map(t => <TicketCard key={t.id} ticket={t} />)
                : <div style={{color:"#9fb6d1"}}>Nenhuma ocorrência encontrada.</div>}
            </div>
          </div>
        </div>

        <div style={{width:20}} />

        <div style={{width:360}}>
          <div className="card">
            <h4 style={{marginBottom:12}}>Criar rápido</h4>
            <a className="btn" href="/new">Abrir novo chamado</a>
          </div>

          <div style={{height:12}}/>

          <div className="card" style={{marginTop:12}}>
            <h4 style={{marginBottom:12}}>Estatísticas (exemplo)</h4>
            <div style={{color:"#9fb6d1"}}>Aguardando — 12<br/>Em progresso — 3<br/>Resolvidos — 57</div>
          </div>
        </div>
      </div>
    </div>
  );
}