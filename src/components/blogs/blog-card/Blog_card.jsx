import React from 'react'
import './blog_card.css'
export default function Blog_cart() {
  return (

<div class="card">
  <figure class="card__thumb">
    <img src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg" alt="Picture by David Monje" class="card__image"></img>
    <figcaption class="card__caption">
      <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
      <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
      <a href="" class="card__button">Read more</a>
    </figcaption>
  </figure>
</div>

  )
}
