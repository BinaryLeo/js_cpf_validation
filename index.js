

function cpfValidate(cpfReceived){
    Object.defineProperty(this, 'cpfDigits',{
      get: function(){
    return  cpfReceived.replace(/\D+/g,'') // only numbers
      }
    });
  } 
  cpfValidate.prototype.validation = function(){
  if(typeof this.cpfDigits === 'undefined') return false;
  if(this.cpfDigits.length !== 11)return false;
  if(this.isSequence()) return false; 
  const partialCpf = this.cpfDigits.slice(0,-2);
  const digitOne = this.newDigit(partialCpf);
  const digitTwo = this.newDigit(partialCpf + digitOne); //10th digit
  const newCpf = partialCpf + digitOne + digitTwo; //11th digit
  return newCpf === this.cpfDigits
  };
  cpfValidate.prototype.newDigit = function(partialCpf){ 
  const cpfArray = Array.from(partialCpf);
  //console.log(cpfArray)
  let regressive = cpfArray.length + 1 ;
  const total = cpfArray.reduce((ac,val)=>{
  
  //console.log(regressive, val, regressive * val);
  
  ac +=(regressive * Number(val))
  regressive --
  return ac;
  },0);
  
  const digit = 11 - (total % 11); // 10th digit 
   return digit > 9 ? '0': String(digit);
  };
  cpfValidate.prototype.isSequence = function(){
   const sequence = this.cpfDigits[0].repeat(this.cpfDigits.length); // does not allow sequences 
   return sequence === this.cpfDigits
  };
  const cpf = new cpfValidate('705.484.450-52');
  //console.log(cpf.validation());
  
  if (cpf.validation()){
  console.log('CPF Valid')
  }else{
    console.log('CPF Invalid')
  }