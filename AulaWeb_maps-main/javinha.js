function add_map () {
    let select_map = document.getElementById("select_map");
    // container_map = document.getElementById("imgMapa");

    // console.log(select_map)
    let imgMapa = document.getElementById("imgMapa")
    // console.log(select_map)
    imgMapa.src = "Mapass/" + select_map.value + ".gif"
}