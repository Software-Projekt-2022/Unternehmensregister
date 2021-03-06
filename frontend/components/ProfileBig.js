const ProfileBig = (props) => {


  console.log("OK")
  console.log(props)

  let img = props.user.user.image;
  if (img == null) {
    img = "https://img.icons8.com/ultraviolet/344/test-account.png"
  }
  let text = ' bei '
  if (props.user.company.name == "") {
    text = ''
  }

  return (
    <div className="card-body">
      <div className="d-flex flex-column align-items-center text-center">
        <img
          src={img}
          alt="Profile Image"
          className="rounded-circle"
          width="150"
        />
        <div className="mt-3">
          <h4>
            {props.user.user.forename} {props.user.user.surname}
          </h4>
          <p className="text-secondary mb-1">
            {props.user.user.status} {text} {props.user.company.name}
          </p>
          <p className="text-muted font-size-sm" id="p_location">
            Alter: {props.user.user.age}
          </p>
          <button className="btn btn-primary">Email senden</button>
          <button className="btn btn-outline-primary">Chat</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBig;
