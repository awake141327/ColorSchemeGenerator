const getSchemeBtn = document.getElementById('scheme-btn').addEventListener('click', function() {
    const seedColor = document.getElementById('seed-color').value
    const colorScheme = document.getElementById('color-scheme').value
    const colorSchemeContainer = document.getElementById('scheme-container')
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.replace('#','')}&mode=${colorScheme}&count=4`, { method:'GET' })
        .then(res => res.json())
        .then(data => {
            colorSchemeContainer.innerHTML = `
                    <div class="container">
                        <div class="color-background" style="background:${seedColor}"></div>
                        <p class="hex-code">${seedColor.toUpperCase()}</p>
                    </div>
                `
            for (let color of data.colors) {
                colorSchemeContainer.innerHTML += `
                    <div class="container">
                        <div class="color-background" style="background:${color.hex.value}"></div>
                        <p class="hex-code">${color.hex.value}</p>
                    </div>
                `
            }
        })
})