function inital(name){
    let intial = "";
    for (let i=0; i< name.length;i++){
        if (name.charAt(i) === " "){
            intial = name.charAt(0)+"."+name.charAt(i+1)+".";
        }            
    }
    return intial;
}

function onlyInitals(names){
    let initals =names.map(inital);
    return initals;
}

console.log(onlyInitals(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]) ,"A.K.", "L.H.", "Y.M.");