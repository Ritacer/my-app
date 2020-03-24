import React from "react";

export default function Search() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-auto">
            <form className="form-inline">
              <label className="sr-only" for="inlineFormInputName2" />
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Enter city"
                autoComplete="off"
              />
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}
