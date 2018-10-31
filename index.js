let takeANumber = function(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

let nowServing = function(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!" 
  } else { 
    return `Currently serving ${line.shift()}.`;
  }
}

let currentLine = function(line){
  if(line.length === 0){
    return "The line is currently empty.";
  } else {
    
    // "The line is currently: 1. Ada, 2. Grace"
  }
}