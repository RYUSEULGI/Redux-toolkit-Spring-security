import React from 'react';

const Contents = () => {
    return (
        <div className="container-fluid bg-3 text-center">
            <h3 className="margin">Where To Find Me?</h3>
            <br />
            <div className="row">
                <div className="col-sm-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <img
                        src="https://www.w3schools.com/bootstrap/birds1.jpg"
                        className="img-responsive margin"
                        alt="Image1"
                    />
                </div>
                <div className="col-sm-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <img
                        src="https://www.w3schools.com/bootstrap/birds2.jpg"
                        className="img-responsive margin"
                        alt="Image2"
                    />
                </div>
                <div className="col-sm-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <img
                        src="https://www.w3schools.com/bootstrap/birds3.jpg"
                        className="img-responsive margin"
                        alt="Image3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contents;
