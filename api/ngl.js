export default async function(req,res){
 const {username,text,amount}=req.query;
 const api=`https://api.zenitsu.web.id/api/tools/nglspam?username=${username}&text=${text}&amount=${amount}`;
 const r=await fetch(api); const d=await r.text();
 res.setHeader("Access-Control-Allow-Origin","*");
 res.status(200).send(d);
}
