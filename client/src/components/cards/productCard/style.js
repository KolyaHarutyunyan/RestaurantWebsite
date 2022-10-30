import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledProductCard = styled.section.attrs((props) => ({
  className: props.className
}))`
  width: 100%;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: 8px;

  .add-menu-item-button {
    position: absolute;
    top: 10px;
    right: 0px;

    svg {
      margin-right: 16px;
    }

    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.primary};
    @media (max-width: 1024px) {
      top: -20px;
    }
    @media (max-width: 610px) {
      top: -56px;
    }
  }

  .product-list-box {
    width: 100%;
    margin-top: 16px;

    .product-list {
      width: 100%;
      height: 600px;
      overflow: auto;

      .product-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;

        &:not(:last-child) {
          margin-bottom: 8px;
        }

        border-radius: 8px;
        background-color: ${colors.neautralLightGray};

        &.inactive {
          opacity: 0.6;
        }

        .product-name-box {
          display: flex;
          align-items: center;

          .product-image {
            width: 48px;
            height: 48px;
            background-color: ${colors.lightGray};
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .product-name {
            font-family: Open Sans, sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            color: ${colors.secondary};
            margin-left: 8px;
          }
        }

        .product-action-box {
          display: flex;
          align-items: center;

          .product-price {
            padding: 4px 10px;
            margin-right: 16px;
            background-color: ${colors.white};
            border-radius: 4px;

            .price-text {
              display: inline-block;
              min-width: 74px;
              font-family: Open Sans, sans-serif;
              font-weight: 600;
              font-size: 18px;
              line-height: 28px;
              color: ${colors.secondary};
            }
          }

          .switch-wrapper {
            margin-right: 16px;
          }
        }
      }
    }
  }
`;
