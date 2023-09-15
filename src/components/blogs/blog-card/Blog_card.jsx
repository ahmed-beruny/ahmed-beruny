import React from 'react'
import './blog_card.css'
export default function Blog_cart(props) {
  //console.log(props);
  return (

<div className="card">
  <figure className="card__thumb">
    <img src={props.blog.image} alt='' className="card__image"></img>
    <figcaption className="card__caption">
      <h2 className="card__title">{props.blog.author}</h2>
      <p className="card__snippet">{props.blog.content}</p>
      {/* <button onClick={
        async() => {
          const res = await fetch(`https://myblogs-d2xr.onrender.com/api/myblogs/${props.blog._id}`, {
            method: 'DELETE'
          });
          if(res.status === 200){
            alert('Blog deleted successfully');
          }else{
            console.log(res);
            alert('Something went wrong');
          }
          window.location.reload();
        }
      } className="card__button">Delete</button> */}
    </figcaption>
  </figure>
</div>

  )
}
