import React, { useState, useEffect } from 'react';
import pretty from 'pretty';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/github.css';
import './Scrap.css';

const ScrapTree = () => {

  const [url, setUrl] = useState('');
  const [html, setHtml] = useState('');
  const [title, setTitle] = useState('');
  const [meta, setMeta] = useState([]);
  const [link, setLink] = useState([]);
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [scripts, setScripts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = '/JS/jsplumb-tree.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = '/JS/jsplumb-fixbug.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  useEffect(() => {

    if (url === '') {
      return;
    }

    const apiKey = 'a399c08f20be118f1883fb492c687501';
    const apiUrl = `https://api.scraperapi.com/?api_key=${apiKey}&url=${encodeURIComponent(url)}`;
    setLoading(true);

    const intervalId = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 5);
    }, 200);

    fetch(apiUrl)
      .then(response => response.text())
      .then(html => {
        clearInterval(intervalId);
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(html, "text/html");
        setHtml(pretty(htmlDocument.querySelector('html').outerHTML));
        setHead(pretty(htmlDocument.querySelector('head').outerHTML));
        setBody(pretty(htmlDocument.querySelector('body').outerHTML));
        setTitle(pretty(htmlDocument.querySelector('title').textContent));
        setScripts(Array.from(htmlDocument.querySelectorAll('script')).map(script => script.outerHTML));
        setMeta(Array.from(htmlDocument.querySelectorAll('meta')).map(meta => meta.outerHTML));
        setLink(Array.from(htmlDocument.querySelectorAll('link')).map(link => link.outerHTML));
        
        setLoading(false);
        setProgress(100);

        document.getElementById('copyhtml').style.display= 'inline-block';
        document.getElementById('copyhead').style.display= 'inline-block';
        document.getElementById('copymeta').style.display= 'inline-block';
        document.getElementById('copylink').style.display= 'inline-block';
        document.getElementById('copybody').style.display= 'inline-block';
        document.getElementById('copyscript').style.display= 'inline-block';
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setProgress(0);
      });
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(e.target.elements.url.value);
    setProgress(0);
    document.getElementById('htmldummyx').style.display= 'none';
  }

  const copybody = () => {
    navigator.clipboard.writeText(body);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const copyhead = () => {
    navigator.clipboard.writeText(head);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const copyhtml = () => {
    navigator.clipboard.writeText(html);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const copylink = () => {
    navigator.clipboard.writeText(link);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const copymeta = () => {
    navigator.clipboard.writeText(meta);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const copyscript = () => {
    navigator.clipboard.writeText(scripts);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "210px";
  }
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  return (
    <div>

      {copySuccess && (
          <div className="alert alert-success" role="alert">
            <i className="fa-solid fa-check"></i> Scrap copied to clipboard!
          </div>
      )}

    <span id='burgir' style={{ fontSize: '30px', cursor: 'pointer', position: 'fixed', left: '1%', color: 'black' }} onClick={openNav}><i className="fa-solid fa-bars"></i></span>
    <div id="mySidenav" className="sidenav" style={{ zIndex: '5' }}>
      <a href="#0" className="closebtn" onClick={closeNav}>x</a>
      <h5 style={{ color: 'white' }}>Menu</h5>
      <a href='/' id='font-dropdown'>1. Home</a>
      <a href='/FlowChart/FlowChart.html' id='font-dropdown'>2. Diagram Builder</a>
      <br />
      <div className="dropdown-divider"></div>
      <h5 style={{ color: 'white' }}>External Link</h5>
      <a href='https://www.awanpintar.com/imagerecognition/' id='font-dropdown' className="dropdown-item" target="_blank" rel="noopener noreferrer">1. Image Recognition</a>
    </div>

      <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ textAlign: 'left' }}>
          <label id='enter' htmlFor="url" style={{ marginLeft: '20px', marginTop: '50px' }}>Enter a website URL:</label>
          <input style={{ width: '80%', marginTop: '10px', marginLeft: '20px' }} type="text" id="url" name="url" className="form-control" placeholder="https://www.example.com" required />
        </div>
        <button style={{ position: 'relative', left: '0', margin: '10px' }} type="submit" className="btn btn-primary">Scrape</button>
      </form>
      </div>

      <div className='allteks'>
        <p>Refresh Halaman Jika Hasil Scrap/Raw Code Tidak Muncul.</p>
        <p style={{ color: 'black' }}>Note*</p>
        <p style={{ color: 'black' }}>Semakin banyak elements pada web, proses scraping semakin lama dan ada kemungkinan halaman menjadi crash/frezee.</p>
        <p style={{ color: 'black' }}>Pastikan dibawah sudah muncul struktur flow element html, jika tidak muncul, lakukan refresh beberapa kali hingga muncul.</p>
      </div>
      <br />

      <div id="treemain" style={{ zIndex: '1' }}>

        {loading ? (
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress}%` }}>
              Loading...
            </div>
          </div>
        ) : (
          <>
            
          </>
        )}

        <div id="node_0" className="window hidden"
             data-id="0"
             data-parent=""
             data-first-child="1"
             data-next-sibling="">
            <div id='htmldummyx'>
              Title
            </div>
            {loading ? (
              <div>
                Title
              </div>
            ) : (
              <>
                {title}
              </>
            )}
        </div>

        <div id="node_1" className="window hidden"
             data-id="1"
             data-parent="0"
             data-first-child="4"
             data-next-sibling="2">
            All Elements
        </div>

        <div id="node_2" className="window hidden"
             data-id="2"
             data-parent="0"
             data-first-child="5"
             data-next-sibling="3">
            Head
        </div>

        <div id="node_3" className="window hidden"
             data-id="3"
             data-parent="0"
             data-first-child="6"
             data-next-sibling="7">
            Body
        </div>

        <div id="node_9" className="window hidden"
             data-id="9"
             data-parent="2"
             data-first-child="10"
             data-next-sibling="11">
            Meta
        </div>

        <div id="node_11" className="window hidden"
             data-id="11"
             data-parent="2"
             data-first-child="12"
             data-next-sibling="">
            Link
        </div>

        <div id="node_7" className="window hidden"
             data-id="7"
             data-parent="0"
             data-first-child="8"
             data-next-sibling="">
            Script
        </div>
        
        <div id="node_8" className="window hidden"
             data-id="8"
             style={{ width: '120vh' }}
             data-parent="7"
             data-first-child=""
             data-next-sibling="">
            <a href='#' id='copyscript' onClick={copyscript} style={{ textDecoration: 'none' }}><i className="fa-regular fa-clipboard"></i> Copy Code</a>
            <SyntaxHighlighter
              language="html"
              style={materialOceanic}
              wrapLines={true}
              className="resizable-code"
              // onInput={handleResize}
            >
              {scripts.join('\n')}
            </SyntaxHighlighter>
        </div>

        <div id="node_10" className="window hidden"
             data-id="10"
             style={{ width: '92vh' }}
             data-parent="9"
             data-first-child=""
             data-next-sibling="">
            <a href='#' id='copymeta' onClick={copymeta} style={{ textDecoration: 'none' }}><i className="fa-regular fa-clipboard"></i> Copy Code</a>
            <SyntaxHighlighter
              language="html"
              style={materialOceanic}
              wrapLines={true}
              className="metax"
              // onInput={handleResize}
            >
              {meta.join('\n')}
            </SyntaxHighlighter>
        </div>

        <div id="node_12" className="window hidden"
             data-id="12"
             style={{ width: '92vh' }}
             data-parent="9"
             data-first-child=""
             data-next-sibling="">
            <a href='#' id='copylink' onClick={copylink} style={{ textDecoration: 'none' }}><i className="fa-regular fa-clipboard"></i> Copy Code</a>
            <SyntaxHighlighter
              language="html"
              style={materialOceanic}
              wrapLines={true}
              className="metax"
              // onInput={handleResize}
            >
              {link.join('\n')}
            </SyntaxHighlighter>
        </div>

        <div id="node_4" className="window hidden"
             data-id="4"
             style={{ width: '120vh' }}
             data-parent="1"
             data-first-child=""
             data-next-sibling="">
            <a href='#' id='copyhtml' onClick={copyhtml} style={{ textDecoration: 'none' }}><i className="fa-regular fa-clipboard"></i> Copy Code</a>
            <SyntaxHighlighter
              language="html"
              style={materialOceanic}
              wrapLines={true}
              className="resizable-code"
              // onInput={handleResize}
            >
              {html}
            </SyntaxHighlighter>
        </div>

        <div id="node_5" className="window hidden"
             data-id="5"
             style={{ width: '120vh' }}
             data-parent="2"
             data-first-child=""
             data-next-sibling="9">
            <a href='#' id='copyhead' onClick={copyhead} style={{ textDecoration: 'none' }}><i className="fa-regular fa-clipboard"></i> Copy Code</a>
            <SyntaxHighlighter
              language="html"
              style={materialOceanic}
              wrapLines={true}
              className="resizable-code"
              // onInput={handleResize}
            >
              {head}
            </SyntaxHighlighter>
        </div>

        <div id="node_6" className="window hidden"
             data-id="6"
             style={{ width: '120vh' }}
             data-parent="3"
             data-first-child=""
             data-next-sibling="">
            <a href='#' id='copybody' onClick={copybody} style={{ textDecoration: 'none' }}><i className="fa-regular fa-clipboard"></i> Copy Code</a>
            <SyntaxHighlighter
              language="html"
              style={materialOceanic}
              wrapLines={true}
              className="resizable-code"
              // onInput={handleResize}
            >
              {body}
            </SyntaxHighlighter>
        </div>

      </div>

    </div>
  )
}

export default ScrapTree;