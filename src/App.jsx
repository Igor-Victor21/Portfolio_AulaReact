import style from './App.module.css'
import { cards } from './assets/mock/cards'
import { Menu } from './components/menu'
// import img01 from './assets/images/img01.jpg'
import github from './assets/images/github.png'
import instagram from './assets/images/instagram.png'
import linkedin from './assets/images/linkedin.png'

import { useState } from 'react'

function App() {
  const defaultPhoneNumber = "5541999999999" 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleZap = () => {
    const {name, email, message} = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`;

    window.open(urlZAPZAP, "_blank")
  }


  return (
    <>
     <Menu option01='Apresentação' option02='Contato' option03='Mapa'/>
     <main>
      <section id='s1' className={style.s1}>
        {/* <img src={img01} alt="o amor esta no ar" width={200} height={"auto"}/> */}
        {cards.map((item, index) => {
          return(
            <div key={index} className={style.crdzao}>
              <h5>{item.text}</h5>
              <p>{item.maiscoisa}</p>
              <img src={item.img} alt={item.text} width={150} height={"auto"}/>
              <p>{item.cardText}</p>
            </div>
          )
        })}
        <footer className={style.footer}>
        <a target="_blank" href="https://github.com/Igor-Victor21">{<img src={github} alt="github" width={60} height={"auto"}/>}</a>
        <a target="_blank" href="https://www.instagram.com/">{<img src={instagram} alt="instagram" width={60} height={"auto"}/>}</a>
        <a target="_blank" href="https://www.linkedin.com/in/igor-victor-693303336/">{<img src={linkedin} alt="linkedin" width={60} height={"auto"}/>}</a>
        </footer>
      </section>
      <section id='s2' className={style.s2}>
        <div className={style.container}>
        <h2>CONTATO</h2>
        <br />
          <input placeholder='Insira seu nome' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/><br />
          <input placeholder='Insira seu email' type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/><br />
          <input placeholder='Insira mensagem' type='text' id='menssage' name='message' value={formData.message} onChange={handleChange} required></input><br />
          <button onClick={handleZap}>Enviar mensagem</button>
        </div>
      </section>
     </main>
    </>
  )
}

export default App