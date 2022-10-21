function SeuNome({ setName }) {
  return (
    <div>
      <p>Digite o seu Nome:</p>
      <input 
        type="text" 
        placeholder="Qual é o seu Nome?"
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default SeuNome;