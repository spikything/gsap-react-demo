import { gsap } from "gsap";
import { useRef, useEffect } from 'react';
import './App.css';

const ItemCount = 20;

function Box({children}) {
  return <div className="box">{children}</div>;
}

function App() {

  const el = useRef();
  const q = gsap.utils.selector(el);
  
  useEffect(() => {
    gsap.fromTo(q(".box"),
    { x: '25vw' },
    {
      x: '75vw',
      stagger: 0.1,
      duration: 1,
      repeat: -1,
      repeatDelay: 0.2,
      ease: "back.inOut(1.7)",
      yoyo: true
    });
  }, [q]);
  
  return (
    <div className="app" ref={el}>

      {
        Array.from({length: ItemCount}, (item, index) =>
          <Box key={index}>{index+1}</Box>
        )
      }

    </div>
  );
}

export default App;
