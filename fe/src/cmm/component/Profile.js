import React from 'react';

const Profile = () => {
    return (
        <div className="container-fluid bg-1 text-center">
            <h3 className="margin">Who Am I?</h3>
            <img
                src="https://www.w3schools.com/bootstrap/bird.jpg"
                className="img-responsive img-circle margin"
                alt="Bird"
            />
            <h3>I'm an adventurer</h3>
        </div>
    );
};

export default Profile;
