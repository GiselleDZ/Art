import { useEffect, useState } from "react";
import "./Animations/home.css";

type drop = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  initialLeft: number;
};

type mousePositionType = {
  x: number;
  y: number;
};

const Home = () => {
  const [drops, setDrops] = useState<Array<drop>>([]);
  const [mousePosition, setMousePosition] = useState<mousePositionType>({
    x: 0,
    y: 0,
  });

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
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateDrops = (numDrops: number) => {
    const generatedDrops = [...drops];
    for (let i = 0; i < numDrops; i++) {
      const id = drops.length + i;
      const xPercentage = Math.random() * 100;
      const initialLeft = (xPercentage * window.innerWidth) / 100;

      generatedDrops.push({
        id,
        size: Math.random() * 4 + 4,
        x: xPercentage,
        y: 0,
        delay: Math.random() * 4,
        initialLeft,
      });
    }
    setDrops(generatedDrops);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateDrops(1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [drops]);

  const calculateCurrentY = (drop: drop) => {
    const duration = 10 + drop.delay;
    const elapsedTime = (performance.now() / 1000 - drop.delay) % duration;
    const progress = elapsedTime / duration;

    return window.innerHeight * progress;
  };

  //   const calculateDeltaX = (drop: drop) => {
  //     const currentY = calculateCurrentY(drop);
  //     const distance = mousePosition.x - drop.x + mousePosition.y - currentY;
  //     const radius = 100;

  //     if (distance < radius) {
  //       return (mousePosition.x - drop.initialLeft) / 10;
  //     }
  //     return 0;
  //   };

  return (
    <div className="homeScreenWrapper">
      {drops.map((drop) => {
        // const deltaX = calculateDeltaX(drop);
        // console.log(drop.x, deltaX);
        return (
          <div
            key={drop.id}
            className="waterDrop"
            style={{
              width: drop.size,
              height: drop.size,
              left: `calc(${drop.x}vw - ${10}px)`,
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
