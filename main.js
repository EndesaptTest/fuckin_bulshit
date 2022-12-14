//слова цюрюк цюрюк
curr=0;
words=["Свободу","Прыжки","Полеты","Небеса"]
setInterval(()=>{
    document.getElementById("word_anim").innerText=words[curr];
    curr= curr==3? 0 : curr+1;
    document.getElementById("word_anim").classList.add("word_anim");
    
    setTimeout(()=>{
        document.getElementById("word_anim").classList.remove("word_anim");
    },900)
},2000)

//блоки из невидимости прыг скок
function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add("anim_opac_show");
        }

    });
}

let options={
    threshold:[0.5]
};
let observer =new IntersectionObserver(onEntry,options);
let elements=document.querySelectorAll('.anim_opac');
console.log(elements);
for(let el of elements){
    observer.observe(el);
}