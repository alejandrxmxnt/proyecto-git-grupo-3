//BUSCADOR DE PRODUCTOS
const buscador = document.getElementById("buscador");
const filtros = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");
const vacio = document.getElementById("vacio");
let categoriaActual = "todos";

function aplicarFiltros() {
    const texto = buscador.value.trim().toLowerCase();
    let visibles = 0;

    productos.forEach(producto => {
        const nombre = producto.dataset.nombre.toLowerCase();
        const coincideCategoria = categoriaActual === "todos" || producto.dataset.categoria === categoriaActual;
        const coincideTexto = nombre.includes(texto);
        const mostrar = coincideCategoria && coincideTexto;
        producto.hidden = !mostrar;
        if (mostrar) visibles++;
    });

    vacio.hidden = visibles > 0;
}

//REALIZAR BUSQUEDAS POR SECCION
buscador.addEventListener("input", aplicarFiltros);
filtros.forEach(boton => {
    boton.addEventListener("click", () => {
        filtros.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");
        categoriaActual = boton.dataset.categoria;
        aplicarFiltros();
    });
});
