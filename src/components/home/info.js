import React from 'react';
import {Link} from "gatsby";
import Title from "../globals/title";

export default function Info() {
    return (
      <section className="py-5">
        <div className="container">
        <Title title="our story" />
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-5">
                Necem ut lenius Gallus ut modum lenius excedamus refert modum refert me huius modi necem quorum huius multa quod cadaveribus scrutabatur cadaveribus modum leo pastus ferociens modum ut necem modum Gallus pastus Gallus cadaveribus est nihilo pastus huius quae multa cadaveribus professione evitandum ferociens lenius singula refert cadaveribus necem huius.
              </p>
              <Link to="/about/">
                <button className="btn text-uppercase btn-yellow">about page</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

