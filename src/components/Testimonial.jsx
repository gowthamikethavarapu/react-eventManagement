import React from "react";
class Testimonial extends React.Component{
    render(){
        return(
        <div>
            <div class="section3"> 
            <center><h1 style={{textAlign: "center",paddingTop: "40px"}}><em>Our happy Customers</em></h1></center>
            <div class="row">
              <div class="col-sm-4">
                <div class="testimonial-overlay">
                  
                    <div class="row">
                      <img class="rounded-circle"src="https://images.pexels.com/photos/254069/pexels-photo-254069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                       
                    </div>
                    <h4 style={{textAlign: "center" ,paddingTop: "20px"}}>Eric and Lara</h4>
                    <div class="row text">
                        <p>"We hired bigdays events to host our wedding. From the moment I met  her team, I was sure my event was going to be a successful one. In fact, it was beyond what I could have expected or imagined." </p>             
             
                    </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="testimonial-overlay"><div class="row">
                  <img class="rounded-circle"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMA_2tqzxAxjgaUBMFsDVM8_1t0uKZMLavA&usqp=CAU" alt="testimonialImg" />
                  <br/>
                  
                </div>
                <h4 style={{textAlign: "center",paddingTop: "20px"}}><i>Crystal</i></h4>
                <div class="row text">
                    <p>"Big day events were great! She was a pleasure to work with when helping plan my birthday party and her passion can really be seen through their work." </p>
                     </div></div>
              </div>

              
              <div class="col-sm-4">
                <div class="testimonial-overlay">
                    <div class="row">
                  <img class="rounded-circle" src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="testimonialImg"/>
                </div>
                <h4 style={{textAlign: "center",paddingTop: "20px"}}><i>IITM</i></h4>
                <div class="row text">
                 <p>  "They never made me feel like she was taking advantage of me. Their goal the entire time was to actually save me money and they did!  Needless to say, I will be hiringbig day events for all future events!"
                </p>
                
                </div></div>
              </div>

              </div>

            </div>
            
          </div>

    );
}
}
export default Testimonial