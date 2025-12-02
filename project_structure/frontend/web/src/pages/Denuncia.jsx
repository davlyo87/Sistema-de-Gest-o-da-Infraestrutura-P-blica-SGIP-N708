import { useState } from "react";
import api from "../services/api";

export default function Denuncia(){
  const [form, setForm] = useState({ title:"", description:"", address:"" });
  const [loading, setLoading] = useState(false);

  async function submit(e){
    e?.preventDefault?.();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("description", form.description);
      fd.append("address", form.address);

      // If your backend expects JSON, change to api.post('/tickets', form)
      await api.post("/tickets", fd, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("Ocorrência criada!");
      setForm({ title:"", description:"", address:"" });
    } catch (err){
      console.error(err);
      alert("Erro ao criar ocorrência");
    } finally { setLoading(false); }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Nova Ocorrência</h2>
        <form onSubmit={submit} style={{marginTop:12}}>
          <input placeholder="Título" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
          <textarea placeholder="Descrição" rows="6" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
          <input placeholder="Endereço (opcional)" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
          <div style={{height:12}} />
          <button type="submit" className="btn">{loading ? "Enviando..." : "Enviar ocorrência"}</button>
        </form>
      </div>
    </div>
  );
}