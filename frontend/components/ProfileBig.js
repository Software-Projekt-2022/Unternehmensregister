const ProfileBig = (props) => {
  return (
    <div className="card-body">
      <div className="d-flex flex-column align-items-center text-center">
        <img
          src="https://avatars.githubusercontent.com/u/23001099?v=4"
          alt="Profile Image"
          className="rounded-circle"
          width="150"
        />
        <div className="mt-3">
          <h4>
            {props.user.forename} {props.user.surname}
          </h4>
          <p className="text-secondary mb-1">
            {props.user.status} bei {props.company.name}
          </p>
          <p className="text-muted font-size-sm" id="p_location">
            Alter: {props.user.age}
          </p>
          <button className="btn btn-primary">Email senden</button>
          <button className="btn btn-outline-primary">Chat</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBig;
