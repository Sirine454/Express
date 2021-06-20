const express=require('express');
const app=express();
const port=5500;
const date=new Date(Date.now());
function available(req,res,next)
{
    const day=date.getDay();
    const hours=date.getHours();
    //console.log(day.hours)//
    if((day>=2 && day<=7)&&(hours>=6 && hours<=23)===false){
        console.log('sorry we are closed ')
        res.send('service not available')
    }
    else{
        next()
    }
}
app.use(available)
app.use(express.static('main'))
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})