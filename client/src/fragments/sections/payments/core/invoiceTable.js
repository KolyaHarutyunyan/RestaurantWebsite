import { Icons } from "@eachbase/theme";
import { InvoiceContainer } from "./styles";
import { useModal } from "@eachbase/components";
import { MODAL_NAMES } from "../../../../constants";

export const InvoiceTable = ({}) => {
  const {open} = useModal();

  return(
    <InvoiceContainer>
    <div className="cards-table">
      <div className="cards-table-head">
        <p style={{ maxWidth: "300px" }}>Date</p>
        <p style={{ maxWidth: "300px" }}>Items</p>
        <p style={{ maxWidth: "300px" }}>Cost</p>
        <p style={{ maxWidth: "165px" }}>Action</p>
      </div>
      <div className="cards-table-body">
        <div className="cards-table-body-item">
          <p style={{ maxWidth: "300px" }}>Feb 02,2022</p>
          <p style={{ maxWidth: "300px" }}>Standart Plan Menumango</p>
          <p style={{ maxWidth: "300px" }}>$25</p>
          <p style={{ maxWidth: "165px", display: "flex", alignItems: "center" }}>
            <button><Icons.DownloadIcon /></button>
            <button style={{ marginLeft: "16px" }} onClick={() => open(MODAL_NAMES.INVOICE_INFO)}><Icons.EyeIconShow /></button>
          </p>
        </div>
      </div>
    </div>

      <div className="mobile-cards-table">
        <div className='mobile-cards-item'>
          <div className='title-info-wrapper'>
            <p className='title'>Date</p>
            <p className='info'>Feb 02,2022</p>
          </div>
          <div className='title-info-wrapper'>
            <p className='title'>Items</p>
            <p className='info'>Standart Plan Menumango</p>
          </div>
          <div className='title-info-wrapper'>
            <p className='title'>Cost</p>
            <p className='info'>$25</p>
          </div>
          <div className='buttons-wrapper'>
            <button><Icons.DownloadIcon /></button>
            <button style={{ marginLeft: "16px" }} onClick={() => open(MODAL_NAMES.INVOICE_INFO)}><Icons.EyeIconShow /></button>
          </div>
        </div>

      </div>
    </InvoiceContainer>
  )
}