import React, { useState, useEffect } from "react";
import axios from "axios";
import EmpCard from "./EmpCard";
import FilterOption from "./FilterOption";

const DATA_URL = "https://waitominuteapi.tk/tnc";

const App = () => {
  const [emp, setEmp] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredEmp, setFilteredEmp] = useState([]);

  const filterdata = emp.map((data) => data.desgination);

  const udata = (array) =>
    array.filter((data, index, arr) => arr.indexOf(data) === index);

  const fname = udata(filterdata).sort();

  const nameOption = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    empData();
    setFilteredEmp();
  }, []);

  useEffect(() => {
    setFilteredEmp(
      emp.filter((data) =>
        data.desgination.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, emp]);

  const empData = async () => {
    await axios
      .get(DATA_URL)
      .then((res) => {
        setEmp(res.data.tnc);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchvalue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container-fluid">
      <FilterOption nameOption={nameOption} data={fname} />
      <div className="row mb-2">
        <label className=" bg-primary form-label ">
          Search Box:{" "}
          <span className="bg-primary align-items-end">
            {filteredEmp.length}
          </span>
        </label>
        <input
          onChange={searchvalue}
          className=" form-control rounded-top"
          type="text"
          placeholder="Search Name..."
        />
      </div>
      <div className="row bg-blue gy-4">
        {filteredEmp.map((data, i) => (
          <EmpCard
            key={i}
            name={data.name}
            post={data.desgination}
            img={data.img}
            id={data}
            empcode={data.empcode}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
