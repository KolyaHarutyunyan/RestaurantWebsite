import { Container } from "./style";
import { Image, Typography, Button } from "@eachbase/components";
import {MODAL_NAMES} from "@eachbase/constants";
import Carousel from "nuka-carousel";

export const MenusAndMenuItems = () => {

  const token = typeof window !== 'undefined' && localStorage.getItem('token')
  const handleCreate = ()=>{
    if(token) {
      // open(MODAL_NAMES.MENU_FORM)
    }else{
      // open(MODAL_NAMES.SIGN_IN)
    }
  }

  return (
    <Container>
      <div className="container">
        <Typography className="g-title" color="text" size="3rem">
          Recent Restaurants Using Our Menus
        </Typography>
        <Typography color="text" className="descr">
          The list of companies using our new dynamic and interactive menus is growing.
          Our clients are not just customers, but people who we are building a long term
          relationship with. We are constantly listening and improving.
        </Typography>
      </div>

      <div className={'carousel-desktop'}>
      <Carousel
          style={{height:'700px', marginTop:'70px', outline:'none'}}
          renderBottomCenterControls={false}
          renderCenterLeftControls={false}
          renderCenterRightControls={false}
          wrapAround = {true}
          autoplay={true}
      >

        <div>
      <ul className="cards">
        <li>
          <Image src={"./assets/images/recent/chocolate.jpg"}/>
          <Typography weight="bold" color="text">
            Chocolate Waffles
          </Typography>
        </li>
        <li>
          <Image src={"./assets/images/recent/cappuccino.jpg"}/>
          <Typography weight="bold" color="text">
            Cappuccino
          </Typography>
        </li>
        <li>
          <Image src={"./assets/images/recent/pizzaMargherita.jpg"}/>
          <Typography weight="bold" color="text">
            Pizza Margherita
          </Typography>
        </li>
        <li>
          <Image src={"./assets/images/recent/greekSalad.jpg"}/>
          <Typography weight="bold" color="text">
            Greek Salad
          </Typography>
        </li>
        <li>
          <Image src={"./assets/images/recent/chickenSkewers.jpg"}/>
          <Typography weight="bold" color="text">
            Chicken Skewers
          </Typography>
        </li>
        <li>
          <Image src={"./assets/images/recent/doubleCheese.jpg"}/>
          <Typography weight="bold" color="text">
            Double Cheese Burger
          </Typography>
        </li>
        <li>
          <Image src={"./assets/images/recent/grilledShrimp.jpg"}/>
          <Typography weight="bold" color="text">
            Grilled Shrimp
          </Typography>
        </li>
        <li>
          <Image src={"./assets/images/recent/chicken.jpg"}/>
          <Typography weight="bold" color="text">
            Chicken Fettuccine Alfredo
          </Typography>
        </li>
        <li>
          <Image src={"./assets/images/recent/ratatouillePasta.jpg"}/>
          <Typography weight="bold" color="text">
            Ratatouille Pasta
          </Typography>
        </li>
        <li>
          <Image src={"./assets/images/recent/mojito.jpg"}/>
          <Typography weight="bold" color="text">
            Mojito
          </Typography>
        </li>
      </ul>
        </div>





<div>
        <ul className="cards">
          <li>
            <Image src={"./assets/images/recent/miniTiramisu.jpg"}/>
            <Typography weight="bold" color="text">
              Mini Tiramisu
            </Typography>
          </li>
          <li>
            <Image src={"./assets/images/recent/pastaPuttanesca.jpg"}/>
            <Typography weight="bold" color="text">
              Pasta Puttanesca
            </Typography>
          </li>
          <li>
            <Image src={"./assets/images/recent/watermelon.jpg"}/>
            <Typography weight="bold" color="text">
              Watermelon Vodka Cocktail
            </Typography>
          </li>
          <li>
            <Image src={"./assets/images/recent/grilledFish.jpg"}/>
            <Typography weight="bold" color="text">
              Grilled Fish
            </Typography>
          </li>
        </ul>
</div>
      </Carousel>




      </div>



        <div className={'carousel-mobile'}>
          <Carousel
              style={{height:'750px', marginTop:'32px',  outline:'none'}}
              renderBottomCenterControls={false}
              renderCenterLeftControls={false}
              renderCenterRightControls={false}
              wrapAround = {true}
              autoplay={true}
          >



              <ul className="cards">
                <li>
                  <Image src={"./assets/images/recent/chocolate.jpg"}/>
                  <Typography weight="bold" color="text">
                    Chocolate Waffles
                  </Typography>
                </li>

                <li>
                  <Image src={"./assets/images/recent/cappuccino.jpg"}/>
                  <Typography weight="bold" color="text">
                    Cappuccino
                  </Typography>
                </li>
              </ul>
            <ul  className="cards">
                <li>
                  <Image src={"./assets/images/recent/pizzaMargherita.jpg"}/>
                  <Typography weight="bold" color="text">
                    Pizza Margherita
                  </Typography>
                </li>

                <li>
                  <Image src={"./assets/images/recent/greekSalad.jpg"}/>
                  <Typography weight="bold" color="text">
                    Greek Salad
                  </Typography>
                </li>
              </ul>

              <ul className="cards">
                <li>
                  <Image src={"./assets/images/recent/chickenSkewers.jpg"}/>
                  <Typography weight="bold" color="text">
                    Chicken Skewers
                  </Typography>
                </li>
                <li>
                  <Image src={"./assets/images/recent/doubleCheese.jpg"}/>
                  <Typography weight="bold" color="text">
                    Double Cheese Burger
                  </Typography>
                </li>
              </ul>


            <ul className="cards">
                <li>
                  <Image src={"./assets/images/recent/grilledShrimp.jpg"}/>
                  <Typography weight="bold" color="text">
                    Grilled Shrimp
                  </Typography>
                </li>
                <li>
                  <Image src={"./assets/images/recent/chicken.jpg"}/>
                  <Typography weight="bold" color="text">
                    Chicken Fettuccine Alfredo
                  </Typography>
                </li>
            </ul>
            <ul className="cards">
                <li>
                  <Image src={"./assets/images/recent/ratatouillePasta.jpg"}/>
                  <Typography weight="bold" color="text">
                    Ratatouille Pasta
                  </Typography>
                </li>
                <li>
                  <Image src={"./assets/images/recent/mojito.jpg"}/>
                  <Typography weight="bold" color="text">
                    Mojito
                  </Typography>
                </li>
              </ul>






              <ul className="cards">
                <li>
                  <Image src={"./assets/images/recent/miniTiramisu.jpg"}/>
                  <Typography weight="bold" color="text">
                    Mini Tiramisu
                  </Typography>
                </li>
                <li>
                  <Image src={"./assets/images/recent/pastaPuttanesca.jpg"}/>
                  <Typography weight="bold" color="text">
                    Pasta Puttanesca
                  </Typography>
                </li>
              </ul>

            <ul className="cards">
                <li>
                  <Image src={"./assets/images/recent/watermelon.jpg"}/>
                  <Typography weight="bold" color="text">
                    Watermelon Vodka Cocktail
                  </Typography>
                </li>
                <li>
                  <Image src={"./assets/images/recent/grilledFish.jpg"}/>
                  <Typography weight="bold" color="text">
                    Grilled Fish
                  </Typography>
                </li>
              </ul>

          </Carousel>

        </div>

<div className='add-menu-button'>
      <Button onClick={ handleCreate }>Add Free Menu</Button>
</div>
    </Container>
  );
};
