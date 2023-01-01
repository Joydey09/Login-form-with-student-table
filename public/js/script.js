const labels = document.querySelectorAll('.form-control label')  
 labels.forEach(label => {  
   label.innerHTML = label.innerText  
     .split('')  
     .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)  
     .join('')  
     
 })

 const input = document.querySelector(".theme-switcher input");  
 input.addEventListener("change", (e) => {  
  if (e.target.checked) {  
   document.body.setAttribute("data-theme", "dark");  
  } else {  
   document.body.setAttribute("data-theme", "light");  
  }  
 });
 