function hourGlass(n) {
    //parte do topo
    console.log("#".repeat(n))
    
      //parte de cima da ampulheta
      for(let i = 1; i <= (n-1)/2; i++) {
       
        let stick = "#"
        let out = " ".repeat(i-1)
        let glass = "#"
        let content = "#".repeat(n-i*2-2)
        console.log(stick + out + glass + content + glass + out + stick)
      }
    
      // parte de baixo da ampulheta
      for(let j = 0; j <= ((n-1)/2)-1; j++) {
        let stick = "#"
        let out = " ".repeat((((n-1)/2)-1)-j)
        let glass = "#"
        let content = " ".repeat(j*2)
        console.log(stick + out + glass + content + glass + out + stick)
      }
      
      // 
    // parte de baixo
    console.log("#".repeat(n))
    }
    
    hourGlass(20)