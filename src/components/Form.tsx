import React, { useEffect, useState } from "react";
import childImg from "../images/child.jpg";
import adultImg from "../images/adult.jpg";
import oldImg from "../images/old.jpg";
import maleIcon from "../images/male-icon.png";
import femaleIcon from "../images/female-icon.png";

function Form() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("male");
  const [imageSrc, setImageSrc] = useState<string>("");
  const [logoSrc, setLogoSrc] = useState<string>("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event: any) => {
    setAge(event.target.value);
  };
  const handleGenderChange = (event: any) => {
    setGender(event.target.value);
  };

  useEffect(() => {
    if (name.length > 0) {
      const hiddenDivEl: HTMLElement | null =
        document.getElementById("hiddenDiv");
      if (hiddenDivEl) {
        hiddenDivEl.style.visibility = "visible";
      }
    }
  }, [name]);

  useEffect(() => {
    if (age < 18) {
      setImageSrc(childImg);
    } else if (age >= 18 && age < 60) {
      setImageSrc(adultImg);
    } else {
      setImageSrc(oldImg);
    }
  }, [age]);

  useEffect(() => {
    if (gender === "male") {
      setLogoSrc(maleIcon);
    } else {
      setLogoSrc(femaleIcon);
    }
  }, [gender]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        margin: "30px",
      }}
    >
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div id="hiddenDiv">
        <div>
          <label>Age: </label>
          <input
            type="text"
            name="age"
            placeholder="Enter age"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Gender: </label>
          <select name="gender" value={gender} onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <img
            src={logoSrc}
            alt="Gender"
            style={{ height: "20px", width: "20px", marginLeft: "10px" }}
          />
        </div>

        <img
          src={imageSrc}
          alt="Person"
          style={{ height: "100px", width: "100px", marginTop: "20px" }}
        />
      </div>
    </div>
  );
}

export default Form;
