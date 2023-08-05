function main() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const CANVAS_WIDTH = (canvas.widht = 600);
  const CANVAS_HEIGHT = (canvas.height = 300);

  const playerImage = new Image();
  playerImage.src = 'flyingbird.png';

  let playerState = 'idle';
  const spriteWidth = 32;
  const spriteHeight = 38;
  let gameFrame = 0;
  let staggerFrame = 40;
  let movePepita = 0;
  const spriteAnimations = [];
  const animationStates = [
    {
      name: 'idle',
      frames: 4,
    },
    {
      name: 'fly',
      frames: 4,
    },
  ];

  animationStates.forEach((state, index) => {
    let frames = {
      loc: [],
    };

    for (let j = 0; j < state.frames; j++) {
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;
      frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;
  });

  console.log(spriteAnimations);

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = 'gray';
    let position =
      Math.floor(gameFrame / staggerFrame) %
      spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(
      playerImage,
      frameX,
      frameY,
      spriteWidth,
      spriteHeight,
      movePepita,
      50,
      spriteWidth * 2,
      spriteHeight * 2
    );

    gameFrame++;
    if (playerState === 'fly') {
      movePepita = movePepita + 1;
      if (movePepita === 300) {
        movePepita = 0;
      }
    }
    requestAnimationFrame(animate);
  }

  document.getElementById('start').addEventListener('click', () => {
    staggerFrame = 10;
    playerState = 'fly';
  });
  document.getElementById('stop').addEventListener('click', () => {
    staggerFrame = 40;
    playerState = 'idle';
  });
  animate();
}

main();
