import { useEffect, useState } from 'react'
import { Modal } from './modal'
import { PlayerData } from './PlayerData'
import PlayerRender from './PlayerRender'
import './InvisibleFriend.css'
import './utils.css'
import { Nav } from '../../../components/nav/Nav'
export const NumberAsigner = () => {
  // CANTIDAD DE JUGADORES
  const [cantidad, setCantidad] = useState();
  // REGLAS DE JUGADORES
  const [rules, setRules] = useState();

  // REFACTORIZAR
  let [player, setPlayer] = useState([]);
  const [ID, setID] = useState(0);
  const [nombre, setNombre] = useState([]);

  // ESTADO DE DESACTIVACION DE LOGICA
  const [disabled, setDisabled] = useState(false);

  // LOGICA DE EMPAREJAMIENTO

  const [assignments, setAssignments] = useState({});

  // LOGICA PARA ANIMACION DE COLORES
  const [text, setText] = useState("Click para emparejar");
  const [color, setColor] = useState("yellowBg");
  const [stop, setStop] = useState(false);

  // User_Input Asigna cantidad de jugadores.
  const modalForm = (e) => {
    e.preventDefault();
    setCantidad(parseInt(e.target.elements.cantidad.value));
    setRules(parseInt(e.target.elements.rules.value));
    e.target.reset();
  };

  // SETS THE PLAYER DATA

  const playerData = (e) => {
    e.preventDefault();

    const participantArray = e.target.nombre.value.trim().split(/\s+/);
    const newPlayers = participantArray.map((element, index) => {
      return {
        ID: ID + index,
        nombre: element,
      };
    });

    setPlayer((prevPlayers) => [...prevPlayers, ...newPlayers]);
    setNombre((prevNombres) => [...prevNombres, ...participantArray]);
    e.target.reset();
  };
  // LOGICA PARA ANIMACION DE COLORES

  const colors = ["animation1 text-white", "animation2 text-black"];
  let index = 0;

  // simula Carga ==> animacion de emparejamiento
  useEffect(() => {
    const interval = setInterval(() => {
      if (stop) {
        setColor(colors[index]);
        index = (index + 1) % colors.length;
      }
    }, 600);

    return () => clearInterval(interval);
  }, [stop]);

  // inicia emparejamiento y animacion
  const apretameC = () => {
    const shuffledPlayers = [...player].sort(() => Math.random() - 0.5);
    const newAssignments = {};

    shuffledPlayers.forEach((element, index) => {
      let array = Array.from({ length: rules }, (_, i) => i + 1);
      const numberIndex = (index + 1) % array.length;
      const matchIndex = (index + 1) % shuffledPlayers.length;
      const match = shuffledPlayers[matchIndex];
      newAssignments[match.nombre] = array[numberIndex];
    });
    setText("Emparejando...");
    setAssignments(newAssignments);
    setStop(true);

    const time = setTimeout(() => {
      setDisabled(true);
      setStop(false);
    }, 3000);
    return () => clearTimeout(time);
  };

  return (
    <>
      <Nav />
      {/* Modal Cantidad Request + Animation */}
      <div
        className={` modalContainer absolute w-full  transition-all  ease-out ${
          cantidad ? `   -top-full scale-0` : `top-0`
        }`}
      >
        <Modal modalForm={modalForm} />
      </div>

      {/* Formulario de Usar Data */}
      <div className="flex flex-col items-center">
        <div
          className={` w-80   order-1 mt-5 duration-1000${
            cantidad ? ` scale-100` : `hidden scale-0`
          }  ${cantidad == player.length ? `hidden scale-0` : ``}`}
        >
          <PlayerData cantidad={cantidad} playerData={playerData} />
        </div>

        {/* Render para animacion de amigo invisble  */}
        <PlayerRender
          player={player}
          assignments={assignments}
          nombre={nombre}
          disabled={disabled}
          apretameC={apretameC}
          text={text}
          color={color}
        />
      </div>
    </>
  );
};
