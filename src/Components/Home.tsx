import { useEffect, useState } from "react";
import "./Animations/home.css";

type drop = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
};

type mousePositionType = {
  x: number;
};

type MovementFactor = {
  x: number;
};

const Home = () => {
  const [drops, setDrops] = useState<Array<drop>>([]);
  const [movementFactors, setMovementFactors] = useState<MovementFactor[]>([]);
  const [mousePosition, setMousePosition] = useState<mousePositionType>({
    x: 0,
  });
  const [prevMousePosition, setPrevMousePosition] = useState<mousePositionType>(
    {
      x: 0,
    }
  );

  useEffect(() => {
    generateDrops(100);
    const handleResize = () => {
      generateDrops(100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX } = event;
      const dx = Math.abs(clientX - mousePosition.x);

      if (dx > 20) {
        setPrevMousePosition({ ...mousePosition });
        setMousePosition({ x: clientX });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

  const generateDrops = (numDrops: number) => {
    const generatedDrops = [...drops];
    const generatedMovementFactors = [...movementFactors];
    for (let i = 0; i < numDrops; i++) {
      const id = drops.length + i;
      generatedDrops.push({
        id,
        size: Math.random() * 4 + 4,
        x: Math.random() * 100,
        y: 0,
        delay: Math.random() * 4,
      });

      generatedMovementFactors.push({
        x: Math.random() * 0.1 + 0.1,
      });
    }
    setDrops(generatedDrops);
    setMovementFactors(generatedMovementFactors);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateDrops(5);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [drops]);

  return (
    <div className="homeScreenWrapper">
      {drops.map((drop) => {
        const deltaX = (mousePosition.x - prevMousePosition.x) / 4;
        return (
          <div
            key={drop.id}
            className="waterDrop"
            style={{
              width: drop.size,
              height: drop.size,

              left: `calc(${drop.x}vw + ${deltaX}px)`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Home;
