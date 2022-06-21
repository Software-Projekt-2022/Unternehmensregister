import Link from "next/link";

export default function ProfileCard(props) {

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
            {props.forename} {props.surname}
          </h4>
          <p className="text-secondary mb-1">
            {props.status} bei {props.company}
          </p>
          <Link as="Profil" href={{ pathname: "/profile", query: { id: props.id } }}>
            <button className="btn btn-primary">Profil anzeigen</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
