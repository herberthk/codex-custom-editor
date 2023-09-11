export const cssFile = `
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
    background: #09a960;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .App {
    font-family: sans-serif;
    text-align: center;
  }
  
  .slider-container-2 {
    position: relative;
    width: 600px;
    height: 600px;
  }
  
  .slide {
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: inherit;
  }
  
  /* position of indicator container */
  .Indicators {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  
  .Indicator-container {
    padding: 20px;
    cursor: pointer;
  }
  
  .Indicator {
    width: 10px;
    height: 10px;
    background: #fcfcfc;
    border-radius: 50%;
    position: relative;
  }
  
  .Indicator-highlight {
    top: -2px;
    left: -2px;
    background: #09f;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    position: absolute;
  }

/* Next & previous buttons  */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 30%;
  padding: 16px;
  color: white;
  outline: none;
  border: 0;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  background-color: transparent;
  z-index: 20;
  @media only screen and (max-width: 600px){
    top:37%;
    padding: 8px;
 }
}

/* Position the "next button" to the right */
.next {
  right: 10px;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
`;
