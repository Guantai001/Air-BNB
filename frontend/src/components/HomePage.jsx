import React from "react";
import NavBar from "./NavBar";
import photo from "./photoa/background.jpg"

function HomePage() {
  return (
    <>
      <div id="landingpage">
        <NavBar />
        <div id="landingpage"
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%",
            position: "absolute",
            zIndex: "-1",
            top: "0",
          }}
        >
        </div>
        <div className="container  mt-5 text-center pt-5 landtext">
          <div className="row mt-5  ">
            <div className="col-12">
              <div className="text-center mt-5"

              >
                <h1 className="display-1"
                  style={{ fontSize: "3rem", fontWeight: "bold" }}
                >GuanBnb</h1>
                <h3 className=""
                  style={{ fontSize: "3rem", fontWeight: "semi-bold" }}
                >Find your next home away from home</h3>
                <div className="mt-5 ">
                  <a href="" className="btn mx-5 btx btn-lg">Call Us now</a>
                  


                </div>
              </div>
            </div>
          </div>

        </div>


      </div>

    </>

  );
}

export default HomePage;