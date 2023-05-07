// Constants
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const gravity = 0.5;
const jumpStrength = 10;

// Bird
const bird = {
    x: 50,
    y: canvas.height / 2,
    velocity: 0,
    radius: 20,
    color: '#FF0000',
    jump() {
        this.velocity -= jumpStrength;
    },
    update() {
        this.velocity += gravity;
        this.y += this.velocity;
        this.draw();
    },
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    },
};

// Event listeners
document.addEventListener('keydown', () => {
    bird.jump();
});

// Game loop
function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    bird.update();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
