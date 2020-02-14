import React from 'react';
import Title from '../globals/title';

export default function contact() {
    return (
      <div>
        <section className="contact py-5">
          <Title title="contact us" />
          <div className="row">
            <div className="col-10 col-sm-8 col-md-6 mx-auto">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="John Smith" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="JohnSmith@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    row="5"
                    placeholder="your description..." />
                </div>
                <button
                  type="submit"
                  className="btn btn-yellow btn-block text-capitalize mt-5">
                submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

