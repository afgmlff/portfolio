import { IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import './Home.css';

const Home: React.FC = () => {

  useEffect(() => {
    
    const canvas = document.getElementById("canvas") as HTMLCanvasElement | null
  

    var ctx = canvas!.getContext('2d');


    canvas!.width = window.innerWidth;
  canvas!.height = window.innerHeight;


  var dots: any[] = [], // dots
    FPS = 60, 
    x = 200, //qtd de dots
    
    mouse = {
      x: 0,
      y: 0
    };  //mouse


  for (var i = 0; i < x; i++) {
    dots.push({
      x: Math.random() * canvas!.width,
      y: Math.random() * canvas!.height,
      radius: Math.random(),
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25
    });
  }


  // Draw the scene

function draw() {
  ctx!.clearRect(0,0,canvas!.width,canvas!.height);
  
  ctx!.globalCompositeOperation = "lighter";

  var ratioI = canvas!.width * canvas!.height / 12101
  var ratioII = canvas!.width * canvas!.height / 9076
  
  for (var i = 0, x = dots.length; i < x; i++) {
    var s = dots[i];
  
    ctx!.fillStyle = "#fff";
    ctx!.beginPath();
    ctx!.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx!.fill();
    ctx!.fillStyle = 'black';
    ctx!.stroke();
  }
  
  ctx!.beginPath();
  for (var i = 0, x = dots.length; i < x; i++) {
    var starI = dots[i];
    ctx!.moveTo(starI.x,starI.y); 
    if(distance(mouse, starI) < ratioII) ctx!.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = dots.length; j < x; j++) {
      var starII = dots[j];
      if(distance(starI, starII) < ratioI && Math.max(distance(mouse, starI), distance(mouse, starII)) < ratioII) {
        //ctx!.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx!.lineTo(starII.x,starII.y); 
      }
    }
  }
  ctx!.lineWidth = 0.05;
  ctx!.strokeStyle = 'white';
  ctx!.stroke();
}

function distance( point1: { x: any; y: any; }, point2: { x: number; y: number; } ){
  var xs = 0;
  var ys = 0;
 
  xs = point2.x - point1.x;
  xs = xs * xs;
 
  ys = point2.y - point1.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

// Update star locations

function update() {
  for (var i = 0, x = dots.length; i < x; i++) {
    var s = dots[i];
  
    s.x += s.vx / FPS;
    s.y += s.vy / FPS;
    
    if (s.x < 0 || s.x > canvas!.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas!.height) s.vy = -s.vy;
  }
}

canvas!.addEventListener('mousemove', function(e){
  var rect = canvas!.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();

window.addEventListener('resize', handleResize)

function handleResize() {
  canvas!.width = window.innerWidth;
  canvas!.height = window.innerHeight;
  dots = []
  for (var i = 0; i < x; i++) {
    dots.push({
      x: Math.random() * canvas!.width,
      y: Math.random() * canvas!.height,
      radius: Math.random(),
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25
    });
  }

}

  }, []);



  

  return (
    <IonPage>
      <IonContent fullscreen>

        <canvas id="canvas"></canvas>
        <About />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
