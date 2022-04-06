# HourGlass-Challenge
A experiência do desafio:
Devido a oportunidade súbita (o que eu agradeço imensamente), tentei aproveitar as 48h do desafio. Dito isto, me diverti bastante e estou muito feliz por ter participado. 

Tempo: https://app.clockify.me/shared/624dc045d68f2526a809fd2e

Ao ver a ampulheta meu primeiro pensamento foi de utilizar um loop que utiliza-se o console.log() para gerar duas pirâmides, uma de cabeça pra baixo, seguido de outra normal. Entretanto, percebi que só isso não adiantaria! Já que a ampulheta é feita de duas hastes (que eu chamei, divertidamente, de ‘sticks’) e do vidro. Além disso, a base e o topo da ampulheta, também deveriam se manter igual ao input (n) que o usuário colocou.

Desta forma, separei o desenho no console em quatro partes: Topo – Parte de cima da ampulheta – parte de baixo da ampulheta – base.

O topo e a base foram relativamente simples, era apenas logar “#” repetidos n vezes para que o topo e a base sejam construídos. 
Para a parte de cima da ampulheta (a parte mais legal do desafio) era preciso pensar em quantas vezes é preciso ser logado o vidro, o espaço vazio da ampulheta e o conteúdo.
Para isso, fiz um for loop onde a variável i começaria no 1 e iria até i = n . Quando fiz isto, percebi que esta parte de cima da ampulheta tinha o tamanho total da ampulheta. Por isto, modifiquei o código para que o loop terminasse quando i fosse menor ou igual que metade do valor de input (n) menos um (i <= (n-1)/2). Em seguida bastou apenas logar no console os símbolos correspondentes baseado no loop. Para as hastes, ou ‘sticks’, estas seriam logadas apenas uma vez por loop; a parte vazia da ampulheta, segundo o desenho referência, só começaria a aparecer no segundo loop. Desta forma, seu desenho foi repetido e logado i-1 vezes; O vidro seria logado apenas uma vez por loop e seria “empurrado” pelo conteúdo da parte vazia; O conteúdo por sua vez, foi o mais complicado. Para ele, era preciso que ele se repetisse 16x no primeiro loop, 14, 12 e assim sucessivamente. Por isso, a expressão que resolveria isto seria repetir o conteúdo n menos duas vezes i menos dois (n-i*2-2). Logo que isto foi feito, a parte de cima estava pronta.

A parte de baixo da ampulheta seguiu a mesma lógica que a parte de cima. Para tanto, um for loop foi realizado onde j começaria com o valor 0, visto que haviam apenas mais 8 linhas para o desenho com n = 20. Portanto, o loop terminaria quando j fosse menos ou igual ao valor de n menos um dividido por 2 ( ((n-1)/2)-1 ). As hastes e vidro seriam logados assim como foram na parte superior; A parte vazia fora da ampulheta foi repetida de maneira similar ao loop de j, porém subtraindo o valor de j ( (((n-1)/2)-1)-j ). O conteúdo, representado por espaço vazio, seria logado baseado em 2 vezes o valor de j.

Esse processo lógico, me tomou duas horas. O restante, tentei realizar os extras do desafio. Havia começado uma função que usaria a função setTimeout para chamar a função hourGlass a cada segundo, mas não consegui terminar a tempo.  


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