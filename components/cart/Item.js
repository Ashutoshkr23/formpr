export default function Item(props) {
    const { id, title, description, price, img, quantity } = props
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="tp" />
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="add-minus-quantity">
                    {/* <i className="fas fa-minus minus" /> */}<span className="font-bold text-5xl mb-2 cursor-pointer">-</span>
                    <input type="text" placeholder={quantity} disabled />
                    <span className="font-extrabold text-3xl  cursor-pointer">+</span>
                </div>
                <div className="price">
                    <h3>{price}</h3>
                </div>
                {/* <div className="remove-item">
                    <i
                        className="fas fa-trash-alt remove"
                        onClick={() => removeItem(id)}></i>
                </div> */}
            </div>
            <hr />
        </>
    )
}