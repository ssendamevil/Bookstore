import cs from '../../resources/svgs/cs.svg'
import scissors from '../../resources/svgs/scissors.svg'
import pen from '../../resources/svgs/pen.svg'
import books from '../../resources/svgs/books.svg'
import gift from '../../resources/svgs/gift.svg'
import headpones from '../../resources/svgs/headpones.svg'
import top from '../../resources/svgs/top.svg'
import './IconsList.scss';

const arr = [
    {
        name: "Bestsellers",
        icon: top
    }, 
    {
        name: "New Releases",
        icon: books
    }, 
    {
        name: "Coming soon",
        icon: cs
    }, 
    {
        name: "Signed editions",
        icon: pen
    }, 
    {
        name: "Audiobooks",
        icon: headpones
    }, 
    {
        name: "Coupons & Deals",
        icon: scissors
    }, 
    {
        name: "Gift cards",
        icon: gift
    }
]

const IconsList = () => {
    return(
        <section className="home_icons_container">
            <div className="home_icons_wrapper">
                <div className="home_icons">
                    {
                        arr.map((item, i) => {
                        return(
                            <a key={i} className='icon_link' href="">
                                <img src={item.icon} alt="" className={`icons_${i}`} />
                                <div className="label">{item.name}</div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default IconsList;