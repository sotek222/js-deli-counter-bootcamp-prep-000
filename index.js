let takeANumber = function(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

let nowServing = function(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!" 
  } else { 
    return `Currently serving ${line.unshift()}`;
  }
}