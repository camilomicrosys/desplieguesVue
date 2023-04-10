
//aca creamos las funciones y ya se pueden exportan en los compoentes
module.exports.getAnime= function(limit){
   
   return fetch('https://kitsu.io/api/edge/anime?limit='+limit).then((res)=>res.json())
}