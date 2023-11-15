body {
   margin: 0;
   padding: 0;
   background: linear-gradient(90deg, #ffffff, #cccccc, #333333);
}

nav ul {
   display: flex;
   justify-content: center;
   list-style-type: none;
   align-items: center;
   padding: 16px 0;
}

nav a {
   text-decoration: none;
   color: black;
   transition: color 0.3s ease;
   padding: 10px 20px;
   font-weight: bold;
   font-style: italic;
}

nav a:hover {
   color: whitesmoke;
}

.container {
   width: 80%;
   margin: 0 auto;
}

.swiper-container {
   width: 100%;
   overflow: hidden;
}

.swiper-wrapper {
   display: flex;
   transition: transform 0.5s ease-in-out;
}

.swiper-slide {
   width: 50%;
   box-sizing: border-box;
   transition: transform 0.5s ease-in-out;
}

.slide-content {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%; /* Mantém a altura da imagem */
}

.swiper-slide img {
   width: 500px;
   height: auto; /* Adicione esta linha para manter a proporção da imagem */
   border: 1px solid #ddd;
   border-radius: 8px;
   margin-bottom: 10px;
}

.selecao1 {
   background-color: rgba(255, 255, 255, 0.3);
   padding: 20px;
   border-radius: 10px;
   box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   gap: 20px;
   align-items: center;
   width: 500px;
   margin: 0 auto;
}

.selecao1 h2 {
   text-decoration: underline;
   text-align: center;
   font-weight: bolder;
   font-size: 3vh;
}
.flex-container {
   display: flex;
   justify-content: space-between;
}

.selecao2 {
   width: 48%; /* Ajuste a largura conforme necessário */
}

.swiper-pagination {
   position: static;
   bottom: 10px;
}
:root{
   --swiper-theme-color:black
}
