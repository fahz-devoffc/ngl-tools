export default async function(req,res){
 const {q}=req.query;
 const api=`https://api.zenitsu.web.id/api/search/lyrics?q=${q}`;
 const r=await fetch(api); const d=await r.text();
 res.setHeader("Access-Control-Allow-Origin","*");
 res.status(200).send(d);
}
