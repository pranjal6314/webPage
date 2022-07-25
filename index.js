var passwordconstrains = {
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    capalphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    symbols: ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']',';',':','<','>',',','.','/','?','"','|'],
  }

  var inputpass = document.querySelector('.inputpass')
  var inputtext = inputpass.value
  var faeye = document.querySelector('.fa-eye')
  let circle1=document.getElementsByClassName('circle');
  //
  faeye.addEventListener('mouseover', (e) => {
    inputpass.type = 'text'

  })
  inputpass.addEventListener('mouseover', (e) => {
  
    circle1.style.display="none";

  })
  faeye.addEventListener('mouseout', (e) => {
    inputpass.type = 'password'
  })
  //
  inputpass.addEventListener('input', (e) => {
    var passstrenghttext = document.querySelector('.passstrenght-text')
    var inputtext = inputpass.value
    var string = inputtext.split('')
    var bar = document.querySelector('.strenght')
    var x = string.length

    //
    if (x < 8) {
      bar.setAttribute('style', `width:${2 * x}%;`)
      console.log('please enter password between 8 to 20 character')
    }
    //
    else if (x > 8 && x < 20) {
      //
      var checknum = string.find(num)
      function num(num) {
        for (var v = 0; v <= passwordconstrains.numbers.length; v++) {
          var tepnum = passwordconstrains.numbers
          if (num == tepnum[v]) {
            return num == tepnum[v]
          }
        }
      }
      //
      var checksymbol = string.find(symbol)
      function symbol(symbol) {
        for (var v = 0; v <= passwordconstrains.symbols.length; v++) {
          var tepnum = passwordconstrains.symbols
          if (symbol == tepnum[v]) {
            return symbol == tepnum[v]
          }
        }
      }
      //
      var checkcalalpha = string.find(capalpha)
      function capalpha(capalpha) {
        for (var v = 0; v <= passwordconstrains.capalphabet.length; v++) {
          var tepnum = passwordconstrains.capalphabet
          if (capalpha == tepnum[v]) {
            return capalpha == tepnum[v]
          }
        }
      }
      //
      if (
        checksymbol != null &&
        checknum != null &&
        checkcalalpha != null
      ) {
        bar.setAttribute(
          'style',
          `width:100%; background-color: rgb(76, 233, 9);`,
        )
        passstrenghttext.innerHTML = 'Password Strength : &#129321;'
      }
      //
      else if (
        checknum == null &&
        checksymbol != null &&
        checkcalalpha != null
      ) {
        bar.setAttribute('style', `width:70%; background-color:yellow`)
        passstrenghttext.innerHTML = 'Password Strength:    &#128522;'
      }
      //
      else if (
        checknum != null &&
        checksymbol == null &&
        checkcalalpha != null
      ) {
        bar.setAttribute('style', `width:70%; background-color:yellow`)
        passstrenghttext.innerHTML = 'Password Strength:    &#128522;'
      }
      //
      else if (
        checknum != null &&
        checksymbol != null &&
        checkcalalpha == null
      ) {
        bar.setAttribute('style', `width:70%; background-color:yellow`)
        passstrenghttext.innerHTML = 'Password Strength:    &#128522;'
      }
      //
      else if (
        checknum != null &&
        checksymbol == null &&
        checkcalalpha == null
      ) {
        bar.setAttribute('style', `width:50%; background-color:red`)
        passstrenghttext.innerHTML = 'Password Strength: &#128524;'
      }
      //
      else if (
        checknum == null &&
        checksymbol != null &&
        checkcalalpha == null
      ) {
        bar.setAttribute('style', `width:50%; background-color:red`)
        passstrenghttext.innerHTML = 'Password Strength: &#128524;'
      }
      //
      else if (
        checknum == null &&
        checksymbol == null &&
        checkcalalpha != null
      ) {
        bar.setAttribute('style', `width:50%; background-color:red`)
        passstrenghttext.innerHTML = 'Password Strength: &#128524;'
      }
      //
      else if (
        checknum == null &&
        checksymbol == null &&
        checkcalalpha == null
      ) {
        bar.setAttribute('style', `width:30%;`)
        passstrenghttext.innerHTML = 'Password Strength: &#128577;'
      }
    }
    //
    else if (x > 20) {
      alert('size is more')
    }
  })  



  //cruser
  let circle=document.querySelector('.circle');
  const moveCircle=(e)=>{
    circle.style.left=`${e.pageX}px`;
    circle.style.top=`${e.pageY}px`;
  }
  const addPulse=()=>{
    circle.classList.toggle('active');
  }
  window.addEventListener('mousemove',moveCircle);
  window.addEventListener('mousedown',addPulse);
  window.addEventListener('mouseup',addPulse);
