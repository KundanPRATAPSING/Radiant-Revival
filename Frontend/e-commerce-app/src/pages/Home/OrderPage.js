import React from "react";
import { useNavigate } from "react-router";

export default function OrderPage({
    departmentName,
    heading,
    content,
    imgUrl,
    imgName,
    price,
}) {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const orderData = {
            category: formData.get("category"),
            imageName: formData.get("imageName"),
            imageUrl: formData.get("imageUrl"),
            heading: formData.get("heading"),
            content: formData.get("content"),
            price: formData.get("price"),
        };
        
        console.log(orderData)

        navigate("/orderPreview", { state: { orderData } });
    }

    return (
        <div className="col-12 col-sm-6 col-lg-4 my-4">
            <form onSubmit={handleSubmit}>
                <div className="card border-0">
                    <img src={imgUrl} className="card-img-top border-0" alt={imgName} />
                    <div className="card-body">
                        <h5 className="card-title text-center font-weight-bold">
                            {heading}
                        </h5>
                        <p className="card-text text-center">{content}</p>
                    </div>
                    <input type="hidden" name="category" value={departmentName} />
                    <input type="hidden" name="imageName" value={imgName} />
                    <input type="hidden" name="imageUrl" value={imgUrl} />
                    <input type="hidden" name="heading" value={heading} />
                    <input type="hidden" name="content" value={content} />
                    <input type="hidden" name="price" value={price} />
                    <button type="submit" className="btn btn-info btn-lg btn-block">
                        Buy Now
                    </button>
                </div>
            </form>
        </div>
    );
}
