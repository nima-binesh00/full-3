import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CustomDropdown from "./Dropdown";
import AddTaskModal from "./AddCardModuls";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addcard, chengeFilter } from "../stores/state";
function NavList({ name, path, Click }) {
  const dispath = useDispatch();
  return (
    <NavLink
      onClick={() => {
        dispath(chengeFilter(Click));
      }}
      to={path}
      style={({ isActive }) =>
        isActive
          ? {
              border: "solid #8400ffff 3px",
              boxShadow: "0 0 10px #8a2be2, 0 0 20px #8a2be2 ",
            }
          : undefined
      }
      className="w-100 ps-2 p-2 text-decoration-none rounded-3"
    >
      {name}
    </NavLink>
  );
}
function List() {
  const dispath = useDispatch();
  const data = useSelector((d) => d.Card);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="d-flex flex-column align-items-center p-4 gap-2 mb-4 bgdark">
        <h1 className="fs-5">TO-DO LIDT</h1>
        <Button
          variant="primary"
          onClick={() => {
            // dispath(Addcard({}));
            setShowModal(true);
          }}
          className="w-100 btb"
        >
          Add New Task
        </Button>
      </section>
      <section className="d-flex flex-column p-3 bgdark">
        <NavList
          name={"All tasks"}
          path={"/"}
          Click={{ name: "ALL", fake: false }}
        />
        <NavList
          name={"Importaed tasks"}
          path={"/Importaed"}
          Click={{ name: "important", fake: true }}
        />
        <NavList
          name={"Completed tasks"}
          path={"/Completed"}
          Click={{ name: "completed", fake: true }}
        />
        <NavList
          name={"Uncompleted tasks"}
          path={"/Uncompleted"}
          Click={{ name: "completed", fake: false }}
        />
        <CustomDropdown />
      </section>

      <AddTaskModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default List;
