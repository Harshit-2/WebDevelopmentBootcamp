import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <div>
      <h1 className="heading" contentEditable="true" spellCheck="false">
        My Favourite Foods
      </h1>
      <img
        className="food-img"
        src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2Farchive%2Fad4881c2ec9f21cafb7f5d209c83b6849d6b0d23"
        alt="Bacon"
      />
      <img
        className="food-img"
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Jam%C3%B3n_de_Guijuelo_004_%28cropped%29_4.3.JPG"
        alt="Jamon"
      />
      <img
        className="food-img"
        src="https://www.seriouseats.com/thmb/iD62ByO0qeACNjfCV5eZEqkBxhQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__01__20140120-beef-ramyun-homemade-recipe-15-014423f0ac734abc8c0d826e54857afe.jpg"
        alt="Noodles"
      />
    </div>
    <div>
      <img src={img + "?grayscale"} alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
