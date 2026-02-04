export default async function(req,res){
 const {img}=req.query;
 const api=`https://api.zenitsu.web.id/api/tools/hd?imgUrl=${img}`;
 const r=await fetch(api); const d=await r.text();
 res.setHeader("Access-Control-Allow-Origin","*");
 res.status(200).send(d);
}
