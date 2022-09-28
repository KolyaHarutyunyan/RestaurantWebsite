import { Icons } from "@eachbase/theme";
import { StyledInvoiceTable } from "./style";
import { useModal } from "@eachbase/components";
import { MODAL_NAMES } from "../../../../constants";
import { invoiceTBodyData, invoiceTHeadCaptions } from "./constants";

export const InvoiceTable = () => {
  const { open } = useModal();

  return (
    <StyledInvoiceTable>
      <div className="cards-table">
        <div className="cards-table-head">
          {invoiceTHeadCaptions.map((item, index) => (
            <p key={index} style={{ maxWidth: item.width }}>
              {item.caption}
            </p>
          ))}
        </div>
        <div className="cards-table-body">
          {invoiceTBodyData.map((item) => (
            <div key={item.id} className="cards-table-body-item">
              <p style={{ maxWidth: "300px" }}>{item.date}</p>
              <p style={{ maxWidth: "300px" }}>{item.items}</p>
              <p style={{ maxWidth: "300px" }}>{item.cost}</p>
              <p className="actions-wrapper">
                <button>
                  <Icons.DownloadIcon />
                </button>
                <button
                  style={{ marginLeft: "16px" }}
                  onClick={() => open(MODAL_NAMES.INVOICE_INFO)}
                >
                  <Icons.EyeIconShow />
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mobile-cards-table">
        <div className="mobile-cards-item">
          <div className="title-info-wrapper">
            <p className="title">Date</p>
            <p className="info">Feb 02,2022</p>
          </div>
          <div className="title-info-wrapper">
            <p className="title">Items</p>
            <p className="info">Standart Plan Menumango</p>
          </div>
          <div className="title-info-wrapper">
            <p className="title">Cost</p>
            <p className="info">$25</p>
          </div>
          <div className="buttons-wrapper">
            <button>
              <Icons.DownloadIcon />
            </button>
            <button
              style={{ marginLeft: "16px" }}
              onClick={() => open(MODAL_NAMES.INVOICE_INFO)}
            >
              <Icons.EyeIconShow />
            </button>
          </div>
        </div>
      </div> */}
    </StyledInvoiceTable>
  );
};
