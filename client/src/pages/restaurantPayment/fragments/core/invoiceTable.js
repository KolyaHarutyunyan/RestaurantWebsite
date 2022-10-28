import { Icons } from "@eachbase/theme";
import { StyledInvoiceTable } from "./style";
import { NoItemsCard, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { getInvoices, invoiceTHeadCaptions } from "./constants";

export const InvoiceTable = ({ invoices = [] }) => {
  const { open } = useModal();

  const invoicesDisplay = getInvoices(invoices);

  return (
    <StyledInvoiceTable>
      <div className="cards-table">
        <div className="cards-table-head">
          {invoiceTHeadCaptions.map((item, index) => (
            <p
              key={index}
              style={{ maxWidth: item.width, textTransform: "capitalize" }}
            >
              {item.caption}
            </p>
          ))}
        </div>
        <div className="cards-table-body">
          {invoicesDisplay.length ? (
            invoicesDisplay.map((item, index) => (
              <div key={index} className="cards-table-body-item">
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
            ))
          ) : (
            <NoItemsCard text={"no invoices yet"} />
          )}
        </div>
      </div>
      <div className="mobile-cards-table">
        {invoicesDisplay.length ? (
          invoicesDisplay.map((item, i) => (
            <div className="mobile-cards-item">
              {Object.keys(item).map((key, index) => (
                <div key={index} className="title-info-wrapper">
                  <p className="title">{key}</p>
                  <p className="info">{item[key]}</p>
                </div>
              ))}
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
          ))
        ) : (
          <div
            className="mobile-cards-item"
            style={{ display: "flex", alignItems: "center" }}
          >
            <NoItemsCard text={"no invoices yet"} />
          </div>
        )}
      </div>
    </StyledInvoiceTable>
  );
};
