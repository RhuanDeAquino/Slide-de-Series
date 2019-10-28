var list = [
    {
        img: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/03/legiao_EJ_xTukGoFg1l6vmy2eL7qcDtHzXSPIjQWROYa38h5.jpg.jpeg' ,
        h2: 'Desventuras em Serie' ,
        p: 'Lemony Snickets A Series of Unfortunate Events, ou simplesmente A Series of Unfortunate Events, é uma websérie americana de drama da Netflix, desenvolvida por Mark Hudis, e baseada no romance de série infantojuvenil de mesmo nome por Lemony Snicket.' ,
    },
    {
        img: 'https://img.r7.com/images/stranger-things-04072019103042837?dimensions=660x360&&amp;&amp;&amp;&amp;&amp;resize=660x360&amp;crop=697x380+37+0' ,
        h2: 'Strenge Thinks' ,
        p: 'Will, um garoto de 12 anos, desaparece em Montauk, Long Island. Enquanto a polícia, família e amigos procuram respostas, eles mergulham em um extraordinário mistério, envolvendo um experimento secreto do governo, forças sobrenaturais e uma garotinha.' ,
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YrmIaD4ArMFDLZ5aSMtnh4kzD6XdPQEZGn3wmqtZTg7OWmoadA&s' ,
        h2: 'Rick e Morty' ,
        p: 'Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô.' ,
    },
    {
        img: 'http://br.web.img3.acsta.net/r_640_360/newsv7/18/05/12/13/31/4901149.jpg' ,
        h2: 'Brooklyn 99' ,
        p: 'Jake Peralta é um detetive brilhante e ao mesmo tempo imaturo, que nunca precisou se preocupar em respeitar as regras. Tudo muda quando um capitão exigente assume o comando de seu esquadrão e Jake deve aprender a trabalhar em equipe.',
    }
]

var conter = 0

let img = document.getElementById('img')
let title = document.getElementById('title')
let texto = document.getElementById('texto')

let vai = document.getElementById('vai')

let volta = document.getElementById('volta')

console.log(vai)
vai.addEventListener('click', function() {
    console.log('click')
    if (conter > 0) {
        conter = conter -1
        title.innerHTML = list[conter].h2;
        texto.innerHTML = list[conter].texto;
        img.setAttribute('src', list[conter].img)

    }
    else {
        conter = 3
        title.innerHTML = list[conter].h2;
        texto.innerHTML = list[conter].texto;
        img.setAttribute('src', list[conter].img)
    } 

})


volta.addEventListener('click', function() {
    if (conter < 3) {
        conter = conter +1
        title.innerHTML = list[conter].h2;
        texto.innerHTML = list[conter].texto;
        img.setAttribute('src', list[conter].img)
    } 
    else { 
        conter = 0
        title.innerHTML = list[conter].h2;
        texto.innerHTML = list[conter].texto;
        img.setAttribute('src', list[conter].img)
    }
})