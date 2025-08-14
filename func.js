const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
    async function callableFn(clientId, clientSecret) {
        return({"clientId": clientId,
                "clientSecret": clientSecret});
    }
  console.log('\nInside Node Hello World function')
  return callableFn("ac6MTSpLNrXHyTwmv0Tilt7H", "ATOAzW9EOeP7rDMaiD4CXo5UdOa6-9rKpuRXpUn3nO3F415654")
})
