import { Container } from "./style";
import { Image, Typography } from "@eachbase/components";
import { MdDone } from "react-icons/md";
export const HowItWorks = () => {
  return (
    <Container>
      <Typography className="g-title" size="3rem" color="text" weight="bold">
        How It Works
      </Typography>
      <section>
        <Image />
        <ul>
          <li>
            <span className="num line">1</span>
            <Typography color="text" weight="bold" className="title">
              Create Restaurant Profile
            </Typography>
            <Typography color="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Typography>
          </li>
          <li>
            <span className="num line">2</span>
            <Typography color="text" weight="bold" className="title">
              Add Extra Details about the Restaurant
            </Typography>
            <Typography color="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Typography>
          </li>
          <li>
            <span className="num">3</span>
            <Typography color="text" weight="bold" className="title">
              Create Menus & Set their Status
            </Typography>
            <Typography color="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Typography>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <div className="checkmark">
              <MdDone />
            </div>
            <div className="content">
              <Typography color="text" weight="bold">
                Create Food & Drinks Categories
              </Typography>
              <Typography color="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>
            </div>
          </li>
          <li>
            <div className="checkmark">
              <MdDone />
            </div>
            <div className="content">
              <Typography color="text" weight="bold">
                Add Menu Items
              </Typography>
              <Typography color="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Typography>
            </div>
          </li>
        </ul>
        <Image />
      </section>
    </Container>
  );
};
