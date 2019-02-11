function timeOn(response){
    $('h1').text(moment().format('h : mm A'))
}

function errorTime(error){
    console.log(error)
}


axios ({
    method: "get",
    url: "http://momentjs.com",
}).then(timeOn).catch(errorTime);
