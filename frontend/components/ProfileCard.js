import Link from "next/link";

export default function ProfileCard(props) {

  let img = props.image;
  if (props.image == null) {
    img = "https://img.icons8.com/ultraviolet/344/test-account.png"
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
            {props.forename} {props.surname}
          </h4>
          <Link as="Profil" href={{ pathname: "/profile", query: { id: props.id } }}>
            <button className="btn btn-primary">Profil anzeigen</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
