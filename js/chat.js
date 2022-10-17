exports.add_text=add_text
exports.add_element=add_element
exports.add_emoji=add_emoji

function add_text(s){
    if(s==""){
        throw new Error("You didn't enter anything!")
    }else{
        var div = document.createElement("div");
        var span  = document.createElement("span");
        span.innerHTML=s;
        span.classList.add("item");
        div.classList.add("right_line");
        var body = document.getElementById("body");
        div.appendChild(span)
        body.appendChild(div);
        //clear input_text
        document.getElementById('input_text').value=''
        document.getElementById('emoji').style.display='none'
    }
}

function add_element(event){
    var reader = new FileReader();
    var type=event.target.files[0].type
    if(type.substring(0,5)=='video'){
        reader.onload = function(event) {
            var v = document.createElement('video');
            var s = document.createElement('source');
            s.src = event.target.result;
            v.setAttribute('controls','')
            v.appendChild(s);
            var div = document.createElement("div");
            v.classList.add("item");
            v.style.maxWidth='400px'
            div.classList.add("right_line");
            div.appendChild(v)
            document.getElementById('body').appendChild(div);
        };
        reader.readAsDataURL(event.target.files[0]);
    }else if(type.substring(0,5)=='image'){
        reader.onload = function(event) {
            var eImg = document.createElement('img');
            eImg.src = event.target.result;
            var div = document.createElement("div");
            eImg.classList.add("item");
            eImg.style.maxWidth='400px'
            eImg.setAttribute('onclick','showBgImg(this)')
            div.classList.add("right_line");
            div.appendChild(eImg)
            document.getElementById('body').appendChild(div);
        };
        reader.readAsDataURL(event.target.files[0]);
    }else throw new Error("Type unknown")
}

function add_emoji(e){
    document.getElementById('input_text').value+=e.native
}
