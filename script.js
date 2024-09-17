function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pega a teg da imagem
    const img = document.querySelector("#profile img")


    //substitui a imagem
    if(html.classList.contains("light")){
        img.setAttribute("src", "./avatar2.png")
        img.setAttribute("alt", "Foto Mateus com oculos escuto")
        } else {
            img.setAttribute("src", "./avatar1.png")
            img.setAttribute("alt", "Foto Mateus sorrindo com um fundo vermelho")
        }

    
}