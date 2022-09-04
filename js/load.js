export default function loadScript(url, callback) {
    url.forEach((el)=>{
        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = el;
        element.onload = callback;
        document.body.appendChild(element);
        })
    
    }