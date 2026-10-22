import { useState } from "react";
import "./App.css";

function App() {
  const [projektek] = useState([
    {
      id: 1,
      cim: "projektEgy",
      leiras: "leirasEgyLoremValami",
      technologia: "HTML, CSS, Php, JavaScript, MySql",
    },
    {
      id: 2,
      cim: "projektKetto",
      leiras: "leirasKettoLoremValami",
      technologia: "C#",
    },
    {
      id: 3,
      cim: "projektHarom",
      leiras: "leirasHaromLoremValami",
      technologia: "HTML, CSS",
    },
    {
      id: 4,
      cim: "projektNegy",
      leiras: "leirasNegyLoremValami",
      technologia: "Php, React",
    },
    {
      id: 5,
      cim: "projektOt",
      leiras: "leirasOtLoremValami",
      technologia: "HTML, Php",
    },
    {
      id: 6,
      cim: "projektHat",
      leiras: "leirasHatLoremValami",
      technologia: "HTML, JavaScript",
    },
  ]);

  return (
    <>
      <div className="stars"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      <div className="container">
        <header className="header">
          <tr>
            <td className="cimIras">
              <h1>Szoftverfejleszto es tesztelo</h1>
            </td>
            <td className="phpKep">
              <img src="../pfp.png" alt="Profilkép" />
            </td>
          </tr>
        </header>
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>

        <div className="torzs">
          <p>
            Toth Mor vagyok, most van az 5. evem hogy a szoftverfejlesztest és
            tesztelest tanulom, es ezekkel foglalkozok. Szamos egyeni, vagy
            csapatprojektben reszt vettem, amelyekkel el tudtam sajatitani a
            programozas alapabb nyelveit.
          </p>

          <h2>Nyelvek amikhez ertek:</h2>
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>Python</h3>
          <h3>C#</h3>
          <h3>MySql</h3>
          <h3>PHP</h3>
          <h3>React</h3>

          <br />
          <div className="stars"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>

          <h2 className="eddigimunka">Eddigi munkaim</h2>

          <div className="projektek-lista">
            {projektek.map((projekt) => (
              <div key={projekt.id} className="projekt-kartya">
                <h3>{projekt.cim}</h3>
                <p>{projekt.leiras}</p>
                <small>
                  <strong>Hasznalt nyelvek:</strong> {projekt.technologia}
                </small>
              </div>
            ))}
          </div>

          <div className="stars"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>

          <br />
          <div className="kapcsolatDiv">
            <h2>Kapcsolat</h2>
            <p>Ha szeretnel velem dolgozni itt elerhetsz</p>
            <p>Email: tmor553@gmail.com</p>
            <p>Tel: +36305757779</p>
            <p>Fax: nemtudom hogy ez hogyan mukodik</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
