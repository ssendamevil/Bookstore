const slider = () => {
    const sliding = () => {
        const slideField = document.querySelector('.det-box'),
            prodDets = document.querySelector('.tab1'),
            authorDets = document.querySelector('.tab2'),
            slideWrapper = document.querySelector('.prodtabs-det'),
            width = window.getComputedStyle(slideWrapper).width;
        let offset = +width.replace(/\D/g, '');
        prodDets.classList.add('prodtab_active');

        slideField.style.width = '200%';
        slideField.style.display = 'flex';
        slideField.style.transition = '0.5s all';

        prodDets.addEventListener('click', () => {
            if(offset === +width.replace(/\D/g, '')){
                offset = 0
            }
            slideField.style.transform = ` translateX(-${offset}px)`;
            authorDets.classList.remove('prodtab_active');
            prodDets.classList.add('prodtab_active');
        })

        authorDets.addEventListener('click', ()=>{
            if(offset === 0){
                offset = +width.replace(/\D/g, '');
            }
            slideField.style.transform = ` translateX(-${offset}px)`;   
            prodDets.classList.remove('prodtab_active');
            authorDets.classList.add('prodtab_active');
        })
    }
    return {sliding}
}

export default slider;