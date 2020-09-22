import React from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

export default function ListAppointments({ items, deleteItem, updateItem }) {
  return (
    <div className="appointment-list item-list mb-3">
      {items.map(item => (
        <div className="pet-item col media py-3" key={item.aptId}>
          <div className="mr-3">
            <button
              className="pet-delete btn btn-sm btn-danger"
              onClick={() => deleteItem(item)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="pet-info media-body">
            <div className="pet-head d-flex">
              <span
                className="pet-name"
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  updateItem("petName", e.target.innerText, item.aptId)
                }
              >
                {item.petName}
              </span>
              <span className="apt-date ml-auto">
                <Moment
                  date={item.aptDate}
                  parse="YYYY-MM-DD hh:mm"
                  format="YYYY-MMM-D h:mma"
                />
              </span>
            </div>

            <div className="owner-name">
              <span className="label-item">Owner: </span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  updateItem("ownerName", e.target.innerText, item.aptId)
                }
              >
                {item.ownerName}
              </span>
            </div>
            <div
              className="apt-notes"
              contentEditable
              suppressContentEditableWarning
              onBlur={e =>
                updateItem("aptNotes", e.target.innerText, item.aptId)
              }
            >
              {item.aptNotes}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
