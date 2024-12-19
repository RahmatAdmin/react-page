import React from "react";

export function Service() {
  return (
    <div className="container mt-12 mx-auto p-8">
        
            <h1>Contact Us</h1>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card Whatsapp */}
        <div className="card bg-base-100 image-full w-full shadow-xl">
          <figure>
            <img
              src="https://1.bp.blogspot.com/-pGsRrouvWAI/XkVHyz-xkyI/AAAAAAAAJcg/BLkwzlGjYjg2ekiWS1EXifycdnFoZbXggCLcBGAsYHQ/s1600/Whatsapp%2BIcon%2BLogo.png"
              alt="Whatsapp Service"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Whatsapp Service</h2>
            <p>
              Jika Kamu tertarik dan ingin konsultasi lebih lanjut, silahkan
              klik tombol di bawah ini.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-success text-white">
                <a href="https://wa.me/62895618612750?text=Halo,%20saya%20ingin%20konsultasi.">
                Connect Now!
                </a>
                </button>
            </div>
          </div>
        </div>

        {/* Card LinkedIn */}
        <div className="card bg-base-100 image-full w-full shadow-xl">
          <figure>
            <img
              style={{ width: "270px" }}
              src="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
              alt="LinkedIn Service"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">LinkedIn Service</h2>
            <p>
              Jika Kamu ingin sharing dan explore lebih lanjut, silahkan klik
              tombol di bawah ini.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">
                <a href="https://www.linkedin.com/in/rahmat-taupik-rinaldi-ba7131268/">
                    Connect Now
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Card Instagram */}
        <div className="card bg-base-100 image-full w-full shadow-xl">
          <figure>
            <img
              style={{ width: "270px" }}
              src="https://cdn.pixabay.com/photo/2021/07/27/08/20/instagram-icon-6496194_1280.png"
              alt="Instagram Service"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Instagram Service</h2>
            <p>
              Jika Kamu ingin berbagi cerita lebih lanjut, silahkan klik tombol
              di bawah ini.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary text-white">Connect Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
