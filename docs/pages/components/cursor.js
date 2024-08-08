const outerCircleElement = document.getElementById('outer_circle');
const innerCircleElement = document.getElementById('inner_circle');
const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX; // Fixed to use clientX and clientY for better compatibility
    mouse.y = e.clientY;
});


let currentScale = 0;
let specialHover = false;

const setOuterCircle = () => {
    const speed = 0.17;
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    const translateTransform = `translate(${circle.x - 18}px, ${circle.y - 18}px)`;
    
    const deltaMouseX = mouse.x - previousMouse.x;
    const deltaMouseY = mouse.y - previousMouse.y;
    previousMouse.x = mouse.x;
    previousMouse.y = mouse.y;

    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 10, 150);
    const scale = (mouseVelocity / 150) * 0.5;
    currentScale = Math.abs(scale - currentScale) * speed;

    const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;
    const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
    const rotateTransform = `rotate(${angle}deg)`; // Fixed rotation unit to 'deg'

    outerCircleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
    if(specialHover){
        innerCircleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
    }
};
let previousSpecialHover
const setInnerPoint = () => {
 
    innerCircleElement.style.transform = `translate(${mouse.x-2}px, ${mouse.y-2}px) ${specialHover?'scale(10)':""}`;
     previousSpecialHover=specialHover
};

export const hover = () => {
 
    specialHover = true;
    outerCircleElement.style.display = 'none';

};

export const antihover = () => {
    specialHover = false;
    outerCircleElement.style.display = 'block';

};

const tick = () => {
    setOuterCircle();
    setInnerPoint();
    window.requestAnimationFrame(tick);
};

export default tick;
