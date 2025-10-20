const btn = document.getElementById('buttonText');
btn.addEventListener('click', () => {
text = document.getElementById('inputText').value;
    localStorage.setItem("text", text);
})