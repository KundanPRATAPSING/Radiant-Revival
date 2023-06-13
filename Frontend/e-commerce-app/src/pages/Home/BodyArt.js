import React from 'react'
import Navbar from '../../components/Header/Navbar';

export default function BodyArt() {
  return (
    <>
    
    {/* Navbar  */}
        <Navbar />

    {/* <!-- Navbar --> */}

    {/* <!-- Top Image --> */}

    {/* <!-- Shop by department-icons --> */}

    <div class="container" id="depart">
      <h3
        class="d-flex justify-content-center justify-content-sm-start mt-5 mb-3"
      >
        Department - Living Room
      </h3>
    </div>

    {/* <!-- New offers --> */}

    <div class="container" id="newOffers">
      <div class="row my-2 justify-content-center">

        {/* <!-- Image 1 --> */}
        <div class="col-12 col-sm-6 col-lg-4">
          <form action="{{url_for('place_order')}}" method="POST">
            <div class="card border-0">
              <img
                src="{{ url_for('static', filename='image/living_room_1.png') }}"
                class="card-img-top border-0"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold">
                  Timeless Elegance
                </h5>
                <p class="card-text text-center">
                  Whether you're lounging with family or entertaining guests,
                  our sofas provide ample seating for everyone.
                </p>
              </div>
              <input type="hidden" name="category" value="living_room_1" />
              <input type="hidden" name="price" value="549" />
              <input type="hidden" name="heading" value="Timeless Elegance" />
              <input
                type="hidden"
                name="description"
                value="Whether you're lounging with family or entertaining guests,
              our sofas provide ample seating for everyone."
              />
              <button type="submit" class="btn btn-info btn-lg btn-block">
                Buy Now
              </button>
            </div>
          </form>
        </div>

        {/* <!-- Image 2 --> */}
        <div class="col-12 col-sm-6 col-lg-4">
          <form action="{{url_for('place_order')}}" method="POST">
            <div class="card border-0">
              <img
                src="{{ url_for('static', filename='image/living_room_2.png') }}"
                class="card-img-top border-0"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold">
                  Ultimate Comfort
                </h5>
                <p class="card-text text-center">
                  Our sofas are crafted with the finest materials and expert
                  craftsmanship, ensuring durability and longevity.
                </p>
              </div>
              <input type="hidden" name="category" value="living_room_2" />
              <input type="hidden" name="price" value="580" />
              <input type="hidden" name="heading" value="Ultimate Comfort" />
              <input
                type="hidden"
                name="description"
                value="Our sofas are crafted with the finest materials and expert
              craftsmanship, ensuring durability and longevity."
              />
              <button type="submit" class="btn btn-info btn-lg btn-block">
                Buy Now
              </button>
            </div>
          </form>
        </div>

        {/* <!-- Imgae 3  --> */}
        <div class="col-12 col-sm-6 col-lg-4">
          <form action="{{url_for('place_order')}}" method="POST">
            <div class="card border-0">
              <img
                src="{{ url_for('static', filename='image/living_room_3.png') }}"
                class="card-img-top border-0"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold">
                  Customizable Designs
                </h5>
                <p class="card-text text-center">
                  Experience unmatched comfort and style with our luxurious
                  sofas, designed to elevate your living space.
                </p>
              </div>
              <input type="hidden" name="category" value="living_room_3" />
              <input type="hidden" name="price" value="499" />
              <input
                type="hidden"
                name="heading"
                value="Customizable Designs"
              />
              <input
                type="hidden"
                name="description"
                value="Experience unmatched comfort and style with our luxurious
              sofas, designed to elevate your living space."
              />
              <button type="submit" class="btn btn-info btn-lg btn-block">
                Buy Now
              </button>
            </div>
          </form>
        </div>

        {/* <!-- Image 4  --> */}
        <div class="col-12 col-sm-6 col-lg-4 my-5">
          <form action="{{url_for('place_order')}}" method="POST">
            <div class="card border-0">
              <img
                src="{{ url_for('static', filename='image/living_room_4.png') }}"
                class="card-img-top border-0"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold">
                  Luxurious Materials
                </h5>
                <p class="card-text text-center">
                  With plush cushions and supportive backrests, our sofas offer
                  the ultimate relaxation experience.
                </p>
              </div>
              <input type="hidden" name="category" value="living_room_4" />
              <input type="hidden" name="price" value="487" />
              <input type="hidden" name="heading" value="Luxurious Materials" />
              <input
                type="hidden"
                name="description"
                value="With plush cushions and supportive backrests, our sofas offer
              the ultimate relaxation experience."
              />
              <button type="submit" class="btn btn-info btn-lg btn-block">
                Buy Now
              </button>
            </div>
          </form>
        </div>

        {/* <!-- Image 5 --> */}
        <div class="col-12 col-sm-6 col-lg-4 my-5">
          <form action="{{url_for('place_order')}}" method="POST">
            <div class="card border-0">
              <img
                src="{{ url_for('static', filename='image/living_room_5.png') }}"
                class="card-img-top border-0"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold">
                  Functional Style
                </h5>
                <p class="card-text text-center">
                  Our sofas are not only comfortable, but also visually
                  stunning, adding a touch of elegance to any room.
                </p>
              </div>
              <input type="hidden" name="category" value="living_room_5" />
              <input type="hidden" name="price" value="730" />
              <input type="hidden" name="heading" value="Functional Style" />
              <input
                type="hidden"
                name="description"
                value="Our sofas are not only comfortable, but also visually
              stunning, adding a touch of elegance to any room."
              />
              <button type="submit" class="btn btn-info btn-lg btn-block">
                Buy Now
              </button>
            </div>
          </form>
        </div>

        {/* <!-- Image 6  --> */}
        <div class="col-12 col-sm-6 col-lg-4 my-5">
          <form action="{{url_for('place_order')}}" method="POST">
            <div class="card border-0">
              <img
                src="{{ url_for('static', filename='image/living_room_6.png') }}"
                class="card-img-top border-0"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold">
                  Affordable Luxury
                </h5>
                <p class="card-text text-center">
                  Invest in the centerpiece of your home and enjoy a lifetime of
                  comfort and beauty with our exquisite sofas.
                </p>
              </div>
              <input type="hidden" name="category" value="living_room_6" />
              <input type="hidden" name="price" value="899" />
              <input type="hidden" name="heading" value="Affordable Luxury" />
              <input
                type="hidden"
                name="description"
                value="Invest in the centerpiece of your home and enjoy a lifetime of
              comfort and beauty with our exquisite sofas."
              />
              <button type="submit" class="btn btn-info btn-lg btn-block">
                Buy Now
              </button>
            </div>
          </form>
        </div>

            {/* Row Div  */}
      </div>

        {/* Container Div  */}
    </div>

    {/* <!-- End new offers--> */}

    {/* <!-- footer --> */}


    </>
  )
}
