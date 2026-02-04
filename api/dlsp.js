export default async function(req,res){
 const {url}=req.query;
 const api=`https://api.zenitsu.web.id/api/download/spotify?url=${url}`;
 const r=await fetch(api); const d=await r.text();
 res.setHeader("Access-Control-Allow-Origin","*");
 res.status(200).send(d);
}
