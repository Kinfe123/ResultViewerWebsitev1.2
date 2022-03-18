import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-ui/core";
import Result from "./Result";
const ResultViewer = () => {
  let [input, setInput] = useState("");
  let [total, setTotal] = useState();
  let [math, setMath] = useState();
  let [chem, setChem] = useState();
  let [eng, setEng] = useState();
  let [stream, setStream] = useState("");
  let [civic, setCivic] = useState();
  let [bio, setBio] = useState();
  let [apt, setApt] = useState();
  let [phy, setPhy] = useState();
  let [name, setName] = useState("");
  let [school, setSchool] = useState("");
  let [gender, setGender] = useState("");
  let [id, setId] = useState("");
  let [his, setHis] = useState("");
  let [geo, setGeo] = useState("");
  let [eco, setEco] = useState("");
  let [ssCount, setSsCount] = useState(0);
  let [passNs, setPassNs] = useState(0);
  let [check, setCheck] = useState(false);
  let [checkForSocial, setCheckForSocial] = useState(false);
  let [nsCount, setNsCount] = useState(0);
  let [nsMaleCount, setNsMaleCount] = useState(0);
  let [nsFemaleCount, setNsFemaleCount] = useState(0);
  let [nsFemalePass, setNsFemalePass] = useState(0);
  let [ssMaleCount, setSsMaleCount] = useState(0);
  let [top, setTop] = useState([]);
  let [tops, setTops] = useState([]);
  // let [result , setResult] = useState({})

  // const calc = () => {
  //   if (stream === "NS") {
  //     let totalValue = math + chem + bio + civic + eng + apt + phy;

  //     setTotal(totalValue);
  //   }
  //   if (stream === "SS") {
  //     let totalValue = math + his + eco + civic + eng + apt + geo;

  //     setTotal(totalValue);
  //   }
  // };
  // useEffect(() => {
  //   calc();
  // }, [input, id]);

  const topTens = () => {
    let topArr = [];
    Result.map((res) => {
      if (res.stream === "SS") {
        if (parseInt(res.total - res.civics) >= 324) {
          topArr.push(parseInt(res.total));
        }
      }
    });

    topArr.sort((a, b) => b - a);
    Result.map((res) => {
      let index = 0;
      let newTopArr = [];
      for (let i = 0; i < 10; i++) {
        if (parseInt(res.total) === topArr[i]) {
          newTopArr.push(res.name);
          topArr[i] = newTopArr[index];
          i++;
        }
      }
    });
    setTops(topArr);
  };
  const topTen = () => {
    let topArr = [];
    Result.map((res) => {
      if (res.stream === "NS") {
        if (parseInt(res.total - res.civics) >= 470) {
          topArr.push(parseInt(res.total));
        }
      }
    });

    topArr.sort((a, b) => b - a);
    Result.map((res) => {
      let index = 0;
      let newTopArr = [];
      for (let i = 0; i < 10; i++) {
        if (parseInt(res.total) === topArr[i]) {
          newTopArr.push(res.name);
          topArr[i] = newTopArr[index];
          i++;
        }
      }
    });
    setTop(topArr);
  };

  // const nsFemaleCounter = () => {
  //   let femaleCounter = 0;
  //   let femaleNumberPass = 0;

  //     Result.map((res)=>{

  //       if(res.stream === "NS"){
  //         if(res.gender === "Female"){
  //           femaleCounter++

  //         }
  //       }
  //     })

  //   setNsFemaleCount(femaleCounter)
  // }

  const checkItForSocial = () => {
    setCheckForSocial(true);
  };
  useEffect(() => {
    topTen();
    topTens();
  }, []);

  const handler = (event) => {
    setInput(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    Result.map((res) => {
      if (input === res.id) {
        if (res.stream == "NS") {
          setName(res.name);

          setId(res.id);
          setSchool(res.school);
          setGender(res.gender);
          setMath(res.math);
          setBio(res.bio);
          setChem(res.chem);
          setEng(res.eng);
          setStream(res.stream);
          setApt(res.apt);
          setCivic(res.civics);
          setPhy(res.phy);
          setTotal(res.total);
          // let totalValue = math + chem + bio + civic + eng + apt + phy;
          // res.total = totalValue;
          // setTotal(totalValue);
        }
        if (res.stream === "SS") {
          setName(res.name);
          setId(res.id);
          setSchool(res.school);
          setGender(res.gender);
          setMath(res.math);
          setGeo(res.geo);
          setEco(res.eco);
          setEng(res.eng);
          setStream(res.stream);
          setApt(res.apt);
          setCivic(res.civics);
          setHis(res.his);

          setTotal(res.total);
        }
      }
    });
  };
  const checkIt = (event) => {
    event.preventDefault();
    setCheck(true);
  };

  return (
    <>
      <form>
        <Input
          type="number"
          value={input}
          onChange={handler}
          style={{ marginRight: 10 }}
        />
        <Button
          disabled={!(input.length === 6)}
          type="submit"
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          GO{input.length === 6 ? "🚀" : ""}
        </Button>
      </form>
      {id === input && input ? (
        <div style={{ textAlign: "left" }}>
          {stream === "NS" ? (
            <div>
              <h4>ℹ️ STUDENT INFO</h4>
              <p>👤 Name ➡️ {name}</p>
              <p>👫 Gender ➡️ {gender}</p>
              <p>🏫 School ➡️ {school}</p>
              <p>
                🔴 Stream ➡️{" "}
                {stream === "NS"
                  ? "Natural Science"
                  : stream === "SS"
                  ? "Social Science"
                  : "Not defined"}
              </p>

              <p>🆔 ID ➡️ {id}</p>
              <h4>📊 STUDENT RESULT </h4>
              <p>🧮 Math ➡️ {math}</p>
              <p>🧪 Chemistry ➡️ {chem}</p>
              <p>🧬 Biology ➡️ {bio}</p>
              <p>📝 English ➡️ {eng}</p>
              <p>🪐 Physics ➡️ {phy}</p>
              <p>📚 Civics ➡️ {civic}</p>
              <p>📋 SAT ➡️ {apt}</p>
              <br />
              <p>
                <b>Total(700)</b> ➡️ {total}
              </p>
              <p>
                <b>Total(No Civics)</b> ➡️ {total - civic}
              </p>

              <p>
                <b>Avarage(100%)</b> ➡️ {total / 7}
              </p>
              <p>
                <b>Status ➡️ </b>{" "}
                {gender === "M"
                  ? total - civic >= 363
                    ? "Pass ✅ "
                    : "Fail ⛔"
                  : total - civic >= 351
                  ? "Pass ✅"
                  : "Fail ⛔"}
              </p>
              <Button color="primary" variant="contained" onClick={checkIt}>
                See more
              </Button>
              {check ? (
                <div>
                  <h3> ℹ️ Natural Science Info</h3>
                  <h4> ✅ Top 10 Students from Natural Science by Rank</h4>
                  {top.map((x) => {
                    let i = 1;
                    return (
                      <ul>
                        <li>{x}</li>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <h4>ℹ️ STUDENT INFO</h4>
              <p>👤 Name ➡️ {name}</p>
              <p>👫 Gender ➡️ {gender}</p>
              <p>🏫 School ➡️ {school}</p>
              <p>
                🔴 Stream ➡️{" "}
                {stream === "NS"
                  ? "Natural Science"
                  : stream === "SS"
                  ? "Social Science"
                  : "Not defined"}
              </p>

              <p>🆔 ID ➡️ {id}</p>
              <h4>📊 STUDENT RESULT </h4>
              <p>🧮 Math ➡️ {math}</p>
              <p>📜 History ➡️ {his}</p>
              <p>🏔️ Geography ➡️ {geo}</p>
              <p>📝 English ➡️ {eng}</p>
              <p>📈 Economics ➡️ {eco}</p>
              <p>📚 Civics ➡️ {civic}</p>
              <p>📋 SAT ➡️ {apt}</p>
              <br />
              <p>
                <b>Total(600)</b> ➡️ {total}
              </p>
              <p>
                <b>Total(No Civics)</b> ➡️ {total - civic}
              </p>

              <p>
                <b>Avarage(100%)</b> ➡️ {total / 6}
              </p>
              <p>
                <b>Status ➡️ </b>{" "}
                {gender === "M"
                  ? total - civic >= 264
                    ? "Pass ✅"
                    : "Fail ⛔"
                  : total - civic >= 254
                  ? "Pass ✅ "
                  : "Fail ⛔"}
              </p>

              <Button
                color="primary"
                variant="contained"
                onClick={checkItForSocial}
              >
                See more
              </Button>
              {checkForSocial ? (
                <div>
                  <h3> ℹ️ Social Science Info</h3>
                  <h4> ✅ Top 10 Students from Social Science by Rank</h4>
                  {tops.map((x) => {
                    return (
                      <ul>
                        <li>{x}</li>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      ) : (
        <p style={{ padding: 20 }}>Nothing to show || Check your reg number</p>
      )}
    </>
  );
};
export default ResultViewer;
