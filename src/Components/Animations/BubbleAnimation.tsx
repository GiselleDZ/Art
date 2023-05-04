import { MouseEvent, useEffect, useState } from "react";
import "./bubbleAnimation.css";

type drop = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  initialLeft: number;
  random: number;
  duration: number;
};

type mousePositionType = {
  x: number;
  y: number;
};

const BubbleAnimation = () => {
  const [drops, setDrops] = useState<Array<drop>>([]);
  const [mousePosition, setMousePosition] = useState<mousePositionType>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const generateDrops = (mouseX?: number) => {
    const numDrops = Math.random() * 100;
    const generatedDrops = [...drops];
    for (let i = 0; i < numDrops; i++) {
      const dropDandom = Math.random();
      generatedDrops.push({
        id: dropDandom + i,
        size: dropDandom * 4 + 4,
        x: mouseX || dropDandom * 100,
        y: 0,
        delay: dropDandom * 40,
        initialLeft: (dropDandom * 100 * window.innerWidth) / 100,
        duration: 10 + dropDandom * 10,
        random: dropDandom,
      });
    }
    setDrops(generatedDrops);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateDrops();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [drops]);

  useEffect(() => {
    if (drops.length > 3000) setDrops(drops.slice(1000, 5000));
  }, [drops]);

  const calculateCurrentY = (drop: drop) => {
    const duration = drop.duration + drop.delay;
    const elapsedTime = (performance.now() / 1000 - drop.delay) % duration;
    const progress = elapsedTime / duration;
    return window.innerHeight * progress;
  };

  return (
    <div
      className="homeScreenWrapper"
      onMouseMove={(e: MouseEvent) => handleMouseMove(e)}
      onClick={() => generateDrops(mousePosition.x)}
    >
      {drops.map((drop) => {
        const distanceToMouseX = mousePosition.x - drop.x;
        const moveLeftOrRight =
          window.innerWidth / 2 >= drop.x
            ? distanceToMouseX - drop.x
            : distanceToMouseX + drop.x;
        const dropPosition = distanceToMouseX < 50 ? moveLeftOrRight : drop.x;
        return (
          <div
            key={drop.id}
            className="waterDrop"
            style={{
              width: drop.size,
              height: drop.size,
              left: `${dropPosition}vw`,
              bottom: `${calculateCurrentY(drop)}vh`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default BubbleAnimation;
