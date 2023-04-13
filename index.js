const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item)=>{
    const Text = item
    .querySelector(".menu-text-xontainer.origin span").innerText;
    item.querySelector(".menu-text-container.origin").innerHTML="";
    text.forEach((letter, index)=> {
        item.querySelector(
            ".menu-text-container.origin"
        ).innerHTML += '<span style="--index: ${index}">${letter}</span>';
    })
    const textClone = item
     .querySelector(".menu-text-container.origin")
     .cloneNode(true);
     textClone.classList.remove("origin");
     textClone.classList.add("clone");
     item.appendChild(textClone)
})