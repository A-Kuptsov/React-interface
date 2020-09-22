import React from "react";
import { FaPlus } from "react-icons/fa";
import { today, currentTime } from "./utils";

export default function AddAppointments({
  isShowAddItemForm,
  setShowAddItemForm,
  addItem
}) {
  const INITIAL_STATE = {
    petName: "",
    ownerName: "",
    aptDate: today(),
    aptTime: currentTime(),
    aptNotes: ""
  };

  const [state, setState] = React.useState(INITIAL_STATE);

  const toggleForm = () => {
    setShowAddItemForm(!isShowAddItemForm);
  };

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAdd = e => {
    e.preventDefault();
    const newItem = {
      petName: state.petName,
      ownerName: state.ownerName,
      aptDate: state.aptDate + " " + state.aptTime,
      aptNotes: state.aptNotes
    };
    addItem(newItem);
    setState(INITIAL_STATE);
    toggleForm();
  };

  return (
    <div
      className={
        "card textcenter mt-3 " + (isShowAddItemForm ? "" : "add-appointment")
      }
    >
      <div
        className="apt-addheading card-header bg-primary text-white"
        onClick={toggleForm}
      >
        <FaPlus /> Add Appointment
      </div>

      <div className="card-body">
        <form id="aptForm" noValidate onSubmit={handleAdd}>
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="petName"
              readOnly
            >
              Pet Name
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="petName"
                placeholder="Pet's Name"
                value={state.petName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="ownerName"
            >
              Pet Owner
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="ownerName"
                placeholder="Owner's Name"
                value={state.ownerName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="aptDate"
            >
              Date
            </label>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="aptDate"
                id="aptDate"
                onChange={handleChange}
                value={state.aptDate}
              />
            </div>
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="aptTime"
            >
              Time
            </label>
            <div className="col-md-4">
              <input
                type="time"
                className="form-control"
                name="aptTime"
                id="aptTime"
                value={state.aptTime}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row">
            <label className="col-md-2 text-md-right" htmlFor="aptNotes">
              Apt. Notes
            </label>
            <div className="col-md-10">
              <textarea
                className="form-control"
                rows="4"
                cols="50"
                name="aptNotes"
                id="aptNotes"
                placeholder="Appointment Notes"
                value={state.aptNotes}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group form-row mb-0">
            <div className="offset-md-2 col-md-10">
              <button type="submit" className="btn btn-primary d-block ml-auto">
                Add Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
