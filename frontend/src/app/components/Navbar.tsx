import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";

const Navbar = ({ user }: { user: string }) => {
  const cookiesList = cookies();
  const hasAuthorisation = cookiesList.has("authorisation");

  return (
    <div className="row-span-1">
      <ul className="flex justify-between my-0 m-7 items-center">
        <div>
          <Link href="/">
            <li className="pt-0"><Image src={"/images/logo_mit_text.jpg"} height={150} width={150} alt="Logo mit Text"/></li>
          </Link>
        </div>
        <div>
          <li>{user}</li>
        </div>
        {hasAuthorisation ? (
          <Link href={"/logout"}>
            <h1>Abmelden</h1>
          </Link>
        ) : (
          <div className="flex gap-10">
            <Link href="/login">
              <li>Anmelden</li>
            </Link>
            <Link href="/register">
              <li>Registrieren</li>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
