
document.querySelectorAll("[data-like]").forEach(b=>b.addEventListener("click",()=>{b.textContent=b.dataset.liked==="1"?"♡ Curtir":"♥ Curtido";b.dataset.liked=b.dataset.liked==="1"?"0":"1"}));
document.querySelectorAll("[data-demo]").forEach(b=>b.addEventListener("click",()=>alert("Demonstração visual: conecte o backend Supabase para habilitar esta função.")));
