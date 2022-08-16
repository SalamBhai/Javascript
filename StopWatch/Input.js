const [Button, allInputs] = 
[document.querySelector('#countdown'), document.querySelectorAll('input[type="number"]')];
console.log(allInputs)
allInputs.forEach(element=>
    {
        element.addEventListener('input',function(e)
        {
            localStorage.setItem(e.target.name, element.value);
        })
    })
Button.addEventListener('click',() => location.href = "Activator.html");