import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import './App.css';

function Home() {
  const iframeRef = useRef(null);

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    console.log(container);
}, []);

  const scrollToScrape = () => {
    const myDiv = document.getElementById('webscrape');
    myDiv.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFlowChart = () => {
    const myDiv = document.getElementById('flowchart');
    myDiv.scrollIntoView({ behavior: 'smooth' });
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "210px";
  }
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  const hideburgir = () => {
    var iframe = document.getElementById("scrapsection");
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var burgirSpan = iframeDoc.getElementById('burgir');
    if (burgirSpan) {
      burgirSpan.style.display = 'none';
    }
    var enter = iframeDoc.getElementById('enter');
    if (enter) {
      enter.style.marginTop = '20px';
    }
  }
  
  useEffect(() => {
    var hideButton = document.getElementById('hidee1');
    hideButton.click();
  }, []);

  const hideback = () => {
    var iframe = document.getElementById("diagramsection");
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var backSpan = iframeDoc.getElementById('back');
    if (backSpan) {
      backSpan.style.display = 'none';
    } else {
      console.log('Cannot find element with id "back" inside iframe');
      return;
    }
  }

  useEffect(() => {
    var hideButton2 = document.getElementById('hidee2');
    hideButton2.click();
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const checkbox = document.getElementById("myCheckbox");

    function handleCheckboxChange() {
      setIsChecked(checkbox.checked);
    }

    checkbox.addEventListener('change', handleCheckboxChange);

    return () => {
      checkbox.removeEventListener('change', handleCheckboxChange);
    };
  }, []);

  return (
    <>
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: {
                enable: true
              },
              fpsLimit: 120,
              particles: {
                groups: {
                  z5000: {
                    number: {
                      value: 70
                    },
                    zIndex: {
                      value: 5000
                    }
                  },
                  z7500: {
                    number: {
                      value: 30
                    },
                    zIndex: {
                      value: 75
                    }
                  },
                  z2500: {
                    number: {
                      value: 50
                    },
                    zIndex: {
                      value: 25
                    }
                  },
                  z1000: {
                    number: {
                      value: 40
                    },
                    zIndex: {
                      value: 10
                    }
                  }
                },
                number: {
                  value: 200,
                  density: {
                    enable: false,
                    value_area: 800
                  }
                },
                color: {
                  value: "#fff",
                  animation: {
                    enable: false,
                    speed: 20,
                    sync: true
                  }
                },
                shape: {
                  type: "circle"
                },
                opacity: {
                  value: 1,
                  random: false,
                  animation: {
                    enable: false,
                    speed: 3,
                    minimumValue: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3
                },
                links: {
                  enable: false,
                  distance: 100,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  angle: {
                    value: 10,
                    offset: 0
                  },
                  enable: true,
                  speed: 5,
                  direction: "right",
                  random: false,
                  straight: true,
                  outModes: {
                    default: "out"
                  },
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                },
                zIndex: {
                  value: 5,
                  opacityRate: 0.5
                }
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onHover: {
                    enable: false,
                    mode: "repulse"
                  },
                  onClick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    links: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8
                  },
                  repulse: {
                    distance: 200
                  },
                  push: {
                    quantity: 4,
                    groups: ["z5000", "z7500", "z2500", "z1000"]
                  },
                  remove: {
                    quantity: 2
                  }
                }
              },
              detectRetina: true,
              background: {
                color: "#141526",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover"
              },
              emitters: {
                position: {
                  y: 55,
                  x: -30
                },
                rate: {
                  delay: 7,
                  quantity: 1
                },
                size: {
                  width: 0,
                  height: 0
                },
                particles: {
                  shape: {
                    type: "images",
                    options: {
                      images: [
                        {
                          src: "https://particles.js.org/images/amongus_blue.png",
                          width: 205,
                          height: 267
                        },
                        {
                          src: "https://particles.js.org/images/amongus_cyan.png",
                          width: 207,
                          height: 265
                        },
                        {
                          src: "https://particles.js.org/images/amongus_green.png",
                          width: 204,
                          height: 266
                        },
                        {
                          src: "https://particles.js.org/images/amongus_lime.png",
                          width: 206,
                          height: 267
                        },
                        {
                          src: "https://particles.js.org/images/amongus_orange.png",
                          width: 205,
                          height: 265
                        },
                        {
                          src: "https://particles.js.org/images/amongus_pink.png",
                          width: 205,
                          height: 265
                        },
                        {
                          src: "https://particles.js.org/images/amongus_red.png",
                          width: 204,
                          height: 267
                        },
                        {
                          src: "https://particles.js.org/images/amongus_white.png",
                          width: 205,
                          height: 267
                        },
                        {
                          src: "https://images.fineartamerica.com/images/artworkimages/medium/3/103-cute-among-us-png-among-us-sublimation-instant-download-among-us-pdf-png-dxf-eps-silhouette-c-tu-hoang-transparent.png",
                          width: 205,
                          height: 265
                        },
                        {
                          src: "https://images.fineartamerica.com/images/artworkimages/medium/3/3-cute-among-us-svg-instant-download-among-us-pdf-png-dxf-eps-silhouette-cut-files-cric-tu-hoang-transparent.png",
                          width: 205,
                          height: 265
                        }
                      ]
                    }
                  },
                  size: {
                    value: 40
                  },
                  move: {
                    speed: 10,
                    outModes: {
                      default: "destroy",
                      left: "none"
                    },
                    straight: true
                  },
                  zIndex: {
                    value: 0
                  },
                  rotate: {
                    value: {
                      min: 0,
                      max: 360
                    },
                    animation: {
                      enable: true,
                      speed: 10,
                      sync: true
                    }
                  }
                }
              }
            }}
        />
    <span style={{ fontSize: '30px', cursor: 'pointer', position: 'fixed', left: '1%', color: '#E7E9EB' }} onClick={openNav}><i className="fa-solid fa-bars"></i></span>
    <div id="mySidenav" className="sidenav" style={{ position: 'fixed', zIndex: '7' }}>
      <a className="closebtn" onClick={closeNav} style={{ cursor: 'pointer' }}>x</a>
      <h5 style={{ color: 'white' }}>Menu</h5>
      <a href='#1' id='font-dropdown' onClick={scrollToScrape}>1. Web Scrape</a>
      <a href='#2' id='font-dropdown' onClick={scrollToFlowChart}>2. Diagram Builder</a>
      <br />
      <div className="dropdown-divider"></div>
      <h5 style={{ color: 'white' }}>External Link</h5>
      <a href='https://www.awanpintar.com/imagerecognition/' id='font-dropdown' className="dropdown-item" target="_blank" rel="noopener noreferrer">1. Image Recognition</a>
      <br />
      <h5 style={{ color: 'white' }}>Background Only</h5>
      <label className="switch">
        <input type="checkbox" id="myCheckbox"/>
        <span className="slider round"></span>
      </label>
    </div>

    <div className="App" id='firstmainbody' style={{ paddingLeft: '15%', paddingRight: '10%', display: isChecked ? 'none' : 'block' }}>
        <div className='mainbody' style={{ background: '#fff', position: 'relative' }}>
          <div id='webscrape'>

            <h1 className='font' style={{ textAlign: 'left', marginLeft: '2.5%', position: 'relative' }}>Web Scrape</h1>
            <button style={{ display: 'none' }} id='hidee1' onClick={() => setTimeout(hideburgir, 1000)}></button>
            <a href='/tree' className='font' style={{ textDecoration: 'none' }}>See in Fullscreen.</a>
            <br />
            <iframe 
              id='scrapsection'
              title='Web Scrap'
              style={{ width: "95%", height: "100vh", marginTop: "20px", border: '1px solid #E7E9EB', borderRadius: '10px' }} 
              ref={iframeRef} src="/tree"
              > 
            </iframe>
          </div>

          <br />

          <div id='flowchart'>

            <h1 className='font' style={{ textAlign: 'left', marginLeft: '2.5%', position: 'relative' }}>Diagram Builder</h1>
            <button style={{ display: 'none' }} id='hidee2' onClick={() => setTimeout(hideback, 1000)}>TEST</button>
            <a href='/FlowChart/FlowChart.html' className='font' style={{ textDecoration: 'none' }}>See in Fullscreen.</a>
            <br />
            <iframe 
              id='diagramsection'
              title='Diagram Builder'
              style={{ width: "95%", height: "100vh", marginTop: "20px", marginBottom: '20px', border: '1px solid #E7E9EB', borderRadius: '10px' }} 
              ref={iframeRef} src="/FlowChart/FlowChart.html"
              > 
            </iframe>
            <br />
            <div className='footer' style={{ background: '#170142', height: '70px', padding: '20px' }}>
              <p style={{ color: 'white' }}>copyright  <i className="fa-regular fa-copyright"></i> 2023 Ikhbal Tri Adira</p>
            </div>

          </div>
        </div>
    </div>
    </>
  );
}

export default Home;
