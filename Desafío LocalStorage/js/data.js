document.addEventListener('DOMContentLoaded', (e) => {
    const showText = localStorage.getItem("text");
    document.getElementById('data').textContent = showText;
})  