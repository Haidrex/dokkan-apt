import React, { useState } from 'react';
import {
  ChakraProvider,
  Container,
  theme,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import Leader from './Components/Leader';
import UnitStats from './Components/UnitStats';
import Links from './Components/Links';
import Passive from './Components/Passive';
import CalcModal from './Components/CalcModal';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [attack, setAttack] = useState(0);
  const [inputs, setInputs] = useState({
    attack: 0,
    defence: 0,
    leader: 0,
    support: 0,
    passive: 0,
    kiMulti: 0,
    links: 37,
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  };

  const calculateAtk = () => {
    let atk = inputs.attack;

    //leader
    atk = Math.floor(atk * (1 + inputs.leader / 100));
    console.log(`Leader: ${atk}`);

    //support
    atk = Math.floor(atk * (1 + inputs.support / 100));
    console.log(`Support: ${atk}`);

    //Links
    atk = Math.floor(atk * (1 + 0.37));
    console.log(`Links: ${atk}`);

    //ki Multiplier
    atk = Math.floor(atk * (inputs.kiMulti / 100));
    console.log(`KiMulti: ${atk}`);

    //passive
    atk = Math.floor(atk * (1 + inputs.passive / 100));
    console.log(`Passive: ${atk}`);

    //super attack
    atk = Math.floor(atk * 6.95);
    console.log(`Supper attack: ${atk}`);

    setAttack(atk);
    onOpen();
  };

  return (
    <ChakraProvider theme={theme}>
      <Container textAlign="center" fontSize="xl" w="50%" mt="20px">
        <UnitStats handleChange={handleChange} />
        <Leader handleChange={handleChange} />
        <Passive handleChange={handleChange} />
        <Links handleChange={handleChange} />
        <Button onClick={calculateAtk}>Calculate</Button>
        <CalcModal isOpen={isOpen} onClose={onClose} attack={attack} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
