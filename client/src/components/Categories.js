import React from 'react';
import "../css/categories.css"

const Category = props => {
    return (
      <div className="categoryList row">
            <div className="col-md-2 category">
                
                <img className="img-fluid" src={props.category.image} />
                <h2>{props.category.name}</h2>
            </div>

            <div className="col-md-10 products row">
               {props.products.map((product,index)=>{
                   console.log(product);
                   return (
                    <div key={index} className="product row">
                        <img className="img-fluid col-md-12" src={product.image} />
                        <div className="col-md-12"><h5>{product.name}</h5></div>
                        <div className="col-md-12 discoutPrice">NGN {product.discountPrice}</div>
                        <div className="col-md-9 price">NGN {product.price}</div>
                        <div className="col-md-2 discoutPercent float-right">{((product.discountPrice/product.price)*100).toFixed()}%</div>
                        
                    </div>
                   )
               })}
            </div>
      </div>
    );
  }

  export default Category;