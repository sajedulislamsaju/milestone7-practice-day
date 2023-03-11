console.log('here some js file raning place enter the fatcj js function');


function getFatch () {
    fetch()
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err =>{
        console.log(err.messages)
    })
};
const result = getFatch();
console.log(result);
async function getFetch () {
    try{
        const resp = await fetch()
        const data = await resp.json()
        console.log(data)
    }
    catch{   (error) 
    console.log(error)
    }
}