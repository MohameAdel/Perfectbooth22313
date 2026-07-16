const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

const newCss = `
/* OUNEG-style Service Card */
.service-box-alt {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px; /* Optional, depending on preference */
}

.sb-thumbnail {
  position: relative;
  width: 100%;
  height: 400px;
  margin: 0;
  overflow: hidden;
}

.sb-thumbnail::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%);
  z-index: 1;
  transition: all 0.5s ease;
}

.service-card:hover .sb-thumbnail::before {
  background: linear-gradient(to top, rgba(197, 143, 45, 0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 100%);
}

.sb-img {
  object-fit: cover;
  transition: transform 0.8s ease !important;
  z-index: 0;
}

.service-card:hover .sb-img {
  transform: scale(1.1);
}

.sb-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  text-align: center;
  transition: all 0.5s ease;
  transform: translateY(10px);
}

.service-card:hover .sb-caption {
  transform: translateY(0);
}

.sbt-icon {
  margin: 0 auto 1rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.5s ease;
}

.service-card:hover .sbt-icon {
  background-color: var(--pb-accent);
}

.service-card:hover .sbt-icon svg {
  stroke: #fff;
}

.sb-caption h3 {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  text-transform: capitalize;
}
`;

if (!css.includes('.service-box-alt {')) {
  fs.writeFileSync('src/app/globals.css', css + '\n' + newCss);
  console.log('CSS updated');
} else {
  console.log('CSS already has .service-box-alt');
}
