import React from "react";
import razorpay2 from "../../images/Razorpay2.png"
import razorpay3 from "../../images/razorpay3.png"
import wallet from "../../images/wallet.png"
import paytm2 from "../../images/Paytm2.png"
import tick from "../../images/tick.png"

const PaymentMethod = () => {
  return (
    <>
      <div className="paymentMethod_Container" style={{padding:"2vw 4vw"}}>
        <div className="toptext" >
          <p
            style={{
              fontSize: "1.8vw",
              lineHeight: "1vw",
              fontFamily: "poppins",
              fontWeight: "500",
              padding: "0.8vw 2vw",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            Payment Method
          </p>
        </div>

        <div className="paymentOptions" style={{marginTop:"8vh"}}>
        <div className="paymentMethod">
          <span><img src={razorpay2}></img></span>
          <button type="button" class="btn btn-primary">
          Active
         </button>

        </div>
        <div className="paymentMethod">
        <span><img src={wallet}></img></span>
          <button type="button" class="btn btn-primary">
          Active
         </button>
        </div>
        <div className="paymentMethod">
        <span><img src={paytm2}></img></span>
          <button type="button" class="btn btn-primary">
          Active
         </button>
        </div>

        </div>

        <div className="profile_main contactUs">
            <div
              className="profile-detail"
              style={{ width: "100%", padding: "3vw" }}
            >
              <form>
                <fieldset
                  style={{
                    border: "1px solid rgba(53, 65, 91, 1)",
                    borderRadius: "5px",
                    marginTop: "6vh",
                    padding: "20px",
                    position: "relative",
                  }}
                >
                  <legend
                    style={{
                      color: "rgba(255, 255, 255, 1)",
                      width: "12vw",
                      padding: "1% 3%",
                      fontSize: "1vw",
                      backgroundColor: "rgba(53, 65, 91, 1)",
                      borderRadius: "5px",
                      position: "absolute",
                      top: "-1vw",
                    }}
                  >
                 RazorPay
                  </legend>

                 
                 <div style={{marginTop:"3vh",fontWeight:"500",fontSize:"1.5vw"}}>
                    <span><img src={tick}></img></span>
                    <span>Enable RazorPay</span>
                    <div>
                    <span><img src={tick}></img></span>
                    <span>Enable Sandbox Mode</span>
                    </div>
                 </div>

                 
                 <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                    RazorPay Key
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="xxxxxxxxxxxx"
                    />
                 
                  </div>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                    RazorPay Secret
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="text"
                      placeholder="xxxxxxxxxxxx"
                    />
                 
                  </div>

                  <div className="profile-detail-name">
                    <label
                      htmlFor="name"
                      style={{ fontWeight: "500", fontSize: "1vw" }}
                    >
                    Image
                    </label>
                    <br></br>
                    <input
                      id="profile-detail-select"
                      type="file"
                      
                    />
                 
                  </div>

                  <div style={{ marginTop:"2vh"}}>
                    <p>Insert payment method image</p>
                    <img src={razorpay3}></img>
                  </div>

                </fieldset>
                <br />

                <div className='personal-detail-button'>
              <button className='personal-detail-button-btn'>Save</button>
              <button className='personal-detail-button-btn'>Back</button>
               </div>
               
              </form>
            </div>
          </div>

      </div>
    </>
  );
};

export default PaymentMethod;
