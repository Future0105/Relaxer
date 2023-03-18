let big = document.querySelector('.big')
let text = document.querySelector('.Text')
huxi()
function huxi() {
    text.innerHTML = '吸气!'
    big.classList.remove('xiao')
    big.classList.add('da')
    setTimeout(
        function () {
            text.innerHTML = '保持!'
            setTimeout(
                function () {
                    text.innerHTML = '呼气!'
                    big.classList.remove('da')
                    big.classList.add('xiao')
                }, 1500)
        }, 3000)
}
setInterval(huxi, 7500)