import { useSession } from "next-auth/react";
import NoPerm from "../components/NoPerm";

const Protected = ({ children }) => {
  const { data: session } = useSession();

  if (session) {
    return <>{children}</>;
  } else {
    return <NoPerm />;
  }
};

export default Protected;
