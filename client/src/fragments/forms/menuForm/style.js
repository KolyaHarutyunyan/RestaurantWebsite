import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledMenuForm = styled.div`
  .menu-form-title-box {
    text-align: center;
    .menu-form-title {
      font-family: Poppins, sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: ${colors.secondary};
    }
    .menu-form-subtitle {
      margin: 8px 0px 16px;
      font-family: Poppins, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${colors.secondary};
    }
  }
  .menu-form {
    .add-button {
      margin-top: 16px;
    }
  }
`;

// export const Container = styled.div`
//   .uploaded {
//     text-align: center;
//   }
//   .input-padding{
//     margin-bottom: 8px;
//   }
//   .max-characters {
//     font-family: Open Sans, sans-serif;
//     font-size: 12px;
//     margin-left: 13px;
//     margin-bottom: 16px;
//   }
//   .save-button{
//     margin-top: 20px;
//   }
//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     .title {

//       @media (max-width: 768px) {
//         font-size: 18px;
//       }
//       text-align: center;
//       font-size: 24px;
//       font-family: Poppins,sans-serif;
//       margin-bottom: 17px;
//     }
//     .hours-operations {
//       margin-top: 10px;
//       .toggle-button {
//         display: flex;
//         align-items: center;
//         svg {
//           transform: rotate(180deg);
//           transition: transform 0.3s ease-in-out;
//         }
//       }
//       &.close {
//         .toggle-button {
//           svg {
//             transform: rotate(0deg);
//           }
//         }
//         .details {
//           height: 0px;
//           opacity: 0;
//           overflow: hidden;
//         }
//       }
//     }
//   }
// `;
