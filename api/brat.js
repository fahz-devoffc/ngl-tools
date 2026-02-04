export default async function(req,res){
 const {text,color}=req.query;
 const api=`https://api.zenitsu.web.id/api/maker/brat?text=${text}&words=${color}`;
 const r=await fetch(api); const d=await r.text();
 res.setHeader("Access-Control-Allow-Origin","*");
 res.status(200).send(d);
}
