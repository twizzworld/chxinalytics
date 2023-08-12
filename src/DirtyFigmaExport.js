export function Overlay() {

    return (
        <>
        
      
      {/*center text*/}
      
        
        <div>
            
        <div
        class="popups"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          pointerEvents: "none",
          color: "black",
        }}>
            <div class="popups aboutPopup background"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "3px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    textAlign: "center",
                }}>
            <div>
              
              <div class="hheader">CH<span style={{color: "#00D8DA"}}>X</span>I NALYTX</div>
               <div style={{fontFamily: "Helvetica Neue", fontSize: "15px", fontWeight: "200"}}>AI-Powered Chain Analytics Protocol by <span style={{fontFamily:"Anurati"}}>LVLX</span></div>
            </div>
            </div>
        </div>
            
        

            </div>

        
      <footer style={{ position: "absolute", bottom: 20, right: 20, display: "flex", flexDirection: "row"}}>
        <ul style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}>
          <li><a href="mailto:twizzwrrld@gmail.com">CONTACT</a></li>
        </ul>
    
      </footer>
         
      </>
    )
  }


  