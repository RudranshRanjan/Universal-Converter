let input = document.getElementById("inputField");
let output = document.getElementById("outputField");

input.addEventListener("input", () => {
  let fromtype = document.getElementById("from").value;
  let totype = document.getElementById("to").value;
  switch (fromtype) {
    case "second":
        switch(totype){
            case "second":
                output.value=input.value;
                break;
            case "minutes":
                output.value=input.value/60;
                break;
            case "hours":
                output.value=input.value/3600;
                break;
            case "day":
                output.value=input.value/86400;
                break;
            case "week":
                output.value=input.value/604800;
                break;
            case "month":
                output.value=input.value/2629800;
                break;
            case "year":
                output.value=input.value/31557600;
                break;
            default:
                break;
        }
        break;
  
    default:
        break;
  } 
});
