import React from 'react';

const Card = () => {
    return (
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex">
            <div class="card" data-card-id={id}>
              <img
                src={url}
                class="card-img-top"
                alt="list"
              />
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${alt_description}</p>
                <div>
                  {/* <!-- update button --> */}
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                  >
                    Update
                  </button>

                  {/* <!-- delete button --> */}
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
    );

};

export default Card;
