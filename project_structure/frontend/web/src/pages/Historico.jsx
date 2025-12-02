import { useEffect, useState } from "react";
import api from "../services/api";
import TicketCard from "../components/TicketCard";

export default function Historico(){
  const [tickets, setTickets] = useState([]);
  useEffect(()=>{ api.get("/tickets").then(r=>setTickets(r.data)).catch(()=>setTickets([])) },[]);
  return (
    <div className="container">
      <div className="card">
        <h2>Histórico de Ocorrências</h2>
        <div style={{marginTop:12, display:"grid", gap:12}}>
          {tickets.length ? tickets.map(t => <TicketCard key={t.id} ticket={t} />) : <div style={{color:"#9fb6d1"}}>Nenhuma ocorrência</div>}
        </div>
      </div>
    </div>
  );
}